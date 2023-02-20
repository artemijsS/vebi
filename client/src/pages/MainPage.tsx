import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from "react-i18next";
import { Header, Footer, Home, About, Services, Info, Contacts, Advantages } from '../components';

function MainPage(): JSX.Element {

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
        <div>
            <Helmet>
                <title>{t("seo:mainPage.title")}</title>
            </Helmet>
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
