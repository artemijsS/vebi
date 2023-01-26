import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './footer.css'
import Logo from '../../assets/logo/logo';
import { Discord, LinkedIn, GitHub } from '../../assets/socials';

function Footer(): JSX.Element {

    const [year, setYear] = useState<string>("2023");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, [])

    return (
        <footer>
            <div className="footer1-block">
                <div className="wrapper">
                    <div className="footer1">
                        <div className="logo">
                            <Logo/>
                        </div>
                        <div className="socials">
                            <a href="https://github.com/vebi-lv" target="_blank" rel="noreferrer"><img src={GitHub} alt="error"/></a>
                            <a href="https://discord.gg/MtyWYn7d" target="_blank" rel="noreferrer"><img src={Discord} alt="error"/></a>
                            <a href="https://www.linkedin.com/in/artemijs-semjannikovs/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="error"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2-block">
                <div className="wrapper">
                    <div className="footer2">
                        <div className="copyRight">© {year} Vebi. All rights are reserved</div>
                        <div className="mail"><a href="mailto:info@vebi.lv">info@vebi.lv</a></div>
                        <div className="terms">
                            <Link to={"/"}>Terms of use</Link>
                            <Link to={"/"}>User Agreement</Link>
                            <Link to={"/"}>Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
