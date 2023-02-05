import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Future, Wishes, Solutions } from '../../assets/home';

const Home = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1 dangerouslySetInnerHTML={{__html: t('home:title', {interpolation: {escapeValue: false}})}}/>
                    <div className="blocks cubes">
                        <div className="block pink">
                            <div className="home-block">
                                <div className="heading">
                                    <img src={Future} alt="error"/>
                                    <h1>Your Business Future</h1>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                                </p>
                            </div>
                            <p className={"home-block-mob-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                            </p>
                        </div>
                        <div className="block">
                            <div className="home-block">
                                <div className="heading">
                                    <img src={Wishes} alt="error"/>
                                    <h1>Your Ideas & Wishes</h1>
                                </div>
                                <p>
                                    Finibus arcu tristique vitae. Aenean ultrices placerat mi. Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                                </p>
                            </div>
                            <p className={"home-block-mob-text left"}>
                                Finibus arcu tristique vitae. Aenean ultrices placerat mi. Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                            </p>
                        </div>
                        <div className="block b-30-bottom b-30-top">
                            <div className="home-block">
                                <div className="heading">
                                    <img src={Solutions} alt="error"/>
                                    <h1>Innovative Solutions</h1>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nisl mi, sit amet finibus arcu tristique vitae. Aenean ultrices placerat mi.
                                </p>
                            </div>
                            <p className={"home-block-mob-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nisl mi, sit amet finibus arcu tristique vitae. Aenean ultrices placerat mi.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Home;
