import React, { forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../index';
import { vebiRU } from '../../assets/info/pdfs';


const Info = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    const blockRef = useRef<HTMLDivElement>(null);
    const sliderTransition = useRef<string | undefined>(undefined);

    const onInfoClick = (id: number) => {
        if (blockRef.current?.parentElement?.style.transform.split("px")[0].split("(")[1] === sliderTransition.current) {
            console.log(id)
            window.open(vebiRU, '_blank');
        }
    }
    const onInfoMobClick = (id: number) => {
        window.open(vebiRU, '_blank');
    }

    const onInfoDown = () => {
        sliderTransition.current = blockRef.current?.parentElement?.style.transform.split("px")[0].split("(")[1]
    }

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section info"}>
                    <h1 className={"slide-show-title"}>{t("info:title")}</h1>
                    <Slider>
                        <div onMouseDown={onInfoDown} ref={blockRef} id={"1"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:scaling")}</h3>
                                <button onClick={() => onInfoClick(1)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div onMouseDown={onInfoDown} id={"2"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:it")}</h3>
                                <button onClick={() => onInfoClick(2)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div onMouseDown={onInfoDown} id={"3"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:design")}</h3>
                                <button onClick={() => onInfoClick(3)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div onMouseDown={onInfoDown} id={"4"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:web")}</h3>
                                <button onClick={() => onInfoClick(4)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div onMouseDown={onInfoDown} id={"5"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:webUpdate")}</h3>
                                <button onClick={() => onInfoClick(5)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div onMouseDown={onInfoDown} id={"6"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:about")}</h3>
                                <button onClick={() => onInfoClick(6)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                    </Slider>
                    <div className="mob">
                        <div ref={blockRef} id={"1"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:scaling")}</h3>
                                <button onClick={() => onInfoMobClick(1)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div id={"2"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:it")}</h3>
                                <button onClick={() => onInfoMobClick(2)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div id={"3"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:design")}</h3>
                                <button onClick={() => onInfoMobClick(3)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div id={"4"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:web")}</h3>
                                <button onClick={() => onInfoMobClick(4)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div id={"5"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:webUpdate")}</h3>
                                <button onClick={() => onInfoMobClick(5)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                        <div id={"6"} className={"block"}>
                            <div className="pdf-card">
                                <h3>{t("info:about")}</h3>
                                <button onClick={() => onInfoMobClick(6)} className="button">
                                    {t("info:read")}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Info;
