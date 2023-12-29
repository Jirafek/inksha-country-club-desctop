import React from "react"

import { m } from "framer-motion"

import { useTranslation } from 'react-i18next'
import { v4 as uuid4 } from 'uuid'

import LocationsCard from '../LocationsCard'
import Logo from '../Logo'
import Title from '../Title'// Import the useTranslation hook
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

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



    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState(i18n.language)
    const [key, setKey] = useState(uuid4())
    const initialLanguageRef = useRef(i18n.language)

    useEffect(() => {
        // Compare the initial language with the current language
        if (initialLanguageRef.current !== i18n.language) {
            // Language has changed, update the component
            setLanguage(i18n.language)
            setKey(uuid4()) // Change the key for a forced re-render
            // Update the initial language in the ref
            initialLanguageRef.current = i18n.language
        }
    }, [i18n.language])

    const locationsData = [
        {

            imgAvif: '/image/locations-mini-1.avif',
            imgWebp: '/image/locations-mini-1.webp',
            imgAlt: t('woodsResidence'), // Translate the alt text
            title: t('woodsResidence'), // Translate the title
            variant: OpenBottom,
            link: '/location/1',
        },
        {

            imgAvif: '/image/locations-mini-2.avif',
            imgWebp: '/image/locations-mini-2.webp',
            imgAlt: t('cottageInSuburbs'), // Translate the alt text

            title: t('cottageInSuburbs'), // Translate the title
            variant: OpenBottom,
            link: '/location/2',
        },
        {

            imgAvif: '/image/locations-mini-3.avif',
            imgWebp: '/image/locations-mini-3.webp',
            imgAlt: t('chaletsOnIkshaReservoir'), // Translate the alt text

            title: t('chaletsOnIkshaReservoir'), // Translate the title
            variant: OpenBottom,
            link: '/location/3',
        },
        {

            imgAvif: '/image/locations-mini-4.avif',
            imgWebp: '/image/locations-mini-4.webp',
            imgAlt: t('olympicVillage'), // Translate the alt text

            title: t('olympicVillage'), // Translate the title
            variant: OpenBottom,
            link: '/location/4',
        },
    ]

    return (
        <section
            key={key}
            id="locations" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={t('common.locations')} /> {/* Translate the main title */}
            <Logo />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false }}
                variants={heading}
                className="2xl:pl-[90px] md:pl-[50px] sm:pl-[40px] pl-3 2xl:pt-[170px] sm:pt-[110px] pt-[90px] pb-6">
                <m.h2 variants={OpenLeft} className="2xl:text-[68px] xl:text-[58px] lg:text-[40px] sm:text-[28px] text-[22px] text-white font-extrabold sm:pl-0 pl-7">{t('locations.weHaveSeveralLocations')} <br /> <span className="text-[#A69376]">{t('locations.speciallyForYou')}</span></m.h2>
                <LocationsCard arrayData={locationsData} />
            </m.div>
        </section>
    )
}

export default Locations
