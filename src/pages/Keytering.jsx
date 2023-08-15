import React from "react";
import { v4 as uuid4 } from 'uuid';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imageData = [
    "/image/keyt1.webp",
    "/image/keyt2.webp",
    "/image/keyt3.webp",
    "/image/keyt4.webp",
    "/image/keyt5.webp",
    "/image/keyt6.webp",
    "/image/keyt7.webp",
];

const Keytering = () => {

    const settings = {
        dots: false,
        arrows: false,
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="min-h-screen w-full relative bg-[#201E1F]">
            <div className="pt-3">
                <div className="flex justify-center">
                    <h2 className="sm:text-[68px] text-[32px] gradient_title font-extrabold mb-2">
                        КЕЙТЕРИНГ
                    </h2>
                </div>
                <Slider {...settings}>
                    {imageData.map((image, i) => (
                        <div className="lg:w-[700px_!important] sm:w-[590px_!important] w-[380px_!important]" key={uuid4()}>
                            <img className="image" src={image} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Keytering;