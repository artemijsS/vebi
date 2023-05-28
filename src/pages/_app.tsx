import '@/styles/reset.css'
import '@/styles/globals.css'
import '@/styles/politics.css'
import '@/styles/header.css'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { MainContext } from '../context/MainContext';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from 'js-cookie';


const App = ({ Component, pageProps }: AppProps) => {

  const router = useRouter();

  useEffect(() => {
    const lang = Cookies.get('language');
    const { pathname, query } = router;
    router.push({pathname, query}, {pathname}, { locale: lang });
  }, []);

  return (
      <MainContext>
          <GoogleAnalytics gaMeasurementId={"G-YNDBHH9T0M"}/>
          <Component {...pageProps} />
      </MainContext>
  )
}

export default appWithTranslation(App);
