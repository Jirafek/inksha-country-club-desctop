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
            '/image/gallery-1-2.jpg',
            '/image/gallery-1-3.jpg',
            '/image/gallery-1-4.jpg',
            '/image/gallery-1-5.jpg',
            '/image/gallery-1-6.jpg',
            '/image/gallery-1-7.jpg',
            '/image/gallery-1-8.jpg',
            '/image/gallery-1-9.jpg',
            '/image/gallery-1-10.jpg',
            '/image/gallery-1-11.jpg',
            '/image/gallery-1-12.jpg',
            '/image/gallery-1-13.jpg',
            '/image/gallery-1-14.jpg',
            '/image/gallery-1-15.jpg',
            '/image/gallery-1-16.jpg',
            '/image/gallery-1-17.jpg',
            '/image/gallery-1-18.jpg',
            '/image/gallery-1-19.jpg',
        ]
    },
    {
        title: 'Шале',
        images: [
            '/image/gallery-7-2.jpg',
            '/image/gallery-7-3.jpg',
            '/image/gallery-7-4.jpg',
            '/image/gallery-7-5.jpg',
            '/image/gallery-7-6.jpg',
            '/image/gallery-7-7.jpg',
            '/image/gallery-7-8.jpg',
            '/image/gallery-7-9.jpg',
            '/image/gallery-7-10.jpg',
        ]
    },
    {
        title: 'Коттедж',
        images: [
            '/image/gallery-3-2.jpg',
            '/image/gallery-3-3.jpg',
            '/image/gallery-3-4.jpg',
            '/image/gallery-3-5.jpg',
            '/image/gallery-3-6.jpg',
            '/image/gallery-3-7.jpg',
            '/image/gallery-3-8.jpg',
            '/image/gallery-3-9.jpg',
            '/image/gallery-3-10.jpg',
            '/image/gallery-3-11.jpg',
            '/image/gallery-3-12.jpg',
            '/image/gallery-3-13.jpg',
            '/image/gallery-3-14.jpg',
            '/image/gallery-3-15.jpg',
            '/image/gallery-3-16.jpg',
            '/image/gallery-3-17.jpg',
        ]
    },
    {
        title: 'Олимпийская деревня',
        images: [
            '/image/gallery-4-1.jpg',
            '/image/gallery-4-2.jpg',
            '/image/gallery-4-3.jpg',
            '/image/gallery-4-4.jpg',
            '/image/gallery-4-5.jpg',
            '/image/gallery-4-6.jpg',
            '/image/gallery-4-7.jpg',
            '/image/gallery-4-8.jpg',
            '/image/gallery-4-9.jpg',
            '/image/gallery-4-10.jpg',
            '/image/gallery-4-11.jpg',
            '/image/gallery-4-12.jpg',
            '/image/gallery-4-13.jpg',
            '/image/gallery-4-14.jpg',
            '/image/gallery-4-15.jpg',
            '/image/gallery-4-16.jpg',
            '/image/gallery-4-17.jpg',
            '/image/gallery-4-18.jpg',
        ]
    },
    {
        title: 'Наши гости',
        images: [
            '/image/gallery-2-2.jpg',
            '/image/gallery-2-3.jpg',
            '/image/gallery-2-4.jpg',
            '/image/gallery-2-5.jpg',
            '/image/gallery-2-6.jpg',
            '/image/gallery-2-7.jpg',
            '/image/gallery-2-8.jpg',
            '/image/gallery-2-9.jpg',
            '/image/gallery-2-10.jpg',
            '/image/gallery-2-11.jpg',
            '/image/gallery-2-12.jpg',
            '/image/gallery-2-13.jpg',
            '/image/gallery-2-14.jpg',
            '/image/gallery-2-15.jpg',
            '/image/gallery-2-16.jpg',
            '/image/gallery-2-17.jpg',
        ]
    },
    {
        title: 'Питание',
        images: [
            '/image/gallery-5-1.jpg',
            '/image/gallery-5-2.jpg',
            '/image/gallery-5-3.jpg',
            '/image/gallery-5-4.jpg',
            '/image/gallery-5-5.jpg',
            '/image/gallery-5-6.jpg',
            '/image/gallery-5-7.jpg',
            '/image/gallery-5-8.jpg',
            '/image/gallery-5-9.jpg',
            '/image/gallery-5-10.jpg',
            '/image/gallery-5-11.jpg',
            '/image/gallery-5-12.jpg',
            '/image/gallery-5-13.jpg',
            '/image/gallery-5-14.jpg',
            '/image/gallery-5-15.jpg',
            '/image/gallery-5-16.jpg',
        ]
    },
    {
        title: 'Развлечения',
        images: [
            '/image/gallery-6-2.jpg',
            '/image/gallery-6-3.jpg',
            '/image/gallery-6-4.jpg',
            '/image/gallery-6-5.jpg',
            '/image/gallery-6-6.jpg',
            '/image/gallery-6-7.jpg',
            '/image/gallery-6-8.jpg',
            '/image/gallery-6-9.jpg',
            '/image/gallery-6-10.jpg',
            '/image/gallery-6-11.jpg',
            '/image/gallery-6-12.jpg',
            '/image/gallery-6-13.jpg',
            '/image/gallery-6-14.jpg',
            '/image/gallery-6-15.jpg',
            '/image/gallery-6-16.jpg',
            '/image/gallery-6-17.jpg',
            '/image/gallery-6-18.jpg',
            '/image/gallery-6-19.jpg',
            '/image/gallery-6-20.jpg',
            '/image/gallery-6-21.jpg',
            '/image/gallery-6-22.jpg',
            '/image/gallery-6-23.jpg',
            '/image/gallery-6-24.jpg',
            '/image/gallery-6-25.jpg',
            '/image/gallery-6-26.jpg',
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
        <section id="gallery" className="relative min-h-screen w-full bg-[#201E1F]">
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
                            key={uuid4()}
                            src={el} alt="" />
                    ))
                }
            </Slider>
        </section>
    );
}

export default Gallery;
