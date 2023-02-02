import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Footer, Home, About, Services, Blog, Contacts, Test } from '../components';

function MainPage(): JSX.Element {

    const [refs] = useState({
        home: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        services: useRef<HTMLElement>(null),
        blog: useRef<HTMLElement>(null),
        contacts: useRef<HTMLElement>(null)
    })

    return (
        <div>
            <Helmet>
                <title>VEBI</title>
            </Helmet>
            <div className="minusHeader"/>
            <Header refs={refs}/>
            <Home ref={refs.home}/>
            <About ref={refs.about}/>
            <Services ref={refs.services}/>
            <Blog ref={refs.blog}/>
            <Contacts ref={refs.contacts}/>
            {/*<Test/>*/}
            <Footer/>
        </div>
    )
}

export default MainPage;
