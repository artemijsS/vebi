import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import './cookieNotify.css'
import { setPolitics } from "../../../redux/actions/politics";
import Cookies from 'js-cookie';

function CookieNotify(): JSX.Element {

    const { t } = useTranslation();
    const dispatch = useDispatch()

    const [cookieStatus, setCookieStatus] = useState<Boolean>(true);

    useEffect(() => {
        if (localStorage.getItem("cookieStatus") !== "true") {
            scrollSet(false);
            setCookieStatus(false);
        }
    }, [])

    const scrollSet = (toggle: Boolean) => {
        if (toggle) {
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
    }

    const onAgreeClick = () => {
        localStorage.setItem("cookieStatus", "true");
        scrollSet(true);
        setCookieStatus(true);
    }

    const onDeclineClick = () => {
        Cookies.remove('_ga', { path: '', domain: '.vebi.lv' });
        Cookies.remove('_gat', { path: '', domain: '.vebi.lv' });
        Cookies.remove('_gid', { path: '', domain: '.vebi.lv' });
        scrollSet(true);
        setCookieStatus(true);
    }

    const onCookieClick = () => {
        dispatch(setPolitics("cookie"))
    }

    return (
        <>
            {!cookieStatus &&
                <div className={"all-screen cookie"}>
                    <div className="cookie-block">
                        <div className="heading">
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M88.191 40.6811C87.6494 40.2715 87.0228 39.989 86.3576 39.8548C85.6924 39.7205 85.0056 39.7378 84.348 39.9054C83.2574 40.2108 82.1322 40.3745 81 40.3925C73.5571 40.3925 67.5001 34.3223 67.4866 27.1428C67.5091 26.9894 67.5586 26.5385 67.5631 26.3851C67.5925 25.6801 67.456 24.978 67.1647 24.3356C66.8734 23.6931 66.4355 23.1283 65.8863 22.6868C65.337 22.2452 64.6919 21.9392 64.0029 21.7936C63.314 21.6479 62.6005 21.6667 61.9201 21.8483C60.8064 22.1628 59.657 22.3325 58.5001 22.3534C51.0571 22.3534 45.0002 16.2832 45.0002 8.82408C45.0002 7.84546 45.1397 6.82174 45.4457 5.59508C45.6189 4.8949 45.622 4.16329 45.4547 3.46167C45.2874 2.76004 44.9546 2.10887 44.4842 1.56282C44.0139 1.01676 43.4197 0.591755 42.7515 0.323474C42.0833 0.055193 41.3606 -0.0485335 40.6442 0.021C29.4998 1.06195 19.1479 6.24569 11.6258 14.552C4.1038 22.8582 -0.0434593 33.6853 0.00034347 44.9023C0.00034347 69.7692 20.1873 90 45.0002 90C69.8131 90 90 69.7692 90 44.9023C90 44.6813 89.9865 44.4648 89.9685 44.1807C89.9534 43.5011 89.7857 42.8336 89.478 42.2277C89.1703 41.6219 88.7304 41.0933 88.191 40.6811ZM29.2502 17.8436C31.0404 17.8436 32.7573 18.5563 34.0232 19.8249C35.2891 21.0936 36.0002 22.8142 36.0002 24.6083C36.0002 26.4024 35.2891 28.123 34.0232 29.3916C32.7573 30.6602 31.0404 31.3729 29.2502 31.3729C27.46 31.3729 25.7431 30.6602 24.4773 29.3916C23.2114 28.123 22.5003 26.4024 22.5003 24.6083C22.5003 22.8142 23.2114 21.0936 24.4773 19.8249C25.7431 18.5563 27.46 17.8436 29.2502 17.8436ZM20.2503 53.9218C19.3638 53.9218 18.4861 53.7468 17.6672 53.4069C16.8482 53.0669 16.1041 52.5686 15.4773 51.9405C14.8505 51.3123 14.3533 50.5666 14.0141 49.7459C13.6749 48.9252 13.5003 48.0455 13.5003 47.1572C13.5003 46.2688 13.6749 45.3892 14.0141 44.5684C14.3533 43.7477 14.8505 43.002 15.4773 42.3738C16.1041 41.7457 16.8482 41.2474 17.6672 40.9074C18.4861 40.5675 19.3638 40.3925 20.2503 40.3925C22.0405 40.3925 23.7574 41.1052 25.0232 42.3738C26.2891 43.6424 27.0002 45.3631 27.0002 47.1572C27.0002 48.9513 26.2891 50.6719 25.0232 51.9405C23.7574 53.2091 22.0405 53.9218 20.2503 53.9218ZM33.7502 71.9609C31.96 71.9609 30.2431 71.2482 28.9773 69.9796C27.7114 68.711 27.0002 66.9903 27.0002 65.1963C27.0002 63.4021 27.7114 61.6815 28.9773 60.4129C30.2431 59.1443 31.96 58.4316 33.7502 58.4316C35.5404 58.4316 37.2573 59.1443 38.5232 60.4129C39.789 61.6815 40.5002 63.4021 40.5002 65.1963C40.5002 66.9903 39.789 68.711 38.5232 69.9796C37.2573 71.2482 35.5404 71.9609 33.7502 71.9609ZM45.0002 42.6474C45.0002 40.8533 45.7113 39.1327 46.9772 37.864C48.2431 36.5954 49.9599 35.8827 51.7501 35.8827C53.5404 35.8827 55.2572 36.5954 56.5231 37.864C57.789 39.1327 58.5001 40.8533 58.5001 42.6474C58.5001 44.4415 57.789 46.1621 56.5231 47.4307C55.2572 48.6993 53.5404 49.412 51.7501 49.412C49.9599 49.412 48.2431 48.6993 46.9772 47.4307C45.7113 46.1621 45.0002 44.4415 45.0002 42.6474ZM60.7501 71.9609C58.9599 71.9609 57.243 71.2482 55.9772 69.9796C54.7113 68.711 54.0001 66.9903 54.0001 65.1963C54.0001 63.4021 54.7113 61.6815 55.9772 60.4129C57.243 59.1443 58.9599 58.4316 60.7501 58.4316C62.5403 58.4316 64.2572 59.1443 65.5231 60.4129C66.7889 61.6815 67.5001 63.4021 67.5001 65.1963C67.5001 66.9903 66.7889 68.711 65.5231 69.9796C64.2572 71.2482 62.5403 71.9609 60.7501 71.9609Z" fill="#E53171"/>
                            </svg>
                            <h1>{t("cookieNotify.title")}</h1>
                        </div>
                        <p>{t("cookieNotify.text")} <span onClick={onCookieClick}>{t("cookieNotify.link")}</span>.</p>
                        <div className="buttons">
                            <button onClick={onAgreeClick}>{t("cookieNotify.agree")}</button>
                            <button onClick={onDeclineClick} className={"decline"}>{t("cookieNotify.decline")}</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CookieNotify;
