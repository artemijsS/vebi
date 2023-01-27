import React from 'react';
import './header.css'
import Logo from '../../assets/logo/logo';

interface HeaderProps {
    activeSection: string,
    onSectionClick: (section: string) => void
}

function Header({ activeSection, onSectionClick }:HeaderProps): JSX.Element {
    return (
        <header>
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
