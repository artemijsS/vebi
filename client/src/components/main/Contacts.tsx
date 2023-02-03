import React, { forwardRef } from 'react';


const Contacts = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Contacts</h1>
                    <div className="blocks cubes contacts">
                        <div className="block b-55-bottom">
                            <p className={"home-block-mob-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                            </p>
                        </div>
                        <div className="block">
                            <p className={"home-block-mob-text left"}>
                                Finibus arcu tristique vitae. Aenean ultrices placerat mi. Etiam id nibh vestibulum, pulvinar urna id, consectetur sem.
                            </p>
                        </div>
                        <div className="block b-55-top-right">
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

export default Contacts;
