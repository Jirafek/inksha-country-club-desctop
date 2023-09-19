import React from "react";
import { v4 as uuid4 } from 'uuid';
import { m } from "framer-motion";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HappyCard = ({ arrayData }) => {
    const sliderSettings = {
        slidesToShow: arrayData.length,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 2 } },
            { breakpoint: 740, settings: { slidesToShow: 1 } },
        ],
        slide: 'div'
    };
    return (
        <Slider {...sliderSettings} className="flex xl:justify-between justify-center 2xl:pr-24 pr-14">
            {
                arrayData.map((el, i) => (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 3,
                            },
                        }}
                        key={uuid4()}
                        className="rounded-[30px] border-[2px] border-[#AB8E67] 3xl:h-[670px_!important] h-[540px_!important] 3xl:w-[390px_!important] w-[270px_!important] flex flex-col">

                        {/*<picture>*/}
                        {/*    <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />*/}
                        {/*    <img className="3xl:mb-5 mb-3" src={el.imgWebp} alt={el.imgAltText} />*/}
                        {/*</picture>*/}
                        <img className="3xl:mb-5 mb-3" src={el.imgWebp} alt={el.imgAltText} />
                        <div className="3xl:pl-11 pl-3 2xl:pr-5 pr-2">
                            <h3 className="text-[#AB8E67] 3xl:text-[28px] text-[23px] font-semibold 3xl:mb-4 mb-2">
                                {el.title}
                            </h3>
                            {
                                el.type === 'text' ?
                                    <p className="text-white 3xl:text-[22px] text-[19px] font-medium">
                                        {el.text}
                                    </p>
                                    :
                                    <div className="flex flex-col gap-2">
                                        {
                                            el.text.map((text, index) => (
                                                <div key={uuid4()} className="flex items-center gap-2">
                                                    <div className="relative 3xl:w-[20px] w-[16px] 3xl:h-[20px] h-[16px]">
                                                        <div className="3xl:w-[20px] w-[16px] 3xl:h-[20px] h-[16px] rounded-full border-[2px] border-[#AB8E67]"></div>
                                                    </div>
                                                    <p className="text-white 3xl:text-[22px] text-[17px] font-medium">
                                                        {text}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    </m.div>
                ))
            }
        </Slider>
    );
}

export default HappyCard;
