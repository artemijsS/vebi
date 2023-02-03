import React, { useState, useEffect, useRef } from 'react';
import './header.css'
import Logo from '../../assets/logo/logo';
import {Link} from "react-router-dom";

interface HeaderProps {
    refs: {
        [home: string]: React.RefObject<HTMLElement>,
        about: React.RefObject<HTMLElement>,
        services: React.RefObject<HTMLElement>,
        blog: React.RefObject<HTMLElement>,
        contacts: React.RefObject<HTMLElement>
    }
}

function Header({refs}:HeaderProps): JSX.Element {

    const [activeSection, setActiveSection] = useState('home');
    const [burgerStatus, setBurgerStatus] = useState<Boolean>(false);
    const headerRef = useRef<HTMLElement>(null);


    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
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
        } else if (scrollY <= Number(refs.blog.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("services")
        } else if (scrollY <= Number(refs.contacts.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("blog")
        } else if (scrollY >= Number(refs.contacts.current?.offsetTop) - Number(headerRef.current?.offsetHeight) - 5) {
            setActiveSection("contacts")
        }
    }

    const onSectionClick = (section: string) => {
        window.scrollTo(0, Number(refs[section].current?.offsetTop) - Number(headerRef.current?.offsetHeight));
    }

    const onBurgerClick = () => {
        if (burgerStatus) {
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
        setBurgerStatus(!burgerStatus);
    }

    const onSectionBurgerClick = (section: string) => {
        onBurgerClick();
        onSectionClick(section);
    }

    return (
        <header ref={headerRef}>
            <div className="wrapper">
                <div className={"header"}>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="burger" onClick={onBurgerClick}>
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                    <nav>
                        <button onClick={() => onSectionClick("home")} className={activeSection === "home" ? "active link" : " link"}>Home</button>
                        <button onClick={() => onSectionClick("about")} className={activeSection === "about" ? "active link" : " link"}>About</button>
                        <button onClick={() => onSectionClick("services")} className={activeSection === "services" ? "active link" : " link"}>Services</button>
                        <button onClick={() => onSectionClick("blog")} className={activeSection === "blog" ? "active link" : " link"}>Blog</button>
                        <button onClick={() => onSectionClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>Contacts</button>
                    </nav>
                </div>
            </div>
            {burgerStatus &&
                <div className={"burgerOpen"}>
                    <div className="wrapper">
                        <div className="secondWrapper">
                            <nav>
                                <div onClick={() => onSectionBurgerClick("about")} className={activeSection === "about" ? "active link" : " link"}>About</div>
                                <div onClick={() => onSectionBurgerClick("services")} className={activeSection === "services" ? "active link" : " link"}>Services</div>
                                <div onClick={() => onSectionBurgerClick("blog")} className={activeSection === "blog" ? "active link" : " link"}>Blog</div>
                                <div onClick={() => onSectionBurgerClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>Contacts</div>
                                <div className="terms">
                                    <Link to={"/"}>Cookie Policy</Link>
                                    <Link to={"/"}>User Agreement</Link>
                                    <Link to={"/"}>Privacy Policy</Link>
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
