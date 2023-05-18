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
            <div className="wrapper">
                <div className="secondWrapper">
                    <div className="blockTrust b-15-bottom">
                        <div style={{ width: "100%" }} className="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6466112b8598295b662c1faa" data-style-height="24px" data-style-width="100%" data-theme="dark" data-min-review-count="0" data-without-reviews-preferred-string-id="2" data-style-alignment="center">
                            <a href="https://www.trustpilot.com/review/vebi.lv" target="_blank" rel="noopener">Trustpilot</a>
                        </div>
                    </div>
                </div>
            </div>
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
