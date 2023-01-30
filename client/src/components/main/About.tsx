import React, { forwardRef } from 'react';


const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>About</h1>
                    <div className="blocks reverse">
                        <div className="block f2 b-45-top-right"/>
                        <div className="blocks-reverse">
                            <div className="block-reverse"/>
                            <div className="block-reverse pink"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default About;
