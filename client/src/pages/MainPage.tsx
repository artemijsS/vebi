import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '../components';

function MainPage(): JSX.Element {
    return (
        <div>
            <Helmet>
                <title>vebi</title>
            </Helmet>
            <div className="minusHeader"/>
            <Header/>
            <div className="wrapper">
                <div className="secondWrapper">
                    <section className={"section"}>
                        <h1>Digitally driven<br/>agency team.</h1>
                        <div className="blocks">
                            <div className="block b-full-bottom"/>
                            <div className="block"/>
                            <div className="block b-30-bottom"/>
                        </div>
                    </section>
                    <section className={"section"}>
                        <h1>About</h1>
                        <div className="blocks reverse">
                            <div className="block f2 b-45-top-right"/>
                            <div className="blocks-reverse">
                                <div className="block-reverse"/>
                                <div className="block-reverse f14"/>
                            </div>
                        </div>
                    </section>
                    <section className={"section"}>
                        <h1>Services</h1>
                        <div className="list">
                            <div className="group">
                                <div className="item"/>
                                <div className="item"/>
                            </div>
                            <div className="group">
                                <div className="item"/>
                                <div className="item"/>
                            </div>
                            <div className="group">
                                <div className="item"/>
                                <div className="item"/>
                            </div>
                            <div className="group">
                                <div className="item"/>
                                <div className="item"/>
                            </div>
                        </div>
                    </section>
                    <section className={"section"}>
                        <h1>Blog</h1>
                        <div className="blocks blog">
                            <div className="block b-full-bottom"/>
                            <div className="block"/>
                            <div className="block b-30-bottom"/>
                            <div className="block"/>
                        </div>
                    </section>
                    <section className={"section mb300"}>
                        <h1>Contacts</h1>
                        <div className="blocks contacts">
                            <div className="block b-55-bottom"/>
                            <div className="block"/>
                            <div className="block b-55-top-right"/>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;
