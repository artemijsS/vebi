import React, { forwardRef } from 'react';
import { Design } from '../../assets/services';

const Services = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
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
                    <div className="list-mobile">
                        <div className="group">
                            <div className="item pink" style={{ backgroundImage: `url(${Design})` }}><h1>DESIGN</h1></div>
                            <div className="item"><h1>AUTOMATION</h1></div>
                        </div>
                        <div className="group">
                            <div className="item"><h1>SCRIPTS</h1></div>
                            <div className="item"><h1>CMS/AWS</h1></div>
                        </div>
                        <div className="group">
                            <div className="item"><h1>BOTS</h1></div>
                            <div className="item"><h1>PROGRAMMING</h1></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Services;
