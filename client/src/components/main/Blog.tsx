import React, { forwardRef, useRef } from 'react';
import { Slider } from '../index';


const Blog = forwardRef<HTMLElement>((props, ref) => {

    const blockRef = useRef<HTMLDivElement>(null);
    const sliderTransition = useRef<string | undefined>(undefined);

    const onBlogClick = (id: number) => {
        if (blockRef.current?.parentElement?.style.transform.split("px")[0].split("(")[1] === sliderTransition.current) {
            console.log(id)
        }
    }

    const onBlogMouseDown = () => {
        sliderTransition.current = blockRef.current?.parentElement?.style.transform.split("px")[0].split("(")[1]
    }

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section blog"}>
                    <h1 className={"slide-show-title"}>Blog</h1>
                    <Slider>
                        <div onMouseDown={onBlogMouseDown} ref={blockRef} id={"1"} onClick={() => onBlogClick(1)} className={"block"}>1</div>
                        <div onMouseDown={onBlogMouseDown} id={"2"} onClick={() => onBlogClick(2)} className={"block"}>2</div>
                        <div onMouseDown={onBlogMouseDown} id={"3"} onClick={() => onBlogClick(3)} className={"block"}>3</div>
                        <div onMouseDown={onBlogMouseDown} id={"4"} onClick={() => onBlogClick(4)} className={"block"}>4</div>
                        <div onMouseDown={onBlogMouseDown} id={"5"} onClick={() => onBlogClick(5)} className={"block"}>5</div>
                        <div onMouseDown={onBlogMouseDown} id={"6"} onClick={() => onBlogClick(6)} className={"block"}>6</div>
                        <div onMouseDown={onBlogMouseDown} id={"7"} onClick={() => onBlogClick(7)} className={"block"}>7</div>
                    </Slider>
                </section>
            </div>
        </div>
    )
})

export default Blog;
