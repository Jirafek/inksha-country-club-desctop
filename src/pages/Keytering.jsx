import React from "react";
import { v4 as uuid4 } from 'uuid';
import LocationArrow from '../components/icons/LocationArrow';
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomNextArrow, CustomPrevArrow } from '../components/CustomArrows';

const imageData = [
    {
        imgAvif: "/image/keyt1.avif",
        imgWebp: "/image/keyt1.webp"
    },
    {
        imgAvif: "/image/keyt2.avif",
        imgWebp: "/image/keyt2.webp"
    },
    {
        imgAvif: "/image/keyt3.avif",
        imgWebp: "/image/keyt3.webp"
    },
    {
        imgAvif: "/image/keyt4.avif",
        imgWebp: "/image/keyt4.webp"
    },
    {
        imgAvif: "/image/keyt5.avif",
        imgWebp: "/image/keyt5.webp"
    },
    {
        imgAvif: "/image/keyt6.avif",
        imgWebp: "/image/keyt6.webp"
    },
    {
        imgAvif: "/image/keyt7.avif",
        imgWebp: "/image/keyt7.webp"
    }
];

const Keytering = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };

    const settings = {
        dots: false,
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow url="/image/arrow_gallery.webp" />,
        prevArrow: <CustomPrevArrow url="/image/arrow_gallery.webp" />,
    };

    return (
        <section className="min-h-screen w-full relative bg-[#201E1F]">
            <button onClick={goBack} className="w-[40px] sm:block hidden absolute top-3 left-7 rotate-180 z-10 hover:-translate-x-2 duration-300">
                <LocationArrow />
            </button>
            <div className="pt-3">
                <div className="flex justify-center">
                    <h2 className="sm:text-[68px] text-[32px] gradient_title font-extrabold mb-2">
                        КЕЙТЕРИНГ
                    </h2>
                </div>
                <div className="flex justify-center mb-2">
                    <a href="/pdf/menu.pdf" target="_blank" className="py-3 px-8 flex justify-center items-center rounded-[10px] bg-[#AB8E67] text-white text-[20px] font-medium">
                        Смотреть меню
                    </a>
                </div>
                <Slider {...settings}>
                    {imageData.map(({ imgAvif, imgWebp }, i) => (
                        <div className="lg:w-[700px_!important] sm:w-[590px_!important] w-[380px_!important]" key={uuid4()}>
                            {/*<picture>*/}
                            {/*    <source srcSet={`${imgAvif} 1x`} type="image/avif" />*/}
                            {/*    <img className="image h-full" src={imgWebp} alt="Икша Кантри Клаб" />*/}
                            {/*</picture>*/}
                            <img className="image h-full" src={imgWebp} alt="Икша Кантри Клаб" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Keytering;