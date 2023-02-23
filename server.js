import fs from 'node:fs/promises'
import express from 'express'
import i18next from "i18next";
import middleware from "i18next-http-middleware";
import nodeFsBackend from "i18next-node-fs-backend";
import path from "path";
import cors from 'cors';
import { Helmet } from 'react-helmet';
import { config } from 'dotenv';

config();

//routes
import router from './routes/pdf.routes.js';

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5000
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

app.use(cors());
app.use(express.json({ extended: true }));

// pdf
app.use('/api/pdf', router);


//**************************
//  REACT APP
//**************************

//Init i18n
i18next
    .use(middleware.LanguageDetector)
    .use(nodeFsBackend)
    .init({
      fallbackLng: "en",
      lowerCaseLng: true,
      preload: ["en","lv","ru"],
      backend: {loadPath: path.join(`./dist/server/locales/{{lng}}/{{ns}}.json`)},
      useCookie: true,
      detection: {
        order: ['querystring', 'cookie', 'header'],
        lookupCookie: 'lang',
        lookupQuerystring: 'lang',
        caches: ['cookie']
      }
    });

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
app.use('*', middleware.handle(i18next, {
    removeLngFromUrl: false
}), async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '/')
    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    // const rendered = await render(req.i18n, url, ssrManifest)
    const rendered = await render(req.i18n, url)
    const helmet = Helmet.renderStatic();

    // Setup i18n for React component on client side after DOM is ready on client side
    const initialI18nStore = {};
    req.i18n.languages.forEach(l => {
        initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
    });
    const initialLanguage = req.i18n.options.lng;

    const html = template
      .replace(`lang="en"`, helmet.htmlAttributes.toString() ?? '')
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace("<!--helmet-->", helmet.title.toString() + helmet.meta.toString())
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

//**************************

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
