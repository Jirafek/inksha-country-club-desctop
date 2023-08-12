import React, { useState, useEffect } from "react";
import Title from '../Title';
import GalleryArrow from '../icons/GalleryArrow';
import { v4 as uuid4 } from 'uuid';
import { m } from "framer-motion";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomNextArrow, CustomPrevArrow } from '../CustomArrows';

const galleryData = [
    {
        title: 'Лесная резиденция',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Шале',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Коттедж',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Олимпийская деревня',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Наши гости',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Питание',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
    {
        title: 'Развлечения',
        images: [
            '/image/gallery-1-1.png',
            '/image/gallery-1-1.png',
        ]
    },
];

const Gallery = () => {
    const [menuItem, setMenuItem] = useState('Лесная резиденция');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    }

    const handleMenuItem = (index) => {
        setMenuItem(galleryData[index].title);
        setIsMenuOpen(false);
    }
    useEffect(() => {
        const selectedData = galleryData.find(item => item.title === menuItem);
        if (selectedData) {
            setSelectedImages(selectedData.images);
        }
    }, [menuItem]);

    const sliderSettings = {
        slidesToShow: 1,
        slide: 'div',
        speed: 1000,
        nextArrow: <CustomNextArrow url="/image/arrow_gallery.png" />,
        prevArrow: <CustomPrevArrow url="/image/arrow_gallery.png" />,
    };

    return (
        <section className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={'Галерея'} />
            <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[190px] top-[156px] lg:w-[550px] w-[360px] border border-[#AB8E67] bg-[#75624A] rounded-[22px]">
                <div className="relative w-full pl-12 flex flex-col gap-2 items-start">
                    {
                        galleryData.map((el, i) => {
                            if (el.title === menuItem) return;

                            return (
                                <button key={uuid4()} onClick={() => handleMenuItem(i)} className="lg:text-[35px] text-[24px] text-white font-medium">
                                    {el.title}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
            <m.button
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 2
                    },
                }}
                onClick={handleMenu} className="absolute z-20 left-1/2 -translate-x-1/2 top-[7.5rem] lg:w-[550px] w-[360px] lg:h-[100px] h-[65px] border border-[#AB8E67] bg-[#75624A] rounded-[22px]">
                <div className="relative h-full w-full flex items-center lg:pl-12 pl-4">
                    <p className="text-white lg:text-[35px] text-[24px] font-medium">
                        {menuItem}
                    </p>
                    <div className="absolute lg:right-12 right-4 lg:w-auto w-[35px] top-1/2 -translate-y-1/2">
                        <GalleryArrow />
                    </div>
                </div>
            </m.button>
            <Slider {...sliderSettings} className="flex justify-center pt-[250px] pb-5">
                {
                    selectedImages.map((el, i) => (
                        <m.img
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 2,
                                    duration: 1
                                },
                            }}
                            src={el} alt="" />
                    ))
                }
            </Slider>
        </section>
    );
}

export default Gallery;
