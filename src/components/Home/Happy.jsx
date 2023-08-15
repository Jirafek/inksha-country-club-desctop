import React from "react";
import { m } from "framer-motion";
import Title from '../Title';
import HappyCard from '../HappyCard';
import Logo from '../Logo';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
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

const happyData = [
    {
        img: '/image/happy_1.webp',
        title: 'ПОСИДЕЛКИ У КОСТРА',
        text: 'Отличный способ провести время после трудового дня в компании друзей и родных',
        type: 'text'
    },
    {
        img: '/image/happy_2.webp',
        title: 'РЫБАЛКА',
        text: 'Если вы любите рыбалку, Икша Кантри Клаб - прекрасное место для Вас. Водохранилище и форелевый пруд вас приятно удивят',
        type: 'text'
    },
    {
        img: '/image/happy_3.webp',
        title: 'ВИДЫ АКТИВНОГО ОТДЫХА',
        text: ['велосипед, квадроцикл', 'Сап-доски, лодка, катер, гидроцикл', 'волейбол, футбол, бадминтон'],
        type: 'array'
    },
    {
        img: '/image/happy_4.webp',
        title: 'БАНЯ И СПА',
        text: 'Единение с природой, сочетание русских традиций и современного подхода к уходу за собой',
        type: 'text'
    },
];

const Happy = () => {
    return (
        <section id="happy" className="bg-[#201E1F] min-h-screen w-full relative">
            <Title text={'Развлечения'} />
            <Logo />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="md:pl-[90px] pl-[40px] 2xl:pt-[170px] pt-[110px] pb-6">
                <m.h2 variants={OpenLeft} className="2xl:text-[68px] lg:text-[58px] md:text-[40px] text-[28px] text-white font-extrabold">МЫ ПРЕДЛАГАЕМ ВАМ <br /> НЕСКОЛЬКО <span className="text-[#A69376]">ВИДОВ РАЗВЛЕЧЕНИЙ:</span></m.h2>
                <HappyCard arrayData={happyData} />
            </m.div>
        </section>
    );
}

export default Happy;
