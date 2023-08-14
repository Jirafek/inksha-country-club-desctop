import React, { useState } from "react";
import Title from '../components/Title';
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

const questionData = [
    {
        title: 'КАК ЗАБРОНИРОВАТЬ?',
        answer: 'Перейдите на главную страницу',
    },
    {
        title: 'КАК ПРОЕХАТЬ?',
        answer: 'Уточните по телефону или навигатор',
    },
    {
        title: 'МОЖНО ЛИ ПЕРЕНЕСТИ БРОНЬ?',
        answer: 'Конечно!',
    },
    {
        title: 'МОЖНО ЛИ С ПИТОМЦАМИ?',
        answer: 'Как сказала Инстасамка: За деньги - да!',
    },
    {
        title: 'РАБОТАЕТЕ ЛИ ВЫ КРУГЛЫЙ ГОД?',
        answer: 'Да',
    },
    {
        title: 'КАКИЕ МЕРОПРИЯТИЯ МОЖНО ПРОВЕСТИ?',
        answer: 'смотрите раздел Мероприятия',
    },
    {
        title: 'ЕСТЬ ЛИ ПОДАРОЧНЫЙ СЕРТИФИКАТ?',
        answer: 'Естественно!',
    },
    {
        title: 'КАК ЧАСТО УБИРАЮТСЯ В ДОМИКАХ?',
        answer: 'Everyday',
    },
    {
        title: 'МОЖНО ЛИ СО СВОЕЙ ЕДОЙ/НАПИТКАМИ?',
        answer: 'Платите и берите',
    },
];

const FAQ = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const handleClick = (index) => {
        if (currentQuestion === index) setCurrentQuestion(null)
        else setCurrentQuestion(index)
    }

    return (
        <section className="relative min-h-screen bg-[#201E1F]">
            <Title text={'FAQ'} />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="lg:pl-[90px] pl-[40px] lg:pt-[150px] pt-[90px] lg:pr-0 pr-5">
                <m.h2 variants={OpenLeft} className="text-white lg:text-[58px] text-[30px] font-semibold">Популярные вопросы и <span className="text-[#AB8E67]">ответы</span></m.h2>
                <m.div variants={OpenBottom} className="lg:pt-[80px] pt-[40px] pb-[30px] flex gap-4 flex-wrap">
                    {
                        questionData.map((el, i) => (
                            <div className="flex flex-col px-[25px] lg:py-[30px] py-[20px] w-[730px] bg-[#221C1C] border border-[#AB8E67] rounded-[15px]" key={uuid4()}>
                                <div className="flex items-center w-full justify-between">
                                    <h4 className="lg:text-[32px] sm:text-[24px] text-[18px] text-white font-semibold">
                                        {el.title}
                                    </h4>
                                    <div className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px]">
                                        <button onClick={() => handleClick(i)} className="lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] bg-[#AB8E67] rounded-full flex justify-center items-center relative">
                                            <div className="w-[80%] h-[2px] bg-[#221C1C] rounded-sm"></div>
                                            {
                                                currentQuestion !== i &&
                                                <div className="w-[80%] h-[2px] bg-[#221C1C] rounded-sm rotate-90 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                            }
                                        </button>
                                    </div>
                                </div>
                                {
                                    currentQuestion === i &&
                                    <p className="mt-3 text-white lg:text-[28px] sm:text-[22px] font-medium">
                                        {el.answer}
                                    </p>
                                }
                            </div>
                        ))
                    }
                </m.div>
            </m.div>
        </section>
    );
}

export default FAQ;
