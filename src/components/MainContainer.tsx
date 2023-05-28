import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Politics from "./Politics/Politics";
// import Header from './header/Header';
// import Footer from './footer/Footer';

interface MainContainer {
    children?: React.ReactNode,
    title?: string | null,
    description?: string | null,
    keywords?: string | null,
    ogImage?: string
}

const MainContainer = ({ children, title, description, keywords, ogImage }: MainContainer) => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FFF" />
                <meta name="author" content="vebi" />
                {title && <title>{ title }</title>}
                {description && <meta name="description" content={ description } />}
                {keywords && <meta name="keywords" content={ keywords } />}

                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://vebi.lv" + (router.locale === "lv" ? "" : "/" + router.locale) + router.pathname} />
                {ogImage ?
                    <meta property="og:image" content={ogImage} />
                    :
                    <meta property="og:image" content="https://vebi.lv/logo512.png" />
                }
                {title && <meta property="og:title" content={ title } />}
                {description && <meta property="og:description" content={ description } />}
                <meta property="og:locale" content={router.locale} />
                <meta property="og:site_name" content="Maksv Real estate" />

                <link rel="alternate" hrefLang="en" href={"https://vebi.lv" + router.pathname}/>
                <link rel="alternate" hrefLang="lv" href={"https://vebi.lv/lv" + router.pathname}/>
                <link rel="alternate" hrefLang="ru" href={"https://vebi.lv/ru" + router.pathname}/>
                <link rel="alternate" hrefLang="x-default" href="https://vebi.lv"/>

            </Head>
            <Politics />
            {children}
        </>
    )
}

export default MainContainer;
