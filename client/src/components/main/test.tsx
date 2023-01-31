import React, {forwardRef, useEffect, useState, useRef} from 'react';
import Draggable from "react-draggable";


const blocksInfo:any = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'}
]


const Test = forwardRef<HTMLElement>((props, ref) => {

    const [blocks, setBlocks] = useState(blocksInfo);
    const mouseOverRef = useRef<Boolean>(false)
    const dragStatusRef = useRef<Boolean>(false)

    const onClick = () => {
        const tmp = blocks.slice(1)
        tmp.push(blocks[0])
        blocks.map((block:any) => {
            // @ts-ignore
            document.getElementById(block.id).style.transition = 'all 0.5s linear'
            // @ts-ignore
            document.getElementById(block.id).style.transform = 'translate(-278px)'
        })

        setTimeout(() => {
            blocks.map((block:any) => {
                // @ts-ignore
                document.getElementById(block.id).style.transition = 'none'
                // @ts-ignore
                document.getElementById(block.id).style.transform = 'none'
            })
            setBlocks(tmp)
        }, 550)
    }

    useEffect(() => {
        if (mouseOverRef.current || dragStatusRef.current)
            return;

        const timer = setTimeout(() => {
            if (!mouseOverRef.current && !dragStatusRef.current)
                onClick()
        }, 2500);
        return () => clearTimeout(timer);
    }, [blocks])

    const onDragStatusChange = () => {
        dragStatusRef.current = !dragStatusRef.current;
        if (!dragStatusRef.current) {
            reviveSlide()
        }
    }

    const reviveSlide = () => {
        if (mouseOverRef.current || dragStatusRef.current)
            return;
        onClick();
    }

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Blog</h1>
                    <div className="slide-show"
                         onMouseEnter={() => mouseOverRef.current = true}
                         onMouseLeave={() => {mouseOverRef.current = false; reviveSlide();}}
                    >
                        <Draggable
                            axis={"x"}
                            bounds={{ top: -0, left: -556, right: 0, bottom: 0 }}
                            onStart={onDragStatusChange}
                            onStop={onDragStatusChange}
                        >
                            <div className="blocks cubes">
                                {
                                    blocks.map((block:any, i:any) => (
                                        <div id={block.id} key={i} className={"block"}>{block.id}</div>
                                    ))
                                }
                            </div>
                        </Draggable>
                    </div>
                </section>
            </div>
        </div>
    )
})

export default Test;
