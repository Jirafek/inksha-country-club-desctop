import React from "react";
import { v4 as uuid4 } from "uuid";
import { m } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappyCard = ({ arrayData }) => {
   const sliderSettings = {
      slidesToShow: arrayData.length,
      responsive: [
         { breakpoint: 1280, settings: { slidesToShow: 2 } },
         { breakpoint: 740, settings: { slidesToShow: 1 } },
      ],
      slide: "div",
   };
   return (
      <Slider
         {...sliderSettings}
         className="flex  w-full justify-center pr-10 xl:justify-between 2xl:pr-24"
      >
         {arrayData.map((el, i) => (
            <m.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: {
                     delay: 3,
                  },
               }}
               key={uuid4()}
               className="flex h-[540px_!important] w-[270px_!important] flex-col rounded-[30px] border-[2px] border-[#AB8E67] 3xl:h-[670px_!important] 3xl:w-[390px_!important]"
            >
               {/*<picture>*/}
               {/*    <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />*/}
               {/*    <img className="3xl:mb-5 mb-3" src={el.imgWebp} alt={el.imgAltText} />*/}
               {/*</picture>*/}
               <img
                  className="mb-3 3xl:mb-5"
                  src={el.imgWebp}
                  alt={el.imgAltText}
               />
               <div className="pl-3 pr-2 2xl:pr-5 3xl:pl-11">
                  <h3 className="mb-2 text-[23px] font-semibold text-[#AB8E67] 3xl:mb-4 3xl:text-[28px]">
                     {el.title}
                  </h3>
                  {el.type === "text" ? (
                     <p className="text-[19px] font-medium text-white 3xl:text-[22px]">
                        {el.text}
                     </p>
                  ) : (
                     <div className="flex flex-col gap-2">
                        {el.text.map((text, index) => (
                           <div
                              key={uuid4()}
                              className="flex items-center gap-2"
                           >
                              <div className="relative h-[16px] w-[16px] 3xl:h-[20px] 3xl:w-[20px]">
                                 <div className="h-[16px] w-[16px] rounded-full border-[2px] border-[#AB8E67] 3xl:h-[20px] 3xl:w-[20px]"></div>
                              </div>
                              <p className="text-[17px] font-medium text-white 3xl:text-[22px]">
                                 {text}
                              </p>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </m.div>
         ))}
      </Slider>
   );
};

export default HappyCard;
