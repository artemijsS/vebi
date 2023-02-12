import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { useDispatch } from "react-redux";
import Logo from '../../assets/logo/logo';
import { Ru, Lv, En } from '../../assets/languages';
import { setPolitics } from "../../redux/actions/politics";

import './header.css'

interface HeaderProps {
    refs: {
        [home: string]: React.RefObject<HTMLElement>,
        about: React.RefObject<HTMLElement>,
        services: React.RefObject<HTMLElement>,
        info: React.RefObject<HTMLElement>,
        contacts: React.RefObject<HTMLElement>,
        advantages: React.RefObject<HTMLElement>
    }
}

function Header({refs}:HeaderProps): JSX.Element {

    const [activeSection, setActiveSection] = useState('home');
    const [burgerStatus, setBurgerStatus] = useState<Boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>(i18next.language);
    const headerRef = useRef<HTMLElement>(null);
    const burgerStatusRef = useRef<Boolean>(burgerStatus);

    const { t } = useTranslation();
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', widthCheck)
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', widthCheck)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        i18next.changeLanguage(currentLanguage);
    }, [currentLanguage])

    const onScroll = (e: Event) => {
        const window = e.currentTarget as Window;
        const scrollY = window.scrollY;
        if (scrollY < Number(refs.about.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("home")
        } else if (scrollY <= Number(refs.services.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("about")
        } else if (scrollY <= Number(refs.advantages.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("services")
        } else if (scrollY <= Number(refs.info.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("advantages")
        } else if (scrollY <= Number(refs.contacts.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("info")
        } else if (scrollY >= Number(refs.contacts.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("contacts")
        }
    }

    const onSectionClick = (section: string) => {
        window.scrollTo(0, Number(refs[section].current?.offsetTop) - Number(headerRef.current?.offsetHeight));
    }

    const widthCheck = () => {
        if (burgerStatusRef.current && window.innerWidth > 600)
            onBurgerClick(true)
    }

    const onBurgerClick = (close: Boolean = false) => {
        if (burgerStatus || close) {
            document.documentElement.style.scrollBehavior = "smooth"
            window.onscroll = function() {};
        } else {
            document.documentElement.style.scrollBehavior = "unset"
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
        burgerStatusRef.current = !burgerStatus;
        setBurgerStatus(!burgerStatus);
    }

    const onSectionBurgerClick = (section: string) => {
        onBurgerClick();
        onSectionClick(section);
    }

    const onPoliticsClick = (politics: string) => {
        dispatch(setPolitics(politics));
    }

    return (
        <header ref={headerRef}>
            <div className="wrapper">
                <div className={"header"}>
                    <div className="logo">
                        <Logo />
                    </div>
                    {burgerStatus &&
                        <div className={"mob-language-select"}>
                            <div onClick={() => setCurrentLanguage("lv")} className="language" style={{ display: currentLanguage.includes("lv") ? "none" : "block" }}>LV</div>
                            <div onClick={() => setCurrentLanguage("en")} className="language" style={{ display: currentLanguage.includes("en") ? "none" : "block" }}>EN</div>
                            <div onClick={() => setCurrentLanguage("ru")} className="language" style={{ display: currentLanguage.includes("ru") ? "none" : "block" }}>RU</div>
                        </div>
                    }
                    <div className="burger" onClick={() => onBurgerClick()}>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                    <nav>
                        <button onClick={() => onSectionClick("home")} className={activeSection === "home" ? "active link" : " link"}>{t("header:home")}</button>
                        <button onClick={() => onSectionClick("about")} className={activeSection === "about" ? "active link" : " link"}>{t("header:about")}</button>
                        <button onClick={() => onSectionClick("services")} className={activeSection === "services" ? "active link" : " link"}>{t("header:services")}</button>
                        <button onClick={() => onSectionClick("advantages")} className={activeSection === "advantages" ? "active link" : " link"}>{t("header:advantages")}</button>
                        <button onClick={() => onSectionClick("info")} className={activeSection === "info" ? "active link" : " link"}>{t("header:info")}</button>
                        <button onClick={() => onSectionClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>{t("header:contacts")}</button>
                    </nav>
                    <div className="language-select">
                        <button onClick={() => setCurrentLanguage("lv")} style={{ display: currentLanguage.includes("lv") ? "none" : "block" }}><img src={Lv} alt="LV"/></button>
                        <button onClick={() => setCurrentLanguage("en")} style={{ display: currentLanguage.includes("en") ? "none" : "block" }}><img src={En} alt="EN"/></button>
                        <button onClick={() => setCurrentLanguage("ru")} style={{ display: currentLanguage.includes("ru") ? "none" : "block" }}><img src={Ru} alt="RU"/></button>
                    </div>
                </div>
            </div>
            {burgerStatus &&
                <div className={"burgerOpen"}>
                    <div className="wrapper">
                        <div className="secondWrapper">
                            <nav>
                                <div onClick={() => onSectionBurgerClick("about")} className={activeSection === "about" ? "active link" : " link"}>{t("header:about")}</div>
                                <div onClick={() => onSectionBurgerClick("services")} className={activeSection === "services" ? "active link" : " link"}>{t("header:services")}</div>
                                <div onClick={() => onSectionBurgerClick("advantages")} className={activeSection === "advantages" ? "active link" : " link"}>{t("header:advantages")}</div>
                                <div onClick={() => onSectionBurgerClick("info")} className={activeSection === "info" ? "active link" : " link"}>{t("header:info")}</div>
                                <div onClick={() => onSectionBurgerClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>{t("header:contacts")}</div>
                                <div className="terms">
                                    <button onClick={() => onPoliticsClick("cookie")}>{t("header:cookie")}</button>
                                    <button onClick={() => onPoliticsClick("userAg")}>{t("header:userAgreement")}</button>
                                    <button onClick={() => onPoliticsClick("privacy")}>{t("header:privacyPolicy")}</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header;
