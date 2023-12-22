import React from "react";
import { v4 as uuid4 } from 'uuid';
import { m } from "framer-motion";

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

const AboutCard = ({ arrayData }) => {
    return (
        <m.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            className="2xl:pr-[60px] sm:pr-[10px] flex 2xl:flex-row lg:flex-col flex-row lg:flex-nowrap flex-wrap right-0 top-4 2xl:gap-0 sm:gap-4 gap-1 lg:justify-between justify-center items-center 2xl:static lg:absolute static">
            {
                arrayData.map((el, i) => (
                    <m.div variants={OpenBottom} key={uuid4()} className={`2xl:bg-[#221C1C] ${(i === 0 || i === 2) ? '2xl:mr-0 lg:mr-20' : ''} bg-[#221c1cb6] lg:rounded-[30px] rounded-[15px] border-[2px] border-[#AB8E67] 3xl:px-[27px] lg:px-[20px] px-1 3xl:py-5 lg:py-3 py-[6px] flex flex-col 3xl:max-w-[380px] lg:max-w-[300px] max-w-[190px] 3xl:h-[270px] lg:h-[200px] h-[140px]`}>
                        {/*<picture>*/}
                        {/*    <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />*/}
                        {/*    <img className="3xl:w-[95px] lg:w-[70px] w-[40px] lg:pb-4 pb-1" src={el.imgWebp} alt={el.imgAltText} />*/}
                        {/*</picture>*/}
                        <img loading='lazy' className="3xl:w-[95px] lg:w-[70px] w-[40px] lg:pb-4 pb-1" src={el.imgWebp} alt={el.imgAltText} />
                        <p className="text-white 3xl:text-[22px] lg:text-[16px] text-[12px] font-bold">
                            {el.text}
                        </p>
                    </m.div>
                ))
            }
        </m.div>
    );
}

export default AboutCard;
