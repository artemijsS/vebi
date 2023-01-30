import React, { forwardRef } from 'react';


const Home = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Digitally driven<br/>agency team.</h1>
                    <div className="blocks cubes">
                        <div className="block pink"/>
                        <div className="block"/>
                        <div className="block b-30-bottom b-30-top last"/>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Home;
