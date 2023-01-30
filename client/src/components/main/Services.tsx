import React, { forwardRef } from 'react';


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
                </section>
            </div>
        </div>
    )
})

export default Services;
