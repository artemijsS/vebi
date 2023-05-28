import React from 'react';
import { useTranslation } from "next-i18next";
import MainContainer from '../components/MainContainer';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage() {

  const { t } = useTranslation();

  return (
    <MainContainer
        title={t("translation:seo.mainPage.title")}
        description={t("translation:seo.mainPage.description")}
        keywords={t("translation:seo.mainPage.keyWords")}
    >
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
