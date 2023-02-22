import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const Home = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1 dangerouslySetInnerHTML={{__html: t('home.title', {interpolation: {escapeValue: false}})}}/>
                    <div className="blocks cubes">
                        <div className="block pink">
                            <div className="home-block">
                                <div className="heading">
                                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2489_3533)">
                                            <path d="M45 40.05C42.2775 40.05 40.05 42.2775 40.05 45C40.05 47.7225 42.2775 49.95 45 49.95C47.745 49.95 49.95 47.7225 49.95 45C49.95 42.2775 47.745 40.05 45 40.05ZM45 0C20.1375 0 0 20.1375 0 45C0 69.84 20.1375 90 45 90C69.8625 90 90 69.84 90 45C90 20.1375 69.8625 0 45 0ZM54.855 54.855L18 72L35.145 35.145L72 18L54.855 54.855Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2489_3533">
                                                <rect width="90" height="90" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h1>{t("home.firstBlock.title")}</h1>
                                </div>
                                <p>{t("home.firstBlock.text")}</p>
                            </div>
                            <p className={"home-block-mob-text"}>{t("home.firstBlock.text")}</p>
                        </div>
                        <div className="block">
                            <div className="home-block">
                                <div className="heading">
                                    <svg width="72" height="90" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36 0L0 16.3636V40.9091C0 63.6341 15.34 84.825 36 90C56.66 84.825 72 63.6341 72 40.9091V16.3636L36 0ZM36 44.9591H64C61.88 61.8136 50.9 76.8273 36 81.5114V45H8V21.6818L36 8.95909V44.9591Z" fill="white"/>
                                    </svg>
                                    <h1>{t("home.secondBlock.title")}</h1>
                                </div>
                                <p>{t("home.secondBlock.text")}</p>
                            </div>
                            <p className={"home-block-mob-text left"}>{t("home.secondBlock.text")}</p>
                        </div>
                        <div className="block b-30-bottom b-30-top">
                            <div className="home-block">
                                <div className="heading">
                                    <svg width="51" height="90" viewBox="0 0 51 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.4654 39.5C16.0987 36.55 12.4433 33.525 12.4433 28.775C12.4433 23.325 17.4757 19.5 25.9632 19.5C34.8763 19.5 38.1811 23.75 38.4816 30H49.5479C49.2224 21.375 43.9396 13.525 33.4742 10.95V0H18.4521V10.8C8.73785 12.925 0.926362 19.175 0.926362 28.85C0.926362 40.4 10.5155 46.15 24.461 49.5C37.0044 52.5 39.4831 56.875 39.4831 61.575C39.4831 65 37.0545 70.5 25.9632 70.5C15.648 70.5 11.567 65.875 11.0412 60H0C0.62592 70.95 8.81296 77.075 18.4521 79.15V90H33.4742V79.25C43.2136 77.375 51 71.75 51 61.475C51 47.325 38.8321 42.475 27.4654 39.5Z" fill="white"/>
                                    </svg>
                                    <h1>{t("home.thirdBlock.title")}</h1>
                                </div>
                                <p>{t("home.thirdBlock.text")}</p>
                            </div>
                            <p className={"home-block-mob-text"}>{t("home.thirdBlock.text")}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Home;
