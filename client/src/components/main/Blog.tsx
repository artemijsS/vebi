import React, { forwardRef } from 'react';


const Blog = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Blog</h1>
                    <div className="blog-mob">
                        <div className="blocks blog cubes">
                            <div className="block b-75-top mob-l"/>
                            <div className="block del"/>
                            <div className="block b-60-bottom"/>
                            <div className="block mob-r"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Blog;
