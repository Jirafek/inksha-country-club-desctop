import React from "react";
import hero from "image/korpLanding/korp_hero.png";
import arrow from "icons/arrow.png";
import Button from "common/Button";
import trans1 from "image/korpLanding/trans1.png";
const Hero = () => {
   return (
      <div className="relative bg-korpPrimary pb-[12%] pt-[5%]">
         <div className="wrapper ">
            <div className="text-center">
               <h1 className="text-xl font-bold text-brown">
                  КОРПОРАТИВЫ & ТИМБИЛДИНГ
               </h1>
               <div className="my-[40px] text-md text-white">
                  Выбраться из офиса за город? Отличная мысль, но как это все
                  организовать? Ответ прост - приезжайте к нам, у нас уже всё
                  готово, прекрасная природа и полный комфорт ждут!
               </div>
               <div className="relative">
                  <img src={hero} alt="" />
                  <Button className="absolute -bottom-5 left-1/2 h-[65px] min-w-[601px] -translate-x-1/2 bg-brown text-white">
                     Организовать мероприятие
                     <img src={arrow} alt="" />
                  </Button>
               </div>
            </div>
         </div>
         <img
            className="-z-1 absolute -bottom-[15%]  w-full object-cover"
            src={trans1}
            alt=""
         />
      </div>
   );
};

export default Hero;
