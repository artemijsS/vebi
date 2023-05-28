import React, { useRef, useState } from 'react';
import { useTranslation } from "next-i18next";
import MainContainer from '../components/MainContainer';
import { Header } from '../components';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {

  const { t } = useTranslation();

  const [refs] = useState({
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    advantages: useRef<HTMLElement>(null),
    info: useRef<HTMLElement>(null),
    contacts: useRef<HTMLElement>(null)
  })

  return (
    <MainContainer
        title={t("translation:seo.mainPage.title")}
        description={t("translation:seo.mainPage.description")}
        keywords={t("translation:seo.mainPage.keyWords")}
    >
      <Header refs={refs} />
      <div className="minusHeader"/>
      home
    </MainContainer>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
