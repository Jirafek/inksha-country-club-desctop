import React, { useState } from "react";
import Title from '../components/Title';
import { v4 as uuid4 } from 'uuid';
import { m } from "framer-motion";
import {Helmet} from "react-helmet";

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
        answer: 'Выберите дату и кол-во гостей, локацию, введите свои имя и телефон, перейдите на страницу оплаты, введите данные карты. Как только мы получим оплату, вам на почту придёт письмо с подтверждением бронирования. С вами свяжется наш менеджер.',
    },
    {
        title: 'КАК ПРОЕХАТЬ?',
        answer: 'Мы находимся в 25км от МКАД по Дмитровскому шоссе. Добраться можно на своем транспорте, вбив в навигатор "Икша Кантри Клаб", либо на такси от метро Алтуфьево, либо на электричке от Совёловского вокзала до станции Трудовая и затем 5 минут на такси.',
    },
    {
        title: 'ПРЕДОСТАВЛЯЕТЕ ЛИ ВЫ ПРИНАДЛЕЖНОСТИ ДЛЯ BBQ?',
        answer: 'Да! В бронирование входит мешок угля (2.5кг), розжиг (150мл), решетка и шампура (4шт)',
    },
    {
        title: 'МОЖНО ЛИ ПЕРЕНЕСТИ БРОНЬ?',
        answer: 'Бронь можно переносить за 24 часа до заезда. Переносить бронь можно только 1 раз.',
    },
    {
        title: 'МОЖНО ЛИ ОТМЕНИТЬ БРОНЬ?',
        answer: 'Отмена брони возможна по согласованию с менеджером за 2 недели до мероприятия.',
    },
    {
        title: 'МОЖНО ЛИ С ПИТОМЦАМИ?',
        answer: 'Мы любим животных. Не забудьте нас предупредить о породе вашего хвостатого при бронировании.',
    },
    {
        title: 'РАБОТАЕТЕ ЛИ ВЫ КРУГЛЫЙ ГОД?',
        answer: 'Да',
    },
    {
        title: 'КАКИЕ МЕРОПРИЯТИЯ МОЖНО ПРОВЕСТИ?',
        answer: 'Мы проводим все виды мероприятий. Если какое-то мероприятие мы не проводим, смотрите первый пункт :).',
    },
    {
        title: 'ЕСТЬ ЛИ ПОДАРОЧНЫЙ СЕРТИФИКАТ?',
        answer: 'Вы можете осуществить бронь даты или услуги в подарок, сообщив об этом менеджеру. При необходимости мы вышлем вам онлайн-сертификат',
    },
    {
        title: 'КАК ЧАСТО УБИРАЮТСЯ В ДОМИКАХ?',
        answer: 'Перед заездом каждого гостя. Локации мы просим оставлять в опрятном состоянии, либо оплачивать клининг. При необходимости для ваших мероприятий предусмотрена работа клинера за доп. плату',
    },
    {
        title: 'МОЖНО ЛИ СО СВОЕЙ ЕДОЙ/НАПИТКАМИ?',
        answer: 'Да!',
    },
];

const FAQ = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const handleClick = (index) => {
        if (currentQuestion === index) setCurrentQuestion(null)
        else setCurrentQuestion(index)
    }

    return (
        <>
            <Helmet>
                <title>Отдых в Подмосковье с Икша Кантри Клаб - Вопросы и Ответы</title>
                <meta
                    name="description"
                    content="Отдых в Подмосковье с Икша Кантри Клаб - Отвечаем на частые вопросы наши клиентов. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами."
                />
                <meta
                    name="title"
                    content="Отдых в Подмосковье с Икша Кантри Клаб - FAQ (Частые вопросы и ответы)."
                />
                <meta
                    name="keywords"
                    content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, катание, домик, беседки"
                />
            </Helmet>
            <section className="relative min-h-screen bg-[#201E1F]">
                <Title text={'FAQ'} isNeedBack />
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
        </>
    );
}

export default FAQ;
