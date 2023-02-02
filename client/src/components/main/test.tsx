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

    const [autoScrollTime, setAutoScrollTime] = useState(2500)
    const [autoScrollTimeRevive, setAutoScrollTimeRevive] = useState(500)
    const autoScrollTimeReviveTimerRef = useRef<any>(null)

    const [ticker, setTicker] = useState(0)

    const coordinates = useRef({ x: 0, y: 0 })


    const onDrag = (e: DraggableEvent, ui:DraggableData) => {
        if (sliderX < ui.x)
            setSliderDir(1)
        if (sliderX > ui.x)
            setSliderDir(-1)
        setSliderX(ui.x)
        coordinates.current.x = ui.x
    }

    const onWidthChange = () => {
        let blockWidthCurrent = blockWidth;
        let gapCurrent: number;
        if (window.innerWidth < 600) {
            gapCurrent = 8;
            setGap(8);
            setAutoScrollTimeRevive(2000);
        } else {
            gapCurrent = 28;
            setGap(28);
        }
        const sliderWidth = sliderRef.current?.offsetWidth || 0;
        const sliderFullWidth = ((blockWidthCurrent * blocks.length) + (gapCurrent * (blocks.length - 1)))
        const bounds = (sliderFullWidth/2) - (sliderWidth/2);
        setBounds({
            left: -bounds,
            right: bounds
        });
        setSliderWidth(sliderWidth);
        setSliderFullWidth(sliderFullWidth);
    }

    useEffect(() => {
        onWidthChange();
        window.addEventListener("resize", onWidthChange);

        return () => {
            window.removeEventListener("resize", onWidthChange);
        };
    }, [])

    const moveSlider = () => {
        if (bounds.right === 0) {
            setTicker(ticker + 1);
            return;
        }

        // @ts-ignore
        sliderRef.current.style.transition = 'all 0.5s linear';

        let pxOutOfScreen: number;
        if (sliderDir > 0) {
            pxOutOfScreen = bounds.right + (sliderX - (sliderX * 2))
        } else {
            pxOutOfScreen = bounds.left + (sliderX - (sliderX * 2))
        }

        let pxToEndOfNextBlock: number = ((pxOutOfScreen + gap) % (blockWidth + gap)) - gap
        if (sliderDir > 0 && sliderX === bounds.left && pxToEndOfNextBlock !== 0)
            pxToEndOfNextBlock = pxToEndOfNextBlock + blockWidth + gap

        let countBlocksToEnd = pxOutOfScreen / (blockWidth + gap)
        let comparingNext: number;
        let comparingBlockCount: number;
        let borderTo: number;

        if (sliderDir > 0) {
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
            setSliderDir(sliderDir === 1 ? -1 : 1)
        } else if (pxToEndOfNextBlock === comparingNext && countBlocksToEnd !== comparingBlockCount) {
            pxToEndOfNextBlock = (sliderDir === 1 ? blockWidth + gap + sliderX : sliderX - (blockWidth + gap))
        } else {
            pxToEndOfNextBlock = (sliderDir === 1 ? sliderX + Math.abs(pxToEndOfNextBlock) : sliderX + pxToEndOfNextBlock);
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
            if (!mouseOverRef.current && !dragStatusRef.current && !autoScrollTimeReviveTimerRef.current)
                moveSlider();
        }, autoScrollTime);
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
        if (!autoScrollTimeReviveTimerRef.current) {
            autoScrollTimeReviveTimerRef.current = setTimeout(() => {
                moveSlider()
                autoScrollTimeReviveTimerRef.current = null;
            }, autoScrollTimeRevive);
        } else {
            window.clearTimeout(autoScrollTimeReviveTimerRef.current)
            autoScrollTimeReviveTimerRef.current = setTimeout(() => {
                moveSlider()
                autoScrollTimeReviveTimerRef.current = null;
            }, autoScrollTimeRevive);
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="secondWrapper">
                    <section ref={ref} className={"section"}>
                        <h1 className={"slide-show-title"}>Blog</h1>
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
        </>
    )
})

export default Test;
