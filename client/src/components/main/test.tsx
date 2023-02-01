import React, {forwardRef, useEffect, useState, useRef } from 'react';
import Draggable, {DraggableData, DraggableEvent } from "react-draggable";


const blocksInfo:any = [
    {id: '1'},
    {id: '2'},
    {id: '3'},
    {id: '4'},
    {id: '5'},
    {id: '6'},
    {id: '7'},
    {id: '8'},
    {id: '9'}
]

const Test = forwardRef<HTMLElement>((props, ref) => {

    const [blocks, setBlocks] = useState(blocksInfo);
    const [sliderWidth, setSliderWidth] = useState(1100);
    const [sliderFullWidth, setSliderFullWidth] = useState(0);
    const [blockWidth, setBlockWidth] = useState(250);
    const [gap, setGap] = useState(28);
    const [bounds, setBounds] = useState({
        left: 0,
        right: 0
    });
    const [sliderX, setSliderX] = useState(0);
    const [sliderDir, setSliderDir] = useState(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const mouseOverRef = useRef<Boolean>(false);
    const dragStatusRef = useRef<Boolean>(false);
    const [ticker, setTicker] = useState(0)

    const coordinates = useRef({ x: 0, y: 0 })


    const onDrag = (e: DraggableEvent, ui:DraggableData) => {
        setSliderX(ui.x)
        console.log(ui.x)
        coordinates.current.x = ui.x
    }

    useEffect(() => {
        const sliderWidth = sliderRef.current?.offsetWidth || 0;
        const sliderFullWidth = ((blockWidth * blocks.length) + (gap * (blocks.length - 1)))
        const bounds = (sliderFullWidth/2) - (sliderWidth/2);
        setBounds({
            left: -bounds,
            right: bounds
        });
        setSliderWidth(sliderWidth);
        setSliderFullWidth(sliderFullWidth);
    }, [])

    const moveSlider = (changeDir: boolean = false) => {
        if (bounds.right === 0) {
            setTicker(ticker + 1);
            return;
        }

        let direction = sliderDir

        if (changeDir)
            direction = sliderDir === 1 ? -1 : 1

        // @ts-ignore
        sliderRef.current.style.transition = 'all 0.5s linear';

        let pxOutOfScreen: number;
        if (direction > 0) {
            pxOutOfScreen = bounds.right + (sliderX - (sliderX * 2))
        } else {
            pxOutOfScreen = bounds.left + (sliderX - (sliderX * 2))
        }

        let pxToEndOfNextBlock: number = ((pxOutOfScreen + gap) % (blockWidth + gap)) - 28
        if (direction > 0 && sliderX === bounds.left && pxToEndOfNextBlock !== 0)
            pxToEndOfNextBlock = pxToEndOfNextBlock + blockWidth + gap

        let countBlocksToEnd = pxOutOfScreen / (blockWidth + gap)
        let comparingNext: number;
        let comparingBlockCount: number;
        let borderTo: number;

        if (direction > 0) {
            comparingNext = 0
            comparingBlockCount = 1
            borderTo = bounds.right
        } else {
            comparingNext = -(blockWidth + gap)
            comparingBlockCount = -1
            borderTo = bounds.left
        }

        if (pxToEndOfNextBlock === comparingNext && countBlocksToEnd === comparingBlockCount) {
            pxToEndOfNextBlock = borderTo
            setSliderDir(direction === 1 ? -1 : 1)
        } else if (pxToEndOfNextBlock === comparingNext && countBlocksToEnd !== comparingBlockCount) {
            pxToEndOfNextBlock = (direction === 1 ? blockWidth + gap + sliderX : sliderX - (blockWidth + gap))
        } else {
            pxToEndOfNextBlock = (direction === 1 ? sliderX + Math.abs(pxToEndOfNextBlock) : sliderX + pxToEndOfNextBlock);
        }

        if (pxToEndOfNextBlock <= bounds.left) {
            setSliderDir(1)
        } else if (pxToEndOfNextBlock >= bounds.right) {
            setSliderDir(-1)
            pxToEndOfNextBlock = bounds.right;
        }


        // @ts-ignore
        sliderRef.current.style.transform = `translate(${pxToEndOfNextBlock}px)`;
        setTimeout(() => {
            // @ts-ignore
            sliderRef.current.style.transition = 'none';
            setTicker(ticker + 1);
            setSliderX(pxToEndOfNextBlock)
            coordinates.current.x = pxToEndOfNextBlock
        }, 500)
    }

    useEffect(() => {
        if (mouseOverRef.current || dragStatusRef.current)
            return;

        const timer = setTimeout(() => {
            if (!mouseOverRef.current && !dragStatusRef.current)
                moveSlider();
        }, 2500);
        return () => clearTimeout(timer);
    }, [ticker])

    const onDragAction = () => {
        dragStatusRef.current = !dragStatusRef.current;
        if (!dragStatusRef.current)
            reviveSlide();
    }

    const reviveSlide = () => {
        if (mouseOverRef.current || dragStatusRef.current)
            return;
        moveSlider();
    }

    return (
        <div className="wrapper">
            <div className="secondWrapper">
                <section ref={ref} className={"section"}>
                    <h1>Blog</h1>
                    <div className="slide-show"
                         onMouseEnter={() => mouseOverRef.current = true}
                         onMouseLeave={() => {mouseOverRef.current = false; reviveSlide()}}
                    >
                        <Draggable
                            axis={"x"}
                            bounds={{ top: -0, left: bounds.left, right: bounds.right, bottom: 0 }}
                            onDrag={onDrag}
                            onStart={onDragAction}
                            onStop={onDragAction}
                            position={coordinates.current}
                        >
                            <div ref={sliderRef} className="blocks cubes">
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
