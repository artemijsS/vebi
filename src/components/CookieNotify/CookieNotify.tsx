import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'next-i18next';
import { MyContext } from "../../context/MainContext";
import { useRouter } from "next/router";

function CookieNotify(): JSX.Element {

    const { t } = useTranslation();
    const router = useRouter()
    const { state, updateState } = useContext(MyContext);


    const [cookieStatus, setCookieStatus] = useState<Boolean>(true);

    useEffect(() => {
        if (localStorage.getItem("cookieStatus") !== "true") {
            setCookieStatus(false);
        }
    }, [])

    const onAgreeClick = () => {
        localStorage.setItem("cookieStatus", "true");
        setCookieStatus(true);
    }

    const onDeclineClick = () => {
        router.push("https://commission.europa.eu/law/law-topic/data-protection/reform/rules-business-and-organisations_en")
    }

    const onCookieClick = () => {
        updateState({ ...state, politics: "cookie" });
    }

    return (
        <>
            {!cookieStatus &&
            <div className={"cookie wrapper"}>
                <div className={"secondWrapper"}>
                    <div className="cookie-block">
                        <div className="heading">
                            <h1>{t("translation:cookieNotify.title")}</h1>
                        </div>
                        <p>{t("translation:cookieNotify.text")} <span onClick={onCookieClick}>{t("translation:cookieNotify.link")}</span>.</p>
                        <div className="buttons">
                            <button onClick={onAgreeClick}>{t("translation:cookieNotify.agree")}</button>
                            <button onClick={onDeclineClick} className={"decline"}>{t("translation:cookieNotify.decline")}</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default CookieNotify;
