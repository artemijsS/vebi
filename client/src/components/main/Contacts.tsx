import React, { forwardRef } from 'react';


const Contacts = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Contacts</h1>
                    <div className="blocks contacts">
                        <div className="block b-55-bottom"/>
                        <div className="block"/>
                        <div className="block b-55-top-right last"/>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Contacts;
