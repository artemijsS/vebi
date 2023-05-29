import React, { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from 'next-i18next';
import Cookies from 'js-cookie';
import Logo from '../../assets/logo/logo';
import { Ru, Lv, En } from '../../assets/languages';
import { MyContext } from "../../context/MainContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    refs: {
        [home: string]: React.RefObject<HTMLElement>,
        about: React.RefObject<HTMLElement>,
        services: React.RefObject<HTMLElement>,
        advantages: React.RefObject<HTMLElement>,
        portfolio: React.RefObject<HTMLElement>,
        contacts: React.RefObject<HTMLElement>,
        info: React.RefObject<HTMLElement>,
    }
}

function Header({refs}:HeaderProps): JSX.Element {

    const router = useRouter()
    const { state, updateState } = useContext(MyContext);

    const [activeSection, setActiveSection] = useState('home');
    const [burgerStatus, setBurgerStatus] = useState<Boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>("");
    const headerRef = useRef<HTMLElement>(null);
    const burgerStatusRef = useRef<Boolean>(burgerStatus);


    const { t, i18n } = useTranslation();

    useEffect(() => {
        setCurrentLanguage(i18n.language)
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', widthCheck)
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', widthCheck)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
        updateState({ ...state, politics: politics })
    }

    return (
        <header ref={headerRef} className={"headerBlock"}>
            <div className="wrapper">
                <div className={"header"}>
                    <div className="logo">
                        <Logo />
                    </div>
                    {burgerStatus &&
                    <div className={"mob-language-select"}>
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"lv"}  onClick={() => {setCurrentLanguage("lv"); Cookies.set('language', "lv")}} className="language" style={{ display: currentLanguage.includes("lv") ? "none" : "block" }}>LV</Link>
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"en"}  onClick={() => {setCurrentLanguage("en"); Cookies.set('language', "en")}} className="language" style={{ display: currentLanguage.includes("en") ? "none" : "block" }}>EN</Link>
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"ru"}  onClick={() => {setCurrentLanguage("ru"); Cookies.set('language', "ru")}} className="language" style={{ display: currentLanguage.includes("ru") ? "none" : "block" }}>RU</Link>
                    </div>
                    }
                    <div className="burger" onClick={() => onBurgerClick()}>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                    <nav className={"navBlock"}>
                        <button onClick={() => onSectionClick("home")} className={activeSection === "home" ? "active link" : " link"}>{t("translation:header.home")}</button>
                        <button onClick={() => onSectionClick("about")} className={activeSection === "about" ? "active link" : " link"}>{t("translation:header.about")}</button>
                        <button onClick={() => onSectionClick("services")} className={activeSection === "services" ? "active link" : " link"}>{t("translation:header.services")}</button>
                        <button onClick={() => onSectionClick("portfolio")} className={activeSection === "portfolio" ? "active link" : " link"}>{t("translation:header.portfolio")}</button>
                        <button onClick={() => onSectionClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>{t("translation:header.contacts")}</button>
                    </nav>
                    { currentLanguage &&
                    <div className="language-select">
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"lv"} onClick={() => {setCurrentLanguage("lv"); Cookies.set('language', "lv")}}
                                style={{display: currentLanguage.includes("lv") ? "none" : "block"}}><Image src={Lv}
                                                                                                          alt="LV"/>
                        </Link>
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"en"} onClick={() => {setCurrentLanguage("en"); Cookies.set('language', "en")}}
                                style={{display: currentLanguage.includes("en") ? "none" : "block"}}><Image src={En}
                                                                                                          alt="EN"/>
                        </Link>
                        <Link href={{pathname: router.pathname, query: router.query}} locale={"ru"}  onClick={() => {setCurrentLanguage("ru"); Cookies.set('language', "ru")}}
                                style={{display: currentLanguage.includes("ru") ? "none" : "block"}}><Image src={Ru}
                                                                                                          alt="RU"/>
                        </Link>
                    </div>
                    }
                </div>
            </div>
            {burgerStatus &&
            <div className={"burgerOpen"}>
                <div className="wrapper">
                    <div className="secondWrapper">
                        <nav className={"navBlock"}>
                            <div onClick={() => onSectionBurgerClick("about")} className={activeSection === "about" ? "active link" : " link"}>{t("translation:header.about")}</div>
                            <div onClick={() => onSectionBurgerClick("services")} className={activeSection === "services" ? "active link" : " link"}>{t("translation:header.services")}</div>
                            <div onClick={() => onSectionBurgerClick("portfolio")} className={activeSection === "advantages" ? "active link" : " link"}>{t("translation:header.portfolio")}</div>
                            <div onClick={() => onSectionBurgerClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>{t("translation:header.contacts")}</div>
                            <div className="terms">
                                <button onClick={() => onPoliticsClick("cookie")}>{t("translation:header.cookie")}</button>
                                <button onClick={() => onPoliticsClick("privacy")}>{t("translation:header.privacyPolicy")}</button>
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
