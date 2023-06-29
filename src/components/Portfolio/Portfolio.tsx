import React, { forwardRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import {KeenSliderOptions, KeenSliderPlugin, useKeenSlider} from "keen-slider/react"
import { EnergyPlus,
    Fam3Flyer,
    EnergyPlusFlyer,
    Hashtify,
    Adventus,
    MaksV,
    Paphos,
    Sweden,
    CalendarEka
} from "../../assets/portfolio"
import Link from "next/link";
import Image from "next/image";


const Portfolio = forwardRef<HTMLElement>((props, ref) => {

    const { t } = useTranslation();
    const [refSlider, slider] = useKeenSlider<HTMLDivElement>(initialSliderOptions, sliderAutoSwitch)

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        const perView = screenWidth < 600 ? 2 : 4;
        const spacing = screenWidth < 600 ? 15 : 15;

        if (screenWidth < 600) {
            slider.current?.update({
                loop: false,
                mode: "free-snap",
                slides: {
                    origin: "center",
                    perView: perView,
                    spacing: spacing,
                }
            });
            slider.current?.moveToIdx(1);
        } else {
            slider.current?.update(initialSliderOptions);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [slider]);

    return (
        //@ts-ignore
        <div ref={ref} id={"portfolio"}>
            <div className="wrapper">
                <div className="secondWrapper">
                    <section ref={ref} className={"section"} id={"portfolio"}>
                        <h2>{t("translation:header.portfolio")}</h2>
                    </section>
                </div>
            </div>
            <div className={"sliderPort"}>
                <div className="wrapper">
                    <div className="secondWrapper">
                        <div ref={refSlider} className="keen-slider portfolio">
                            <Link href={"https://www.energyplus.lv"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={EnergyPlus} alt={"energyplus"} />
                            </Link>
                            <Link href={"/api/portfolio?file=fam3flyer.png"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={Fam3Flyer} alt={"fam3Flyer"} />
                            </Link>
                            <Link href={"/api/portfolio?file=energyplusFlyer.png"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={EnergyPlusFlyer} alt={"energyplusFlyer"} />
                            </Link>
                            <Link href={"https://www.maksv.lv"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={MaksV} alt={"MaksV"} />
                            </Link>
                            <Link href={"/api/portfolio?file=adventusBaners.jpg"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={Adventus} alt={"Adventus"} />
                            </Link>
                            <Link href={"/api/portfolio?file=paphosRedesign.pdf"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={Paphos} alt={"Paphos"} />
                            </Link>
                            <Link href={"/api/portfolio?file=hashtify.pdf"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={Hashtify} alt={"Hashtify"} />
                            </Link>
                            <Link href={"/api/portfolio?file=sweden.jpg"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={Sweden} alt={"Sweden"} />
                            </Link>
                            <Link href={"/api/portfolio?file=calendarEkaPortfolio.png"} target={"_blank"} className="keen-slider__slide portCube">
                                <Image src={CalendarEka} alt={"CalendarEka"} />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Portfolio;

const sliderAutoSwitch: KeenSliderPlugin[] = [
    (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        let dir = 1
        function clearNextTimeout() {
            clearTimeout(timeout)
        }
        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
                const currentSlide = slider.track.details.rel;
                const totalSlides = slider.track.details.maxIdx;
                if (currentSlide === totalSlides)
                    dir = -1
                if (currentSlide === 0)
                    dir = 1
                if (dir === 1)
                    slider.next();
                else
                    slider.prev();
            }, 2000)
        }
        slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })
            nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    },
]

const initialSliderOptions: KeenSliderOptions = {
    loop: false,
    mode: "free-snap",
    slides: {
        perView: 4,
        spacing: 15,
    },
}
