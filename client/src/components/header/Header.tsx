import React, { useState, useEffect, useRef } from 'react';
import './header.css'
import Logo from '../../assets/logo/logo';

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

    return (
        <header ref={headerRef}>
            <div className="wrapper">
                <div className={"header"}>
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="burger">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                    <nav>
                        <div onClick={() => onSectionClick("home")} className={activeSection === "home" ? "active link" : " link"}>Home</div>
                        <div onClick={() => onSectionClick("about")} className={activeSection === "about" ? "active link" : " link"}>About</div>
                        <div onClick={() => onSectionClick("services")} className={activeSection === "services" ? "active link" : " link"}>Services</div>
                        <div onClick={() => onSectionClick("blog")} className={activeSection === "blog" ? "active link" : " link"}>Blog</div>
                        <div onClick={() => onSectionClick("contacts")} className={activeSection === "contacts" ? "active link" : " link"}>Contacts</div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
