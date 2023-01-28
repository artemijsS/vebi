import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Footer } from '../components';
import ReactGA from 'react-ga';

function MainPage(): JSX.Element {

    const [activeSection, setActiveSection] = useState<string>('home');

    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const blogRef = useRef<HTMLElement>(null);
    const contactsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [])

    useEffect(() => {
        ReactGA.pageview("/" + activeSection);
    }, [activeSection])

    const onScroll = (e: Event) => {
        const window = e.currentTarget as Window;
        const scrollY = window.scrollY;
        const breakPoints = {
            home: homeRef.current ? homeRef.current.offsetTop : 0,
            about: aboutRef.current ? aboutRef.current.offsetTop : 0,
            services: servicesRef.current ? servicesRef.current.offsetTop : 0,
            blog: blogRef.current ? blogRef.current.offsetTop : 0,
            contacts: contactsRef.current ? contactsRef.current.offsetTop : 0
        }

        if (scrollY < breakPoints.about - 100) {
            setActiveSection("home")
        } else if (scrollY <= breakPoints.services - 100) {
            setActiveSection("about")
        } else if (scrollY <= breakPoints.blog - 100) {
            setActiveSection("services")
        } else if (scrollY <= breakPoints.contacts - 100) {
            setActiveSection("blog")
        } else if (scrollY >= breakPoints.contacts - 100) {
            setActiveSection("contacts")
        }
    }

    const onHeaderSectionClick = (section: string): void => {
        switch (section) {
            case "home":
                homeRef.current && window.scrollTo(0, homeRef.current.offsetTop - 90);
                break;
            case "about":
                aboutRef.current && window.scrollTo(0, aboutRef.current.offsetTop - 90);
                break;
            case "services":
                servicesRef.current && window.scrollTo(0, servicesRef.current.offsetTop - 90);
                break;
            case "blog":
                blogRef.current && window.scrollTo(0, blogRef.current.offsetTop - 90);
                break;
            case "contacts":
                contactsRef.current && window.scrollTo(0, contactsRef.current.offsetTop - 90);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Helmet>
                <title>vebi</title>
            </Helmet>
            <div className="minusHeader"/>
            <Header activeSection={activeSection} onSectionClick={onHeaderSectionClick}/>
            <div className="wrapper">
                <div className="secondWrapper">
                    <section ref={homeRef} className={"section"}>
                        <h1>Digitally driven<br/>agency team.</h1>
                        <div className="blocks cubes">
                            <div className="block b-full-bottom"/>
                            <div className="block"/>
                            <div className="block b-30-bottom last"/>
                        </div>
                    </section>
                    <section ref={aboutRef} className={"section"}>
                        <h1>About</h1>
                        <div className="blocks reverse">
                            <div className="block f2 b-45-top-right"/>
                            <div className="blocks-reverse">
                                <div className="block-reverse"/>
                                <div className="block-reverse"/>
                            </div>
                        </div>
                    </section>
                    <section ref={servicesRef} className={"section"}>
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
                    <section ref={blogRef} className={"section"}>
                        <h1>Blog</h1>
                        <div className="about">
                            <div className="blocks blog cubes">
                                <div className="block b-full-bottom mob-l"/>
                                <div className="block del"/>
                                <div className="block b-30-bottom"/>
                                <div className="block mob-r"/>
                            </div>
                        </div>
                    </section>
                    <section ref={contactsRef} className={"section"}>
                        <h1>Contacts</h1>
                        <div className="blocks contacts">
                            <div className="block b-55-bottom"/>
                            <div className="block"/>
                            <div className="block b-55-top-right last"/>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage;
