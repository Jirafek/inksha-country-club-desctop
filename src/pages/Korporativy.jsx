import React, { useRef, useState } from "react";
import { v4 as uuid4 } from 'uuid';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Link, useNavigate, Navigate } from "react-router-dom";
import LocationArrow from '../components/icons/LocationArrow';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const korpData = [
    {
        title: 'Растопка бани/купели',
        name: 'bania'
    },
    {
        title: 'Дополнительная беседка на 35 чел',
        name: 'besedka'
    },
    {
        title: 'Аренда территории',
        name: 'territory'
    },
    {
        title: 'Волейбол',
        name: 'voley'
    },
    {
        title: 'Активный отдых',
        name: 'active'
    },
    {
        title: 'Сап-доски',
        name: 'sap'
    },
    {
        title: 'Рыбалка на форелевом пруду',
        name: 'riba'
    },
    {
        title: 'Кальян',
        name: 'shoosh'
    },
    {
        title: 'Кейтеринг',
        name: 'keyt'
    },
    {
        title: 'Караоке',
        name: 'karaoke'
    },
    {
        title: 'Квадроциклы ',
        name: 'squer'
    },
    {
        title: 'Оформление юр.договора +10%',
        name: 'dogovor'
    },
];

const images = [
    '/image/korp1.webp',
    '/image/korp2.webp',
    '/image/korp3.webp',
    '/image/korp4.webp',
    '/image/korp5.webp',
    '/image/korp6.webp',
];

