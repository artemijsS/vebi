import React, { FormEvent, forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';


interface ContactsProps {
    emailJSPublic: string
}

const Contacts = forwardRef<HTMLElement, ContactsProps>((props: ContactsProps, ref) => {

    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState<String>("button");
    const formRef = useRef<HTMLFormElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const loading = () => {
        setFormStatus("buttonLoading");
    }
    const sent = () => {
        setFormStatus("buttonSend");
        if (buttonRef.current) {
            buttonRef.current.classList.add("sent")
            buttonRef.current.disabled = true
        }
    }
    const error = () => {
        if (buttonRef.current) {
            setFormStatus("buttonError")
            buttonRef.current.disabled = true
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current || formStatus === "buttonLoading") return;

        loading();

        emailjs.sendForm('service_zk9y2hc', 'template_oajc85q', formRef.current, props.emailJSPublic)
            .then((_res) => {
                sent();
            }, (_err) => {
                error();
            });
    }

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"} id={"contacts"}>
                    <h1>{t("translation:contacts.title")}</h1>
                    <form onSubmit={e => onSubmit(e)} className={"formContacts"} ref={formRef}>
                        <div className={"row"}>
                            <div className={"input"}>
                                <label htmlFor="name">{t("translation:contacts.form.name")}</label>
                                <input type="text" id={"name"} name={"name"} placeholder={t("translation:contacts.form.namePlaceholder") || "Name / Surname*"} required={true}/>
                            </div>
                            <div className={"input"}>
                                <label htmlFor="phone">{t("translation:contacts.form.phone")}</label>
                                <input type="tel" name={"phone"} id={"phone"} placeholder={t("translation:contacts.form.phonePlaceholder") || "Phone Number"}/>
                            </div>
                            <div className={"input"}>
                                <label htmlFor="email">{t("translation:contacts.form.email")}</label>
                                <input className={"border"} type="email" id={"email"} name={"email"} placeholder={t("translation:contacts.form.emailPlaceholder") || "Email*"} required={true}/>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"input"}>
                                <label htmlFor="message">{t("translation:contacts.form.message")}</label>
                                <textarea name="message" id="message" placeholder={t("translation:contacts.form.messagePlaceholder") || "Type Your Message here"} required={true} />
                            </div>
                        </div>
                        <div className={"rowButton"}>
                            <button type={"submit"} ref={buttonRef}>{t(`translation:contacts.form.${formStatus}`)}</button>
                        </div>
                    </form>
                    <div className="blocks contacts">
                        <div className="block b-55-top-right">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("translation:contacts.info.title") || ""}}/>
                                <div className="border">
                                    <p dangerouslySetInnerHTML={{__html: t("translation:contacts.info.text") || ""}}/>
                                    <div className="connection">
                                        <div className="phone">{t("translation:contacts.info.tel")}</div>
                                        <div className="name">{t("translation:contacts.info.name")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("translation:contacts.support.title") || ""}}/>
                                <div className="border">
                                    <p>{t("translation:contacts.support.text")}</p>
                                    <div className="connection">
                                        <div className="phone">{t("translation:contacts.support.tel")}</div>
                                        <div className="name">{t("translation:contacts.support.name")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="contact">
                                <h2 dangerouslySetInnerHTML={{__html: t("translation:contacts.design.title") || ""}}/>
                                <div className="border">
                                    <p>{t("translation:contacts.design.text")}</p>
                                    <div className="connection">
                                        <div className="phone">{t("translation:contacts.design.tel")}</div>
                                        <div className="name">{t("translation:contacts.design.name")}</div>
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
