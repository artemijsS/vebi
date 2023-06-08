import React, { forwardRef } from 'react';
import { useTranslation } from 'next-i18next';

const Services = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"} id={"services"}>
                    <h2>{t("translation:services.title")}</h2>
                    <div className="list">
                        <div className="column first">
                            <div className="group big">
                                <div className="item">
                                    <div className="service">
                                        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.5429 43.6274L20.4379 37.5224L26.5429 31.4174V25.0574L14.0704 37.5299L17.2504 40.7099L17.2654 40.6949L26.5429 49.9799V43.6274Z" fill="white"/>
                                            <path d="M32.7837 49.9774L45.8712 27.3098L41.9807 25.0636L28.8932 47.7311L32.7837 49.9774Z" fill="white"/>
                                            <path d="M48.3301 43.6049L54.4351 37.4999L48.3301 31.3949V25.0349L60.8026 37.5074L57.6226 40.6874L57.6076 40.6724L48.3301 49.9574V43.6049Z" fill="white"/>
                                            <path d="M6.48047 17.2949V57.7049H68.4755V17.2949H6.48047ZM63.983 53.1824H10.973V21.8624H63.983V53.1824Z" fill="white"/>
                                        </svg>
                                        <h3>{t("translation:services.web")}</h3>
                                        <p>{t("translation:services.webP")}</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.50098 51.9593L8.50098 0.17334L4.30798 0.17334L4.30798 51.9593L8.50098 51.9593Z" fill="white"/>
                                            <path d="M51.8934 4.36987H0.107422V8.56287H51.8934V4.36987Z" fill="white"/>
                                            <path d="M47.6973 51.9635L47.6973 0.17749L43.5043 0.17749L43.5043 51.9635L47.6973 51.9635Z" fill="white"/>
                                            <path d="M51.8934 43.5698H0.107422V47.7628H51.8934V43.5698Z" fill="white"/>
                                            <path d="M26 8.56982L8.5 26.0698L26 43.5698L43.5 26.0698L26 8.56982ZM14.394 26.0698L26 14.4568L37.606 26.0698L26 37.6758L14.394 26.0698Z" fill="white"/>
                                        </svg>
                                        <h3>{t("translation:services.brandDesign")}</h3>
                                        <p>{t("translation:services.brandDesignP")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.iosAndroid")}</h3>
                                        <svg width="26" height="43" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.0195312 0.909912V42.9399H25.5945V0.909912H0.0195312ZM22.5895 36.9299H3.02453V3.91991H22.5895V36.9299Z" fill="white"/>
                                            <path d="M9.03809 24.8981L9.03809 18.8931L6.03308 18.8931L6.03308 24.8981L9.03809 24.8981Z" fill="white"/>
                                            <path d="M19.584 24.8954L19.584 12.8904L16.579 12.8904L16.579 24.8954L19.584 24.8954Z" fill="white"/>
                                            <path d="M12.043 15.8953L19.583 15.8953L19.583 12.8903L12.043 12.8903L12.043 15.8953Z" fill="white"/>
                                            <path d="M6.03618 27.8035L19.5862 27.8035L19.5862 24.7985L6.03618 24.7985L6.03618 27.8035Z" fill="white"/>
                                            <path d="M7.53422 17.1048C9.03091 17.1048 10.2442 15.8915 10.2442 14.3948C10.2442 12.8981 9.03091 11.6848 7.53422 11.6848C6.03753 11.6848 4.82422 12.8981 4.82422 14.3948C4.82422 15.8915 6.03753 17.1048 7.53422 17.1048Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.cmsCrm")}</h3>
                                        <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.294983 0.524902V27.4749H41.65V0.524902H0.294983ZM38.655 24.4599H3.29498V3.5699H38.655V24.4599Z" fill="white"/>
                                            <path d="M18.9213 9.52148L35.6563 9.52148L35.6563 6.52649L18.9213 6.52649L18.9213 9.52148Z" fill="white"/>
                                            <path d="M18.9213 15.4998L35.6563 15.4998L35.6563 12.5048L18.9213 12.5048L18.9213 15.4998Z" fill="white"/>
                                            <path d="M18.9213 21.4648L35.6563 21.4648L35.6563 18.4698L18.9213 18.4698L18.9213 21.4648Z" fill="white"/>
                                            <path d="M15.925 6.52002H6.28998V21.46H15.925V6.52002Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.templateDesign")}</h3>
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1758 36.2443L12.1758 9.30933L9.18078 9.30933L9.18078 36.2443L12.1758 36.2443Z" fill="white"/>
                                            <path d="M35.1645 9.31006H9.18454V12.3051H35.1645V9.31006Z" fill="white"/>
                                            <path d="M35.1621 36.2424L35.1621 9.30737L32.1671 9.30737L32.1671 36.2424L35.1621 36.2424Z" fill="white"/>
                                            <path d="M35.1645 33.25H9.18454V36.245H35.1645V33.25Z" fill="white"/>
                                            <path d="M29.1799 15.2952H15.1699V18.2902H29.1799V15.2952Z" fill="white"/>
                                            <path d="M29.1799 21.28H15.1699V24.275H29.1799V21.28Z" fill="white"/>
                                            <path d="M29.1799 27.2651H15.1699V30.2601H29.1799V27.2651Z" fill="white"/>
                                            <path d="M3.43933 27.2656L3.43933 0.330566L0.44433 0.330566L0.44433 27.2656L3.43933 27.2656Z" fill="white"/>
                                            <path d="M26.4243 0.330078H0.444336V3.32508H26.4243V0.330078Z" fill="white"/>
                                            <path d="M26.424 9.30606L26.424 0.331055L23.429 0.331055L23.429 9.30606L26.424 9.30606Z" fill="white"/>
                                            <path d="M9.18531 24.27H0.445312V27.265H9.18531V24.27Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.bot")}</h3>
                                        <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.255001 0.580078V27.4901H41.55V0.580078H0.255001ZM38.555 24.4851H3.25V3.62508H38.555V24.4851Z" fill="white"/>
                                            <path d="M11.9355 15.4501C13.4266 15.4501 14.6355 14.2412 14.6355 12.75C14.6355 11.2589 13.4266 10.05 11.9355 10.05C10.4443 10.05 9.23547 11.2589 9.23547 12.75C9.23547 14.2412 10.4443 15.4501 11.9355 15.4501Z" fill="white"/>
                                            <path d="M29.905 15.4501C31.3962 15.4501 32.605 14.2412 32.605 12.75C32.605 11.2589 31.3962 10.05 29.905 10.05C28.4138 10.05 27.205 11.2589 27.205 12.75C27.205 14.2412 28.4138 15.4501 29.905 15.4501Z" fill="white"/>
                                            <path d="M14.6343 21.4919L27.2093 21.4919L27.2093 18.4969L14.6343 18.4969L14.6343 21.4919Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.socMedDesign")}</h3>
                                        <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.11499 0.0300293V41.935H25.615V0.0300293H0.11499ZM22.62 35.945H3.10999V3.03003H22.615V35.945H22.62Z" fill="white"/>
                                            <path d="M6.10292 20.8611L19.6179 20.8611L19.6179 11.8961L6.10292 11.8961L6.10292 20.8611Z" fill="white"/>
                                            <path d="M6.1028 26.844L19.6178 26.844L19.6178 23.849L6.1028 23.849L6.1028 26.844Z" fill="white"/>
                                            <path d="M6.10292 8.90332L19.6179 8.90332L19.6179 5.90832L6.10292 5.90832L6.10292 8.90332Z" fill="white"/>
                                            <path d="M6.1028 32.8267L19.6178 32.8267L19.6178 29.8317L6.1028 29.8317L6.1028 32.8267Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.photoContent")}</h3>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0529 35.9826L12.0529 9.00757L9.05793 9.00757L9.05793 35.9826L12.0529 35.9826Z" fill="white"/>
                                            <path d="M35.075 9.00977H9.055V12.0048H35.075V9.00977Z" fill="white"/>
                                            <path d="M35.0755 35.9855L35.0755 9.0105L32.0805 9.0105L32.0805 35.9855L35.0755 35.9855Z" fill="white"/>
                                            <path d="M35.075 32.9849H9.055V35.9799H35.075V32.9849Z" fill="white"/>
                                            <path d="M3.3 26.9936L3.3 0.0185547L0.304998 0.0185547L0.304998 26.9936L3.3 26.9936Z" fill="white"/>
                                            <path d="M26.32 0.0197754H0.299999V3.01478H26.32V0.0197754Z" fill="white"/>
                                            <path d="M26.3215 9.00513L26.3215 0.0151367L23.3265 0.0151367L23.3265 9.00513L26.3215 9.00513Z" fill="white"/>
                                            <path d="M9.05 23.9949H0.299999V26.9899H9.05V23.9949Z" fill="white"/>
                                            <path d="M28.4421 16.3966L26.3244 18.5144L32.9251 25.1152L35.0429 22.9974L28.4421 16.3966Z" fill="white"/>
                                            <path d="M28.366 16.3969L19.5803 25.1826L21.698 27.3004L30.4837 18.5147L28.366 16.3969Z" fill="white"/>
                                            <path d="M14.2536 20.5518L9.48066 25.3247L11.5984 27.4425L16.3714 22.6695L14.2536 20.5518Z" fill="white"/>
                                            <path d="M14.8424 19.9635L12.7247 22.0813L19.8204 29.177L21.9382 27.0593L14.8424 19.9635Z" fill="white"/>
                                            <path d="M17.6896 18.985C19.1835 18.985 20.3946 17.7739 20.3946 16.28C20.3946 14.786 19.1835 13.575 17.6896 13.575C16.1956 13.575 14.9846 14.786 14.9846 16.28C14.9846 17.7739 16.1956 18.985 17.6896 18.985Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.custom")}</h3>
                                        <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.200012 0.554932V27.5799H41.665V0.554932H0.200012ZM38.66 24.5549H3.20501V3.60993H38.66V24.5549Z" fill="white"/>
                                            <path d="M25.7645 21.52L20.9245 18.97L16.0795 21.515L17.0095 16.12L13.0945 12.3L18.5095 11.515L20.9395 6.61499L23.3545 11.52L28.7645 12.315L24.8445 16.13L25.7645 21.52Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.video")}</h3>
                                        <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.42 0.524902V27.4749H41.775V0.524902H0.42ZM38.775 24.4599H3.415V3.5699H38.775V24.4599Z" fill="white"/>
                                            <path d="M27.735 13.9998L15.785 21.4498V13.9998V6.5498L27.735 13.9998Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.webDesign")}</h3>
                                        <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.02 7.5249L33.975 10.5699H38.74V31.4599H3.38001V10.5699H27.655L30.705 7.5249H0.38501V34.4749H41.735V7.5249H37.02Z" fill="white"/>
                                            <path d="M33.73 0.75L14.09 20.39L11.72 25.915L17.245 23.545L36.885 3.905L33.73 0.75Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.uiUx")}</h3>
                                        <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.320312 0.544922V27.4699H41.6353V0.544922H0.320312ZM38.6403 24.4599H3.31531V3.58992H38.6403V24.4599Z" fill="white"/>
                                            <path d="M18.9245 21.4663L35.6445 21.4663L35.6445 18.4713L18.9245 18.4713L18.9245 21.4663Z" fill="white"/>
                                            <path d="M26.2157 6.54004H6.30566V15.375H26.2157V6.54004Z" fill="white"/>
                                            <path d="M35.6846 15.3728L35.6846 6.53784L29.2096 6.53784L29.2096 15.3728L35.6846 15.3728Z" fill="white"/>
                                            <path d="M6.30969 21.4663L15.9297 21.4663L15.9297 18.4713L6.30969 18.4713L6.30969 21.4663Z" fill="white"/>
                                        </svg>
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

export default Services;
