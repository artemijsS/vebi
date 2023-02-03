import React, { useEffect, useState, useRef } from 'react';
import Draggable, {DraggableData, DraggableEvent } from "react-draggable";

interface SliderProps {
    autoScrollTimeMS?: number,
    autoRevivePCTimeMS?: number,
    autoReviveMBTimeMS?: number,
    mobScreenWidthPX?: number,
    children?: React.ReactNode
}

const Slider = ({ children, autoScrollTimeMS = 2500, autoRevivePCTimeMS = 500, autoReviveMBTimeMS = 2000, mobScreenWidthPX= 600}: SliderProps) => {

    const [blockWidth, setBlockWidth] = useState(0);
    const [gap, setGap] = useState(0);

    const [pcAutoScrollTimeRevive] = useState(autoRevivePCTimeMS);
    const [mobileScreenWidth] = useState(mobScreenWidthPX);
    const [mobileAutoScrollTimeRevive] = useState(autoReviveMBTimeMS);

    const [bounds, setBounds] = useState({
        left: 0,
        right: 0
    });
    const [sliderX, setSliderX] = useState(0);
    const [sliderDir, setSliderDir] = useState(1);
    const sliderRef = useRef<HTMLDivElement>(null);
    const moveSliderStatus = useRef<Boolean>(false);

    const mouseOverRef = useRef<Boolean>(false);
    const dragStatusRef = useRef<Boolean>(false);

    const [autoScrollTime] = useState(autoScrollTimeMS)
    const [autoScrollTimeRevive, setAutoScrollTimeRevive] = useState(autoRevivePCTimeMS)
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
        let blockWidthCurrent: number;
        let gapCurrent: number;
        let block: Element;
        if (sliderRef.current) {
            block = sliderRef.current.children[0]
            blockWidthCurrent = block.clientWidth;
            setBlockWidth(blockWidthCurrent);
            gapCurrent = Number(window.getComputedStyle(sliderRef.current).gap.split('px')[0]);
            setGap(gapCurrent)

            if (window.innerWidth < mobileScreenWidth) {
                setAutoScrollTimeRevive(mobileAutoScrollTimeRevive);
                setSliderDir(-1);
            } else {
                setAutoScrollTimeRevive(pcAutoScrollTimeRevive);
            }

            const sliderWidth = sliderRef.current?.offsetWidth || 0;
            const sliderFullWidth = ((blockWidthCurrent * React.Children.count(children)) + (gapCurrent * (React.Children.count(children) - 1)))

            if (sliderWidth >= sliderFullWidth) {
                moveSliderStatus.current = true;
                coordinates.current = { x: 0, y: 0 };
            }
            else {
                moveSliderStatus.current = false;
            }

            const bounds = (sliderFullWidth/2) - (sliderWidth/2);
            setBounds({
                left: -bounds,
                right: bounds
            });
        }
    }

    useEffect(() => {
        onWidthChange();
        window.addEventListener("resize", onWidthChange);

        return () => {
            window.removeEventListener("resize", onWidthChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const moveSlider = () => {
        if (bounds.right === 0) {
            setTicker(ticker + 1);
            return;
        }

        moveSliderStatus.current = true;

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

        if (!mouseOverRef.current && !dragStatusRef.current) {
            // @ts-ignore
            sliderRef.current.style.transition = 'all 0.5s linear';
            // @ts-ignore
            sliderRef.current.style.transform = `translate(${pxToEndOfNextBlock}px)`;
            setTimeout(() => {
                // @ts-ignore
                sliderRef.current.style.transition = 'none';
                setTicker(ticker + 1);
                setSliderX(pxToEndOfNextBlock)
                coordinates.current.x = pxToEndOfNextBlock
                moveSliderStatus.current = false;
            }, 500)
        } else {
            moveSliderStatus.current = false;
        }
    }

    useEffect(() => {
        if (mouseOverRef.current || dragStatusRef.current || moveSliderStatus.current)
            return;

        const timer = setTimeout(() => {
            if (!mouseOverRef.current && !dragStatusRef.current && !autoScrollTimeReviveTimerRef.current && !moveSliderStatus.current)
                moveSlider();
        }, autoScrollTime);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticker])

    const onDragAction = () => {
        dragStatusRef.current = !dragStatusRef.current;
        if (!dragStatusRef.current)
            reviveSlide();
    }

    const reviveSlide = () => {
        if (mouseOverRef.current || dragStatusRef.current || moveSliderStatus.current)
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
                <div ref={sliderRef} className="blocks">
                    { children }
                </div>
            </Draggable>
        </div>
    )
};

export default Slider;
