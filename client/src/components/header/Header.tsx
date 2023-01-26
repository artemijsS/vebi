import React from 'react';
import './header.css'
import Logo from '../../assets/logo/logo';

function Header(): JSX.Element {
    return (
        <header>
            <div className="wrapper">
                <div className={"header"}>
                    <div className="logo">
                        <Logo />
                    </div>
                    <nav>
                        <div className="link active">Home</div>
                        <div className="link">About</div>
                        <div className="link">Services</div>
                        <div className="link">Blog</div>
                        <div className="link">Contact</div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
