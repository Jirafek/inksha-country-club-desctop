import React from "react";
import Title from '../Title';
import { v4 as uuid4 } from 'uuid';
import { Link } from "react-router-dom";
import Footer from '../Footer';
import { m } from "framer-motion";

const bronData = [
    {
        img: '/image/wa_bl.webp',
        text: '+7 985 909 12 02',
        link: 'https://wa.me/79859091202',
    },
    {
        img: '/image/tg_bl.webp',
        text: '@ikshacountryclub',
        link: 'https://t.me/ikshacountryclub',
    },
    {
        img: '/image/inst_bl.webp',
        text: '@ikshacountryclub',
        link: 'https://instagram.com/ikshacountryclub',
    },
    {
        img: '/image/vk_bl.webp',
        text: '@ikshacountryclub',
        link: 'https://vk.com/ikshacountryclub',
    },
    {
        img: '/image/mail_bl.webp',
        text: 'contact@ikshacountryclub.com',
        link: 'mailto:contact@ikshacountryclub.com',
    },
];

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

const Bron = () => {
    return (
        <section className="min-h-screen w-full relative bg-[#201E1F]">
            <Title text={'Бронирование'} />
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="flex justify-between xl:flex-row flex-col">
                <m.div variants={OpenLeft} className="xl:pl-[70px] pl-[40px] sm:pt-[140px] pt-[90px] flex flex-col z-10">
                    <h2 className="text-[#AB8E67] 2xl:text-[68px] sm:text-[42px] text-[35px] font-extrabold">БРОНИРОВАНИЕ</h2>
                    <p className="2xl:w-[700px] sm:w-[450px] w-[350px] text-white 2xl:text-[32px] sm:text-[18px] font-medium mb-5">Хотите комфортно отдохнуть и получить незабываемые впечатления? Забронируйте свой отдых <span className="text-[#AB8E67]">за 3 простых шага:</span></p>
                    <div className="flex sm:gap-11 gap-4 text-[#AB8E67] items-center">
                        <p className="2xl:text-[78px] sm:text-[55px] text-[42px] text-[#75624A] font-extrabold">01</p>
                        <a href="#" className="2xl:text-[38px] sm:text-[28px] text-[24px] font-extrabold underline">Заполните форму</a>
                    </div>
                    <div className="flex sm:gap-11 gap-4 text-[#AB8E67] items-center my-9">
                        <p className="2xl:text-[78px] sm:text-[55px] text-[42px] text-[#75624A] font-extrabold">02</p>
                        <p className="2xl:text-[38px] sm:text-[28px] text-[24px] font-extrabold">Проверьте почту</p>
                    </div>
                    <div className="flex sm:gap-11 gap-4 text-[#AB8E67] items-center">
                        <p className="2xl:text-[78px] sm:text-[55px] text-[42px] text-[#75624A] font-extrabold">03</p>
                        <p className="2xl:text-[38px] sm:text-[28px] text-[24px] font-extrabold">Приезжайте и отдыхайте!</p>
                    </div>
                </m.div>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 1,
                        },
                    }}
                    className="bg-[#221C1C] xl:ml-0 ml-[10px] xl:mb-0 mb-5 border z-10 xl:self-end xl:mt-0 mt-[25px] border-[#AB8E67] rounded-[15px] pl-8 py-5 sm:w-[600px] w-[375px] flex flex-col 2xl:gap-4 gap-2 mr-6">
                    {
                        bronData.map((el, i) => (
                            <a key={uuid4()} href={el.link} target="_blank" className="flex 2xl:gap-4 gap-2 items-center">
                                <img className="2xl:w-auto w-[45px]" src={el.img} alt="" />
                                <p className="2xltext-[28px] text-[20px] text-[#AB8E67] font-medium">
                                    {el.text}
                                </p>
                            </a>
                        ))
                    }
                </m.div>
                <img className="h-screen xl:block hidden absolute top-0 right-0" src="/image/bron_bg.webp" alt="" />
            </m.div>
        </section>
    );
}

export default Bron;
