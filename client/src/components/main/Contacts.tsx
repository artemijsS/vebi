import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>{t("contacts:title")}</h1>
                    <div className="blocks contacts">
                        <div className="block b-55-bottom">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("contacts:info.title")}}/>
                                <div className="border">
                                    <p dangerouslySetInnerHTML={{__html: t("contacts:info.text")}}/>
                                    <div className="connection">
                                        <div className="phone">{t("contacts:info.tel")}</div>
                                        <div className="name">{t("contacts:info.name")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("contacts:support.title")}}/>
                                <div className="border">
                                    <p>{t("contacts:support.text")}</p>
                                    <div className="connection">
                                        <div className="phone">{t("contacts:support.tel")}</div>
                                        <div className="name">{t("contacts:support.name")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block b-55-top-right">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("contacts:design.title")}}/>
                                <div className="border">
                                    <p>{t("contacts:design.text")}</p>
                                    <div className="connection">
                                        <div className="phone">{t("contacts:design.tel")}</div>
                                        <div className="name">{t("contacts:design.name")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Contacts;
