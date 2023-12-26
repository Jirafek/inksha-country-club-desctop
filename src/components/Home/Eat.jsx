// В вашем файле компонента Eat

import React from "react";

import { m } from "framer-motion";

import { Link } from "react-router-dom";

import { v4 as uuid4 } from 'uuid';

import { useTranslation } from 'react-i18next'; 

import Logo from '../Logo';
import Title from '../Title';
import { useMemo } from 'react'

const Eat = () => {
    const {t} = useTranslation(); // Достаем функцию для перевода
    const textBlocks = useMemo(() => t('eat.eatData', { returnObjects: true }), [t]);
    console.log(textBlocks);
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

  

    return (
        <section id='eat' className="min-h-screen w-full relative bg-[#201E1F]">
            <Title text={t('eat.sectionTitle')} />
            <Logo z={10} />
            <m.img
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                    },
                }}
                className="absolute top-1/2 -translate-y-1/2 left-0 lg:w-auto md:w-[400px] w-[270px]" src="/image/pizza.webp" alt="pizza" />
            <div className="lg:flex 2xl:justify-between justify-center">
                <m.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={heading}
                    className="md:pl-[90px] pl-[40px] 2xl:pt-[120px] pt-[110px] mb-6 z-10">
                    <m.h2 variants={OpenLeft} className="2xl:text-[68px] lg:text-[58px] md:text-[40px] text-[28px] text-white font-extrabold">
                        {t('eat.weAreGladToOfferYou')} <br /> <span className="text-[#A69376]">{t('common.colon')}</span>
                    </m.h2>
                    <m.div variants={OpenBottom} className="flex lg:justify-start justify-center w-full">
                        <div className="lg:ml-[230px] pt-[30px] mb-[60px] flex flex-col items-center gap-4 lg:w-[540px] sm:w-[440px] w-[330px]">
                            {
                                textBlocks.map((el, i) => (
                                    <div key={uuid4()} className="bg-[#221C1C]  justify-center w-full lg:h-[100px] h-[70px] border-[2px] border-[#AB8E67] rounded-xl flex justify-ccenter items-center relative">
                                        <div className="lg:w-16 lg:h-16 w-10 h-10 bg-center bg-no-repeat bg-cover absolute top-1/2 left-[10px] -translate-y-1/2" style={{ backgroundImage: `url(${el.img})` }}></div>
                                        <p className="text-white text-center lg:text-[28px] sm:text-[22px] text-[18px] font-semibold">
                                            {el.text}
                                        </p>    
                                    </div>
                                ))
                            }
                            <a rel="noreferrer" href="https://bronirui-online.ru/iksha-country-club/uslugi" className="bg-[#AB8E67] z-10 w-2/3 py-3 px-10 mt-4 border-[2px] text-center lg:text-[28px] sm:text-[22px] text-[15px] text-white font-medium rounded-[40px] border-[#4D382B] shadow-[4px_4px_10px_0px_rgba(0,_0,_0,_0.30)]">
                                {t('eat.orderFood')}
                            </a>
                        </div>
                    </m.div>
                    <h4 className="md:pl-[180px] text-white lg:text-[32px] sm:text-[28px] text-[22px] font-semibold z-10 relative">
                        {t('eat.weAreReadyToOrganize')} <br /> {t('eat.catering')} <Link className="underline" to="/keytering">{t('eat.viewMenu')}</Link>!
                    </h4>
                </m.div>

                <img loading='lazy' className="absolute right-[50px] 2xl:block hidden" src="/image/eat_big.webp" alt="Приготовление блюд на природе" />
            </div>
        </section>
    )
}

export default Eat;
