import React, { useRef, useState, useEffect } from 'react';
import { Header, Home, About, Services, Advantages, Portfolio, Contacts, Info, Footer } from '../components';
import { useTranslation } from "next-i18next";
import MainContainer from '../components/MainContainer';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface HomePageProps {
  emailJSPublic: string
}

export default function HomePage({ emailJSPublic }: HomePageProps) {

  const { t } = useTranslation();

  const [refs] = useState({
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    advantages: useRef<HTMLElement>(null),
    info: useRef<HTMLElement>(null),
    contacts: useRef<HTMLElement>(null),
    portfolio: useRef<HTMLElement>(null)
  })

  useEffect(() => {
    const trustpilotScript = document.createElement("script");
    trustpilotScript.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    trustpilotScript.async = true;
    document.body.appendChild(trustpilotScript);
  }, [])

  return (
    <MainContainer
        title={t("translation:seo.mainPage.title")}
        description={t("translation:seo.mainPage.description")}
        keywords={t("translation:seo.mainPage.keyWords")}
    >
      <Header refs={refs} />
      <div className="minusHeader"/>
      <Home ref={refs.home} />
      <div className="wrapper">
        <div className="secondWrapper">
          <div className="blockTrust b-15-bottom">
            <div style={{ width: "100%" }} className="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6466112b8598295b662c1faa" data-style-height="24px" data-style-width="100%" data-theme="dark" data-min-review-count="0" data-without-reviews-preferred-string-id="2" data-style-alignment="center">
              <a style={{ padding: "30px 0px", display: "block" }} href="https://www.trustpilot.com/review/vebi.lv" target="_blank" rel="noopener">Trustpilot</a>
            </div>
          </div>
        </div>
      </div>
      <About ref={refs.about} />
      <Services ref={refs.services} />
      <Advantages ref={refs.advantages} />
      <Portfolio ref={refs.portfolio} />
      <Contacts ref={refs.contacts} emailJSPublic={emailJSPublic} />
      {/*<Info ref={refs.info} />*/}
      <Footer />
    </MainContainer>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      emailJSPublic: process.env.EMAIL_JS_PUBLIC || ""
    },
  };
}
