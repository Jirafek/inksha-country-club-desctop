import React from "react"

import { m } from "framer-motion"

import { useTranslation } from 'react-i18next'

import LocationsCard from '../LocationsCard'
import Logo from '../Logo'
import Title from '../Title'// Import the useTranslation hook

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const OpenBottom = {
    hidden: {
        opacity: 0,
        transform: 'translateY(500px)'
    },
    visible: {
        opacity: 1,
        transform: 'translateY(0px)',
        transition: {
            ease: 'easeOut',
            duration: 2.5,
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

const Locations = () => {
    const { t } = useTranslation() // Destructure t for translations

    const locationsData = [
        {

            imgAvif: '/image/locations-mini-1.avif',
            imgWebp: '/image/locations-mini-1.webp',
            imgAlt: t('locations.woodsResidence'), // Translate the alt text
            title: t('locations.woodsResidence'), // Translate the title
            variant: OpenBottom,
            link: '/location/1',
        },
        {

            imgAvif: '/image/locations-mini-2.avif',
            imgWebp: '/image/locations-mini-2.webp',
            imgAlt: t('locations.cottageInSuburbs'), // Translate the alt text

            title: t('locations.cottageInSuburbs'), // Translate the title
            variant: OpenBottom,
            link: '/location/2',
        },
        {

            imgAvif: '/image/locations-mini-3.avif',
            imgWebp: '/image/locations-mini-3.webp',
            imgAlt: t('locations.chaletsOnIkshaReservoir'), // Translate the alt text

            title: t('locations.chaletsOnIkshaReservoir'), // Translate the title
            variant: OpenBottom,
            link: '/location/3',
        },
        {

            imgAvif: '/image/locations-mini-4.avif',
            imgWebp: '/image/locations-mini-4.webp',
            imgAlt: t('locations.olympicVillage'), // Translate the alt text

            title: t('locations.olympicVillage'), // Translate the title
            variant: OpenBottom,
            link: '/location/4',
        },
    ]

    return (
        <section id="locations" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={t('common.locations')} /> {/* Translate the main title */}
            <Logo />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="2xl:pl-[90px] md:pl-[50px] sm:pl-[40px] pl-3 2xl:pt-[170px] sm:pt-[110px] pt-[90px] pb-6">
                <m.h2 variants={OpenLeft} className="2xl:text-[68px] xl:text-[58px] lg:text-[40px] sm:text-[28px] text-[22px] text-white font-extrabold sm:pl-0 pl-7">{t('locations.weHaveSeveralLocations')} <br /> <span className="text-[#A69376]">{t('locations.speciallyForYou')}</span></m.h2>
                <LocationsCard arrayData={locationsData} />
            </m.div>
        </section>
    )
}

export default Locations
