import React from "react"
import { useTranslation } from "react-i18next"
import hero from "images/korpLanding/korp_hero.webp"
import arrow from "icons/arrow.png"
import Button from "common/Button"
import trans1 from "images/korpLanding/trans1.png"

const Hero = () => {
   const { t } = useTranslation()

   return (
      <div className="relative bg-korpPrimary pb-[30%] pt-[5%] lg:pb-[40%]">
         <div className="wrapper ">
            <div className="text-center">
               <h1 className="text-xl font-bold text-brown">
                  {t('korp.hero.title')}
               </h1>
               <div className="my-[40px] text-md text-white">
                  {t('korp.hero.description')}
               </div>
               <div className="absolute left-1/2 z-10 w-[90vw] -translate-x-1/2 transform">
                  <img
                     className=" korp_hero_img-blur aspect-video max-h-[70vh] w-full object-cover"
                     src={hero}
                     alt=""
                  />
                  <a href="#form">
                     <Button className="absolute montserrat -bottom-7 md:-bottom-5 left-1/2 max-h-[20px] md:h-[65px] min-w-[310px] sm:w-[600px] -translate-x-1/2 bg-brown text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        {t('korp.hero.button')}
                        <img src={arrow} alt="" />
                     </Button>
                  </a>
               </div>
            </div>
         </div>
         <img
            className="-z-1 absolute -bottom-[15%]  w-full object-cover"
            src={trans1}
            alt=""
         />
      </div>
   )
}

export default Hero
