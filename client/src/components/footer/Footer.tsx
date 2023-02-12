import React, { useState, useEffect } from 'react';
import './footer.css'
import Icon from '../../assets/logo/icon';
import { LinkedIn, Telegram, Facebook } from '../../assets/socials';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setPolitics } from "../../redux/actions/politics";


function Footer(): JSX.Element {

    const { t } = useTranslation();
    const dispatch = useDispatch()

    const [year, setYear] = useState<string>("2023");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, [])

    const onPoliticsClick = (politics: string) => {
        dispatch(setPolitics(politics));
    }

    return (
        <footer>
            <div className="footer1-block">
                <div className="wrapper">
                    <div className="footer1">
                        <div className="logo">
                            <Icon/>
                            <div className="slogan">
                                Your <span className={"cl-pink"}>success</span> <span className={"capLetter-mobile"}>is</span> our <span className={"cl-pink-mobile"}>aim</span>
                            </div>
                        </div>
                        <div className="socials">
                            <a href="https://www.linkedin.com/company/vebi" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="error"/></a>
                            <a href="https://t.me/vebilv" target="_blank" rel="noreferrer"><img src={Telegram} alt="error"/></a>
                            <a href="http://facebook.com/vebi.lv" target="_blank" rel="noreferrer"><img src={Facebook} alt="error"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2-block">
                <div className="wrapper">
                    <div className="footer2">
                        <div className="copyRight">© {year} Vebi. All rights reserved</div>
                        <div className="mail"><a href="mailto:info@vebi.lv">info@vebi.lv</a></div>
                        <div className="terms">
                            <button onClick={() => onPoliticsClick("privacy")}>{t("footer:privacy")}</button>
                            <button onClick={() => onPoliticsClick("userAg")}>{t("footer:userAg")}</button>
                            <button onClick={() => onPoliticsClick("cookie")}>{t("footer:cookie")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
