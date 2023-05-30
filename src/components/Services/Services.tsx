import React, { forwardRef } from 'react';
import { useTranslation } from 'next-i18next';

const Services = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"} id={"services"}>
                    <h1>{t("translation:services.title")}</h1>
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
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
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
                                        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29 14C31.76 14 33.98 11.76 33.98 9C33.98 6.24 31.76 4 29 4C26.24 4 24 6.24 24 9C24 11.76 26.24 14 29 14ZM14 12C17.31 12 19.98 9.31 19.98 6C19.98 2.69 17.31 0 14 0C10.69 0 8 2.69 8 6C8 9.31 10.69 12 14 12ZM29 18C25.33 18 18 19.84 18 23.5V28H40V23.5C40 19.84 32.67 18 29 18ZM14 16C9.33 16 0 18.34 0 23V28H14V23.5C14 21.8 14.67 18.83 18.74 16.56C17 16.19 15.31 16 14 16Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.photoContent")}</h3>
                                        <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 0L10.34 4H4C1.79 4 0 5.79 0 8V32C0 34.21 1.79 36 4 36H36C38.21 36 40 34.21 40 32V8C40 5.79 38.21 4 36 4H29.66L26 0H14ZM20 30C14.48 30 10 25.52 10 20C10 14.48 14.48 10 20 10C25.52 10 30 14.48 30 20C30 25.52 25.52 30 20 30Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.custom")}</h3>
                                        <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4286 0H5.57143C2.49786 0 0 2.44545 0 5.45455V34.5455C0 37.5545 2.49786 40 5.57143 40H20.4286C23.5021 40 26 37.5545 26 34.5455V5.45455C26 2.44545 23.5021 0 20.4286 0ZM16.7143 36.3636H9.28571V34.5455H16.7143V36.3636ZM22.75 30.9091H3.25V5.45455H22.75V30.9091Z" fill="#FEFEFE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.video")}</h3>
                                        <svg width="27" height="37" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0793 27.6363H11.8124V19H15.1874V27.6363H16.9204C17.1432 25.5602 18.1776 23.8467 19.8567 21.9761C20.0474 21.7653 21.2607 20.4785 21.4041 20.2954C22.596 18.7713 23.343 16.9337 23.5592 14.994C23.7755 13.0544 23.4521 11.0917 22.6263 9.33198C21.8005 7.57224 20.5059 6.08703 18.8916 5.04737C17.2773 4.00772 15.4089 3.45591 13.5017 3.4555C11.5944 3.45508 9.72583 4.00607 8.1111 5.04502C6.49636 6.08397 5.20116 7.56861 4.37464 9.32799C3.54811 11.0874 3.22389 13.0499 3.43931 14.9896C3.65472 16.9294 4.40101 18.7674 5.59223 20.292C5.73736 20.4768 6.95404 21.7653 7.14136 21.9743C8.82211 23.8467 9.85654 25.5602 10.0793 27.6363ZM10.1249 31.0909V32.8182H16.8749V31.0909H10.1249ZM2.95973 22.4545C1.37043 20.422 0.374393 17.9713 0.0863645 15.3847C-0.201664 12.7981 0.230032 10.1809 1.33172 7.83444C2.43341 5.48801 4.16028 3.50785 6.31339 2.12208C8.46651 0.736304 10.9583 0.00129229 13.5017 0.00170916C16.0451 0.00212603 18.5366 0.737955 20.6893 2.12443C22.842 3.51091 24.5682 5.49163 25.6692 7.83843C26.7701 10.1852 27.201 12.8026 26.9122 15.3891C26.6233 17.9756 25.6265 20.426 24.0366 22.458C22.9904 23.7914 20.2499 25.9091 20.2499 28.5V32.8182C20.2499 33.7344 19.8943 34.613 19.2613 35.2609C18.6284 35.9087 17.77 36.2727 16.8749 36.2727H10.1249C9.22975 36.2727 8.37131 35.9087 7.73837 35.2609C7.10544 34.613 6.74986 33.7344 6.74986 32.8182V28.5C6.74986 25.9091 4.00767 23.7914 2.95973 22.4545Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.webDesign")}</h3>
                                        <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.54759 5.43563V4.59709V3.69818H24.539H25.5352H25.6038V4.60955V5.58513V11.4846H28.3333H32.4371H33.2743V16.3721V18.2888V25.3211H36.9924V18.2888V16.3721V11.4846V9.02938L28.0438 0.0239258H25.6038H2.82568V17.0257H6.54759V5.43563Z" fill="white"/>
                                            <path d="M40 38.5422V34.6437H38.1934C37.9753 33.7927 37.6258 32.9954 37.1562 32.2824L38.3677 31.0634L36.1686 28.8506L34.9572 30.0715C34.2534 29.601 33.4667 29.2502 32.6248 29.0308V27.208H28.7238V29.0308C27.8638 29.255 27.0591 29.6144 26.3419 30.1003L25.1791 28.9301L22.98 31.141L24.1629 32.3303C23.7105 33.028 23.3715 33.8033 23.1581 34.6303H21.3477V38.5528H23.1581C23.3762 39.399 23.7257 40.1934 24.1915 40.9026L22.98 42.1216L25.1791 44.3325L26.3905 43.1135C27.0972 43.584 27.8867 43.9367 28.7305 44.1561V45.975H32.6172V44.1561C33.441 43.9415 34.2134 43.5993 34.9077 43.1441L36.1677 44.411L38.3667 42.2002L37.1257 40.9495C37.6105 40.225 37.9696 39.4095 38.1915 38.5403H40V38.5422ZM30.9924 39.3472C29.48 39.3472 28.2543 38.1138 28.2543 36.592C28.2543 35.0702 29.48 33.8368 30.9924 33.8368C32.5048 33.8368 33.7305 35.0702 33.7305 36.592C33.7305 38.1138 32.5048 39.3472 30.9924 39.3472Z" fill="white"/>
                                            <path d="M19.6543 30.5565H21.7638V26.0073H19.6543C19.4 25.0154 18.9933 24.0839 18.4448 23.2521L19.859 21.8299L17.2943 19.2482L15.881 20.6723C15.0581 20.1241 14.14 19.7149 13.159 19.4581V17.3306H8.60571V19.4581C7.60286 19.7187 6.66381 20.1394 5.82762 20.7058L4.47048 19.3402L1.90476 21.92L3.28476 23.3087C2.75714 24.1223 2.36095 25.0269 2.11333 25.992H0V30.569H2.11238C2.36667 31.557 2.77333 32.4837 3.31905 33.3117L1.90476 34.7349L4.46952 37.3137L5.88381 35.8916C6.70857 36.4407 7.63048 36.8518 8.61429 37.1077V39.2314H13.1486V37.1077C14.1105 36.8585 15.0124 36.4579 15.8229 35.928L17.2933 37.4067L19.8581 34.8278L18.4095 33.3692C18.9762 32.5221 19.3952 31.5695 19.6543 30.5565ZM10.8819 32.0352C8.8219 32.0352 7.15143 30.3543 7.15143 28.2814C7.15143 26.2086 8.8219 24.5277 10.8819 24.5277C12.9419 24.5277 14.6124 26.2086 14.6124 28.2814C14.6124 30.3543 12.9419 32.0352 10.8819 32.0352Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service">
                                        <h3>{t("translation:services.uiUx")}</h3>
                                        <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30.9807 9.73146C30.9807 9.27927 30.6211 8.90689 30.1535 8.90689H25.4958V6.05195C25.4958 2.93102 22.8612 0.395264 19.6601 0.395264H3.64584V4.65108H19.4803C19.8849 4.65108 20.3705 5.14759 20.3705 5.54657V8.90689H1.70362C1.23605 8.90689 0.858398 9.27927 0.858398 9.73146V24.8396V29.7781V30.78C0.858398 31.2322 1.23605 31.6046 1.70362 31.6046H30.1535C30.6211 31.6046 30.9807 31.2322 30.9807 30.78V25.0613L41.1414 28.1378V20.3178V12.4977L30.9807 15.5743V9.73146ZM21.1977 23.5363H20.2176H11.6485H10.5785C8.79811 23.5363 7.35044 22.1176 7.35044 20.3621C7.35044 18.6066 8.79811 17.188 10.5785 17.188C12.3588 17.188 13.8065 18.6243 13.8065 20.3799C13.8065 21.2665 13.4289 22.029 12.8354 22.6496H18.9408C18.3473 22.029 17.9697 21.2665 17.9697 20.3799C17.9697 18.6243 19.4174 17.1969 21.1977 17.1969C22.9781 17.1969 24.4258 18.6066 24.4258 20.3621C24.4258 22.1176 22.9781 23.5363 21.1977 23.5363Z" fill="white"/>
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