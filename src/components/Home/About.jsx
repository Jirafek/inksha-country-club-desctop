import React, { useEffect } from "react"

import { m } from "framer-motion"

import AboutCard from '../AboutCard'
import Title from '../Title'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const OpenLeft = {
    hidden: {
        opacity: 0,
        transform: 'translate(-500px)'
    },
    visible: {
        opacity: 1,
        transform: 'translate(0px)',
        transition: {
            ease: 'easeOut',
            duration: 2.5,
        },
    },
}

const OpenRight = {
    hidden: {
        opacity: 0,
        transform: 'translate(500px)'
    },
    visible: {
        opacity: 1,
        transform: 'translate(0px)',
        transition: {
            ease: 'easeOut',
            duration: 2.5,
        },
    },
}

// const aboutData = [
//     {
//         imgAvif: '/image/bed.avif',
//         imgWebp: '/image/bed.webp',
//         imgAltText: 'Одых с ночевкой в Подмосковье',
//         text: 'Комфортабельные, уединеннные домики,оборудованные всем необходимым',
//     },
//     {
//         imgAvif: '/image/tree.avif',
//         imgWebp: '/image/tree.webp',
//         imgAltText: 'Отдых на природе',
//         text: 'Большие локации площадью 50 кв.м. с уютной верандой и зоной отдыха',
//     },
//     {
//         imgAvif: '/image/towel.avif',
//         imgWebp: '/image/towel.webp',
//         imgAltText: 'Баня в Подмосковье',
//         text: 'Русская баня с панорамным видом, где вы можете расслабиться после долгих прогулок',
//     },
//     // {
//     //     imgAvif: '/image/bicycle.avif',
//     //     imgwebp: '/image/bicycle.webp',
//     //     imgAltText: 'Активный отдых в Подмосковье',
//     //     text: 'Велосипеды и спорт-оборудование позволит Вам активно провести время на свежем воздухе',
//     // },
// ];






const About = () => {
    const { t } = useTranslation()
    const textBlocks = useMemo(() => t('aboutData', { returnObjects: true }), [t])


    return (
        <section id="about" className="min-h-screen xl:bg-[#201E1F] xl:bg-[url()] bg-[url(/image/about-card-bg.webp)] bg-center bg-no-repeat bg-cover duration-300 relative overflow-hidden">
            <div className="absolute left-0 top-0 flex items-center">
                <div className="w-screen h-screen bg-black opacity-70 duration-300 absolute top-0 left-0 xl:hidden block"></div>
            </div>
            <Title text={t('about.aboutUs')} />
            <div className="flex flex-col lg:pl-[90px] sm:pl-[15px]">
                <m.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={heading}
                    className="pt-[70px] flex justify-between mb-[35px] items-center sm:pl-0">
                    <m.div variants={OpenLeft} className="flex flex-col lg:pt-10 pt-2 lg:pl-0 pl-[40px]">
                        <h3 className="text-[#AB8E67] 3xl:text-[38px] lg:text-[33px] text-[28px] font-bold lg:mb-7">{t('about.countrysideClub')}</h3>
                        <h2 className="3xl:text-[68px] flex gap-6 items-center 2xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[30px] font-bold text-[#9E835F]">
                            <span className="text-white 3xl:text-[78px] 2xl:text-[70px] lg:text-[60px] sm:text-[50px] text-[40px] font-extrabold">{t('about.iksha')}</span>
                            {t('about.countryClub')}
                        </h2>
                        <p className="3xl:w-[810px] 2xl:w-[650px] lg:w-[500px] w-[380px] text-white 3xl:text-[32px] 2xl:text-[26px] lg:text-[20px] text-[18px] font-medium mb-5">{t('about.ikshaCountryClubDescription')}</p>
                        <p className="lg:text-[30px] text-[25px] text-white font-extrabold">{t('about.weHaveEverything')} <br /> {t('about.forFullRecreation')}:</p>
                        <div className="flex md:flex-row flex-col gap-2">
                            <a className="w-[300px] flex justify-center mt-2 text-white text-[20xp] font-medium py-3 border border-[#AB8E67] rounded-lg duration-300 hover:bg-[#AB8E67] bg-transparent" href="/pdf/about.pdf" target="_blanc">{t('about.presentationAboutUs')}</a>
                            <a className="w-[300px] flex justify-center mt-2 text-white text-[20xp] font-medium py-3 border border-[#AB8E67] rounded-lg duration-300 bg-[#AB8E67]" href="https://www.youtube.com/watch?v=Eat2wgPNuIo">{t('about.videoAboutUs')}</a>
                        </div>
                    </m.div>
                    <m.div variants={OpenRight} className="rounded-l-[60px] pt-[2.6rem] xl:block hidden border-[#9E835F] border-r-[0px] border-b-[3px] 3xl:h-auto h-[420px] border-l-[4px] 3xl:pb-0 pb-7 3xl:pl-10 pl-7">
                        <img loading='lazy' className="rounded-l-[60px] 3xl:w-auto w-[600px]" src="/image/about-card.webp" alt={t('imgAltText')} />
                    </m.div>
                </m.div>
                {/* Ваш компонент AboutCard */}
                <AboutCard arrayData={textBlocks} />
            </div>
        </section>
    )
}

export default About;

