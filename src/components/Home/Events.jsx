import React from "react"
import { v4 as uuid4 } from 'uuid'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

import { CustomNextArrow, CustomPrevArrow } from '../CustomArrows'
import Logo from '../Logo'
import Title from '../Title'

const Events = () => {
    const { t } = useTranslation()
    const textBlocks = useMemo(() => t('eventsData', { returnObjects: true }), [t])

    const sliderSettings = {
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
        ],
        slide: 'div',
        speed: 1000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    }

    return (
        <section id="events" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={t('events.title')} />
            <Logo />
            <a href="https://bronirui-online.ru/iksha-country-club" style={{ background: 'linear-gradient(90deg, #EDE6DD 0%, rgba(171, 142, 103, 0.87) 100%), #75624A' }} className="text-[rgba(34,_28,_28,_0.70)] z-10 absolute left-1/2 -translate-x-1/2 top-[7.5rem] lg:py-5 py-3 px-10 lg:text-[30px] text-[23px] font-semibold border-[3px] border-[#604E3A] rounded-[10px]" rel="noreferrer">
                {t('events.organizeEvent')}
            </a>
            <Slider {...sliderSettings} className="flex xl:justify-between justify-center sm:pl-14 pt-[250px]">
                {textBlocks.map((el) => (
                    <div className="sm:w-[400px_!important] w-[380px_!important] flex flex-col items-center h-[700px_!important] border border-[#AB8E67] bg-[#221C1C] rounded-[30px] pb-4" key={uuid4()}>
                        <img loading='lazy' className="]" src={el.imgWebp} alt={el.imgAltText} />
                        <h3 className="text-[30px] text-[#AB8E67] font-bold text-center">
                            {el.title}
                        </h3>
                        <p className="px-4 text-white text-[24px] text-center font-medium my-[30px]">
                            {el.text}
                        </p>
                        <div className="flex justify-center">
                            <a href={el.link} className="text-[rgba(34,_28,_28,_0.70)] text-[25px] font-semibold py-4 px-8 border border-[#604E3A] bg-[#75624A] rounded-lg" rel="noreferrer">
                                {t('events.learnMore')}
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Events
