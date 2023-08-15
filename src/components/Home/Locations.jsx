import React from "react";
import Title from '../Title';
import Logo from '../Logo';
import { m } from "framer-motion";
import LocationsCard from '../LocationsCard';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

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
};

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
};

// const OpenRight = {
//     hidden: {
//         opacity: 0,
//         transform: 'translate(500px)'
//     },
//     visible: {
//         opacity: 1,
//         transform: 'translate(0px)',
//         transition: {
//             ease: 'easeOut',
//             duration: 2.5,
//         },
//     },
// };

const locationsData = [
    {
        img: '/image/locations-mini-1.webp',
        title: 'ЛЕСНАЯ РЕЗИДЕНЦИЯ',
        variant: OpenBottom,
        link: '/location/1'
    },
    {
        img: '/image/locations-mini-2.webp',
        title: 'КОТТЕДЖ',
        variant: OpenBottom,
        link: '/location/2'
    },
    {
        img: '/image/locations-mini-3.webp',
        title: 'ШАЛЕ',
        variant: OpenBottom,
        link: '/location/3'
    },
    {
        img: '/image/locations-mini-4.webp',
        title: 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ',
        variant: OpenBottom,
        link: '/location/4'
    },
];

const Locations = () => {
    return (
        <section id="locations" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={'Локации'} />
            <Logo />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="md:pl-[90px] sm:pl-[40px] pl-3 2xl:pt-[170px] sm:pt-[110px] pt-[90px] pb-6">
                <m.h2 variants={OpenLeft} className="2xl:text-[68px] xl:text-[58px] lg:text-[40px] sm:text-[28px] text-[22px] text-white font-extrabold sm:pl-0 pl-7">У НАС ЕСТЬ НЕСКОЛЬКО ЛОКАЦИЙ <br /> <span className="text-[#A69376]">СПЕЦИАЛЬНО ДЛЯ ВАС</span></m.h2>
                <LocationsCard arrayData={locationsData} />
            </m.div>
        </section>
    );
}

export default Locations;