const Korporativy = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };

    const [peopleState, setPeopleState] = useState(10);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
        setIsImageOpen(true);
    };

    const handleBackdropClick = () => {
        setIsImageOpen(false);
    };

    const handleInputChange = (e) => {
        let value = e.target.value;

        try {
            const val = Number(value)
            if (val > 50 || val < 0) return;
            setPeopleState(val);
        } catch (err) {
            return
        }
    }

    const sliderRef = useRef(null);

    const onNextClick = () => {
        sliderRef.current.slickNext();
    };

    const handleDownload = (url) => {
        window.open(url, '_blank');
    }

    const settings = {
        dots: false,
        arrows: true,
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
    };

    const settingsBig = {
        dots: false,
        arrows: false,
        draggable: false,
        swipe: false,
        autoplay: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [navigation, setNavigation] = useState(false);

    const onSubmit = (dataFromForm) => {
        for (var key in dataFromForm) {
            if (dataFromForm[key] === true) {
                const title = korpData.find(item => item.name === key.toString())
                dataFromForm[key] = title.title + ', ';
            } else if (dataFromForm[key] === false) {
                dataFromForm[key] = '';
            }
        }

        dataFromForm.people = peopleState;

        const email = {
            email: "-"
        }
        const data = Object.assign({}, dataFromForm, email)

        emailjs.send("service_a1dan7b", "template_rmhn4mc", data, "V_IkuqWqNwJlUw72K")
            .then((result) => {
                // onNextClick();
                setNavigation(true);
            }, (error) => {
                alert('Ошибка при отправке формы')
            }); // sending to email
    }
    return (
        <section className="relative min-h-screen w-full bg-[#201E1F]">
            {navigation && <Navigate to="/thanks" />}
            <button onClick={goBack} className="w-[40px] sm:block hidden absolute top-3 left-7 rotate-180 z-10 hover:-translate-x-2 duration-300">
                <LocationArrow />
            </button>
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="pt-3">
                <m.div variants={OpenLeft} className="flex justify-center">
                    <h2 className="xl:text-[68px] md:text-[42px] sm:text-[32px] text-[20px] gradient_title font-extrabold sm:mb-12 mb-7">
                        КОРПОРАТИВЫ & ТИМБИЛДИНГ
                    </h2>
                </m.div>
                {isImageOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-40 flex items-center justify-center"
                        onClick={handleBackdropClick}
                    >
                        <img
                            src="/image/doca.png"
                            alt="Картинка"
                            className="max-h-[90vh] rounded-3xl"
                        />
                    </div>
                )}
                <m.form variants={OpenBottom} onSubmit={handleSubmit(onSubmit)}>
                    <Slider ref={sliderRef} {...settingsBig}>
                        <div className="flex xl:flex-row flex-col slick-slider-flex justify-center items-center gap-11">
                            <div className="flex flex-col xl:items-start items-center gap-[30px]">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-1 items-center pl-8 text-white sm:w-[400px] w-[380px] h-[80px] bg-[#604E3A] border-[3px] rounded-xl border-[#AB8E67]">
                                        <p className="text-[26px] font-semibold">
                                            Количество человек:
                                        </p>
                                        <input onChange={handleInputChange} className="w-[50px] h-[50px] text-[32px] bg-transparent outline-none border-none" value={peopleState} type="number" />
                                    </div>
                                    <div className="text-white sm:w-[400px] w-[380px] h-[80px] bg-[#604E3A] border-[3px] rounded-xl border-[#AB8E67]">
                                        <label className="flex gap-1 items-center h-full pr-4 justify-between pl-8">
                                            <p className="text-[26px] font-semibold">
                                                Нужен ли вам ночлег?
                                            </p>
                                            <input className="3xl:w-[30px] 3xl:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] bg-[#AB8E67] rounded-lg border border-[#4D382B]" {...register('night')} type="checkbox" name="" id="" />
                                        </label>
                                    </div>
                                </div>
                                <div className="3xl:w-[800px] sm:w-[550px] w-[380px] border-[2px] border-[#AB8E67] bg-[rgba(117,_98,_74,_0.50)] rounded-[10px] px-11 py-8 flex flex-col items-center relative">
                                    <h4 className="text-center text-white 3xl:text-[32px] sm:text-[22px] text-[18px] font-semibold mb-14">Мы предлагаем нашим корпоративным гостям следующие услуги:</h4>
                                    <div className="grid grid-cols-2 sm:gap-x-12 gap-x-8 sm:gap-y-8 gap-y-4">
                                        {
                                            korpData.map((el, i) => (
                                                <label key={uuid4()} className="flex items-center gap-2">
                                                    <div className="3xl:w-[30px] 3xl:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] relative">
                                                        <input className="3xl:w-[30px] 3xl:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] bg-[#AB8E67] rounded-lg border border-[#4D382B]" type="checkbox" name="korp" {...register(el.name)} />
                                                    </div>
                                                    <p className="text-white 3xl:text-[28px] sm:text-[18px] font-medium">
                                                        {el.title}
                                                    </p>
                                                </label>
                                            ))
                                        }
                                    </div>
                                    <button onClick={onNextClick} type="button" className=" text-white mt-2 3xl:text-[32px] text-[22px] font-semibold sm:py-3 py-2 sm:px-20 px-12 bg-[#AB8E67] border-[5px] border-[#4D382B] rounded-[20px]">
                                        стоимость
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-8 xl:pb-0 pb-10">
                                <div className="flex justify-between w-full gap-1">
                                    <button type="button" onClick={handleImageClick}>
                                        <img className="3xl:w-[300px] w-[200px] rounded-[15px]" src="/image/doca.png" alt="" />
                                    </button>
                                    <button type="button" onClick={() => handleDownload('/pdf/keyt.pdf')}>
                                        <img className="3xl:w-[300px] w-[200px] rounded-[15px]" src="/image/menu_list.jpg" alt="" />
                                    </button>
                                </div>
                                <Slider className="3xl:w-[700px] 3xl:h-[460px] sm:w-[500px] sm:h-[325px] w-[360px] h-[240px] rounded-[15px] p-1 border-b-0 border-[2px] border-[#AB8E67]" {...settings}>
                                    {
                                        images.map((el, i) => (
                                            <div key={uuid4()}>
                                                <img className="rounded-[15px]" src={el} alt="" />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="h-full flex justify-center items-center">
                            <div className="lg:w-[770px] lg:h-[760px] sm:w-[500px] w-[380px] sm:h-[500px] h-[420px] bg-[#75624A] border-[#AB8E67] border-[2px] rounded-[40px] lg:px-[90px] px-[50px] py-9 flex flex-col items-center">
                                <p className="lg:text-[32px] sm:text-[22px] text-[18px] text-white font-semibold text-center lg:mb-16 mb-8">Оставьте ваши данные, и наш менеджер свяжется с вами для уточнения деталей</p>
                                <input placeholder="Имя" {...register('name', { required: true })} type="text" className="lg:h-[88px] mb-[30px] w-full text-white lg:text-[36px] sm:text-[28px] text-[20px] lg:py-0 py-2 lg:rounded-[20px] rounded-xl bg-[#604E3A] sm:pl-[40px] pl-[20px]" />
                                <input placeholder="Телефон" {...register('phone', { required: true })} type="text" className="lg:h-[88px] lg:mb-16 mb-8 w-full text-white lg:text-[36px] sm:text-[28px] text-[20px] lg:py-0 py-2 lg:rounded-[20px] rounded-xl bg-[#604E3A] sm:pl-[40px] pl-[20px]" />
                                <button type="submit" className="lg:py-[25px] py-[15px] px-[30px] lg:text-[32px] sm:text-[22px] text-[18px] text-white font-medium border-[4px] border-[#AB8E67] lg:rounded-[30px] rounded-[20px] bg-[rgb(171,_142,_103)] mb-[100px]">Отправить заявку</button>
                            </div>
                        </div>
                    </Slider>
                </m.form>
            </m.div>
        </section>
    );
}

export default Korporativy;
