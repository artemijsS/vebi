import React, { forwardRef } from 'react';
import { Slider } from '../index';


const Blog = forwardRef<HTMLElement>((props, ref) => {
    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section blog"}>
                    <h1 className={"slide-show-title"}>Blog</h1>
                    <Slider>
                        <div id={"1"} className={"block"}>1</div>
                        <div id={"2"} className={"block"}>2</div>
                        <div id={"3"} className={"block"}>3</div>
                        <div id={"4"} className={"block"}>4</div>
                        <div id={"5"} className={"block"}>5</div>
                        <div id={"5"} className={"block"}>6</div>
                        <div id={"5"} className={"block"}>7</div>
                    </Slider>
                </section>
            </div>
        </div>
    )
})

export default Blog;
