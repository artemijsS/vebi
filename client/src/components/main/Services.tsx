import React, { forwardRef } from 'react';
import { Design, CmsCrm, Automation, Scripts, Bots, Programming } from '../../assets/services';

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
                            <div className="item pink">
                                <div className="bg" style={{ backgroundImage: `url(${Design})` }}/>
                                <h1>DESIGN</h1>
                            </div>
                            <div className="item">
                                <div className="bg" style={{ backgroundImage: `url(${Automation})` }}/>
                                <h1>AUTOMATION</h1>
                            </div>
                        </div>
                        <div className="group">
                            <div className="item">
                                <div className="bg" style={{ backgroundImage: `url(${Scripts})` }}/>
                                <h1>SCRIPTS</h1>
                            </div>
                            <div className="item">
                                <div className="bg" style={{ backgroundImage: `url(${CmsCrm})` }}/>
                                <h1>CMS / CRM</h1>
                            </div>
                        </div>
                        <div className="group">
                            <div className="item">
                                <div className="bg" style={{ backgroundImage: `url(${Bots})` }}/>
                                <h1>BOTS</h1>
                            </div>
                            <div className="item">
                                <div className="bg" style={{ backgroundImage: `url(${Programming})` }}/>
                                <h1>PROGRAMMING</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Services;
