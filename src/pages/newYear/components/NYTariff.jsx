// import Button from "common/Button";
import food from "assets/food.png"
import { Link as ScrollLink } from "react-scroll"
// import boo from "../assets/boo.png";
// import arrow from "icons/arrow.png";
// import down_arrow from "icons/down_arrow.png";
import Reveal from "common/Reveal"
import { slideFromRight } from "constants/motion"
import TariffComponents from "./NYTarrifComponents"
// import NYCreamButton from './NYCreamButton';
import NYGreenButton from './NYGreenButton'
import { useTranslation } from 'react-i18next'


const Tariff = () => {
   const { t } = useTranslation()
   return (
      <div
         id="Tariff"
         name="Tariff"
         className=" bg-no-repeat bg-cover pb-[10vh]  bg-center py-[7vh]"
      >
         <div className="ny-wrapper px-5 py-10 tariff-bg "  >
            <div className='md:p-[7vw]'>

               <Reveal duration={1.5} variants={slideFromRight(-500)}>
                  <h1 className="text-xl mount mb-7 tracking-widest relative">
                     {t('ny.tarif.title')}
                     <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                        {t('ny.tarif.title')}
                     </div>
                  </h1>
                  <p className="text-center text-NYblack text-lg font-semibold yaes mb-[5vh]">
                     {t('ny.tarif.subtitle')}
                  </p>
               </Reveal>
               <div className="flex yaes flex-col">
                  <TariffComponents />
               </div>

               <ScrollLink
                  to="Form"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  {/* <Button className="bg-pumpkin btn-pum mb-[10vh] text-white mx-auto">
                  {t('ny.tarif.button')}
                  <img src={down_arrow} className="w-7 h-7" alt="" />
               </Button> */}
               </ScrollLink>
            </div>

         </div>

         <div className='wrapper'>
            <div className="flex flex-col items-center justify-center">
               <div className="bg-NYcream ny-shadow w-full items-center  box-border mt-[10vh] yaes p-[5%]  text-tarif shadow-xl flex  justify-between rounded-[16px] min-h-[200px]">
                  <div className="">
                     <h1 className="text-black mount text-lg font-light">
                        {t('ny.tarif.additionalFood.title')}
                     </h1>
                     <p className="text-black text-sm font-semibold ">
                        {t('ny.tarif.additionalFood.description')}
                     </p>
                  </div>

                  <ul className="text-black flex flex-col items-center gap-4 justify-center text-md whitespace-nowrap">
                     <li>
                        <span className='mount'> {t('ny.tarif.additionalFood.breakfast')}</span> <span className="font-bold">{t('ny.tarif.additionalFood.priceBreakfast')}</span>
                     </li>{" "}
                     <li>
                        <span className='mount'> {t('ny.tarif.additionalFood.bbqLunch')}</span> <span className="font-bold">{t('ny.tarif.additionalFood.priceBbqLunch')}</span>
                     </li>
                     <li>
                        <span className='mount'> {t('ny.tarif.additionalFood.dinner')}</span> <span className="font-bold">{t('ny.tarif.additionalFood.priceDinner')}</span>
                     </li>
                  </ul>
               </div>
               <img src={food} alt="" />
               <a href="#Form">
                  <NYGreenButton className='text-black'>{t('ny.tarif.reserveButton')}</NYGreenButton>
               </a>
            </div>

         </div>
      </div>
   )
}

export default Tariff
