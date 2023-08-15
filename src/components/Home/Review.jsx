import React from "react";
import Title from '../Title';
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

const reviewData = [
    {
        img: '/image/review1.webp',
        title: 'Анна, 26 лет',
        text: 'Очень хорошее место! Красиво, чисто, уютно и все продумано до мелочей! Администратор всегда на связи и всегда готов приехать и предоставить доп услуги, как караоке например. Получили огромное удовольствие от отдыха и ещё вернёмся !',
    },
    {
        img: '/image/review2.webp',
        title: 'Наталья, 34 года',
        text: 'Снимали беседку с домиками на берегу, потрясающая природа, более чем комфортные условия для отдыха, отличная баня с красивым панорамным окном и видом на лес и водохранилище, всё чистенько и продумано, в шаговой доступности песчаный пляж, лодки, сапы в прокат',
    },
];

const Review = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={'Отзывы'} />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="md:pl-[90px] sm:pl-[40px] pl-3 2xl:pt-[170px] sm:pt-[110px] pt-[90px] pb-6">
                <m.h2 variants={OpenLeft} className="2xl:text-[68px] xl:text-[58px] lg:text-[40px] sm:text-[28px] text-[22px] text-white font-extrabold sm:pl-0 pl-7">ИКША КАНТРИ КЛАБ – <br /> <span className="text-[#A69376]">ДАРИМ НЕЗАБЫВАЕМЫЕ ВПЕЧАТЛЕНИЯ</span></m.h2>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 2
                        },
                    }}
                    className="flex flex-col items-center lg:gap-14 gap-7">
                    {
                        reviewData.map((el, i) => (
                            <div key={uuid4()} className="flex relative sm:flex-row flex-col items-center lg:gap-14 gap-7 lg:py-7 py-3 lg:px-14 px-4 bg-[#221C1C] border border-[#AB8E67] rounded-[15px] lg:mr-40 mr-4">
                                <div className="absolute left-0 top-0 2xl:block hidden">
                                    <div className="relative flex">
                                        <img src="/image/comma.webp" alt="" />
                                        <img className="absolute left-12" src="/image/comma.webp" alt="" />
                                    </div>
                                </div>
                                <div className="absolute right-0 -bottom-12 lg:block hidden">
                                    <div className="relative flex">
                                        <img className="rotate-180" src="/image/comma.webp" alt="" />
                                        <img className="absolute right-12 rotate-180" src="/image/comma.webp" alt="" />
                                    </div>
                                </div>
                                <img className="2xl:w-auto lg:w-[150px] w-[112px]" src={el.img} alt="" />
                                <div className="flex flex-col lg:gap-3">
                                    <h3 className="2xl:text-[58px] lg:text-[42px] text-[30px] text-[#AB8E67] font-semibold">
                                        {el.title}
                                    </h3>
                                    <p className="text-white 2xl:text-[32px] lg:text-[20px] font-medium">
                                        {el.text}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </m.div>
            </m.div>
        </section>
    );
}

export default Review;
