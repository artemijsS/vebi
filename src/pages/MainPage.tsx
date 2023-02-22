import React, { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Header, Footer, Home, About, Services, Info, Contacts, Advantages } from '../components';
import Seo from '../utils/Seo';

function MainPage(): JSX.Element {

    const { t, i18n } = useTranslation();

    const [refs] = useState({
        home: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        services: useRef<HTMLElement>(null),
        advantages: useRef<HTMLElement>(null),
        info: useRef<HTMLElement>(null),
        contacts: useRef<HTMLElement>(null)
    })

    return (
        <div>
            <Seo
                language={i18n.language}
                title={t("seo.mainPage.title") || ""}
                description={t("seo.mainPage.description") || ""}
                keywords={t("seo.mainPage.keyWords") || ""}
            />
            <div className="minusHeader"/>
            <Header refs={refs}/>
            <Home ref={refs.home}/>
            <About ref={refs.about}/>
            <Services ref={refs.services}/>
            <Advantages ref={refs.advantages}/>
            <Info ref={refs.info}/>
            <Contacts ref={refs.contacts}/>
            <Footer/>
        </div>
    )
}

export default MainPage;
