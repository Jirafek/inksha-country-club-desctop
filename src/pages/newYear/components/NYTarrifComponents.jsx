// import bat from "../assets/bat.png";
// import cat from "../assets/cat.png";
// import spooky from "../assets/spooky.png";
// import candy from "../assets/candy.png";
// import hat from "../assets/hat.png";
// import spooky2 from "../assets/spooky2.png";
// import NYGreenButton from "common/NYGreenButton";

import tar1 from 'images/NY/tariff/1.webp'
import tar2 from 'images/NY/tariff/2.webp'
import tar3 from 'images/NY/tariff/3.webp'
import tar4 from 'images/NY/tariff/4.webp'
import tar5 from 'images/NY/tariff/5.webp'
// import arrow from "icons/arrow.png";
import { Reveal } from "common/Reveal"
import { slideFromLeft, slideFromRight } from "constants/motion"
import { Link as ScrollLink } from "react-scroll"
import NYGreenButton from './NYGreenButton'
import { useTranslation } from 'react-i18next'


const getTraif = () => {
   const { t } = useTranslation()

   const tariffContent = {
      1: {
         counter: '01',
         title: t('ny.tarif.01.title'),
         dom: t('ny.tarif.01.dom'),
         location: t('ny.tarif.01.location'),
         includes: [
            t('ny.tarif.01.includes.0'),
            t('ny.tarif.01.includes.1'),
            t('ny.tarif.01.includes.2'),
            t('ny.tarif.01.includes.3'),
         ],
         price: t('ny.tarif.01.price')
      },
      2: {
         counter: '02',
         title: t('ny.tarif.02.title'),
         dom: t('ny.tarif.02.dom'),
         location: t('ny.tarif.02.location'),
         includes: [
            t('ny.tarif.02.includes.0'),
            t('ny.tarif.02.includes.1'),
            t('ny.tarif.02.includes.2'),
            t('ny.tarif.02.includes.3'),
         ],
         price: t('ny.tarif.02.price')
      },
      3: {
         counter: '03',
         title: t('ny.tarif.03.title'),
         dom: t('ny.tarif.03.dom'),
         location: t('ny.tarif.03.location'),
         includes: [
            t('ny.tarif.03.includes.0'),
            t('ny.tarif.03.includes.1'),
            t('ny.tarif.03.includes.2'),
            t('ny.tarif.03.includes.3'),
         ],
         price: t('ny.tarif.03.price')
      },
      4: {
         counter: '04',
         title: t('ny.tarif.04.title'),
         dom: t('ny.tarif.04.dom'),
         location: t('ny.tarif.04.location'),
         includes: [
            t('ny.tarif.04.includes.0'),
            t('ny.tarif.04.includes.1'),
            t('ny.tarif.04.includes.2'),
            t('ny.tarif.04.includes.3'),
         ],
         price: t('ny.tarif.04.price')
      },
      5: {
         counter: '05',
         title: t('ny.tarif.05.title'),
         dom: t('ny.tarif.05.dom'),
         location: t('ny.tarif.05.location'),
         includes: [
            t('ny.tarif.05.includes.0'),
            t('ny.tarif.05.includes.1'),
            t('ny.tarif.05.includes.2'),
            t('ny.tarif.05.includes.3'),
         ],
         price: t('ny.tarif.05.price')
      },
   }
   return tariffContent
}


function TariffComponents() {
   const tariffContent = getTraif()
   const { t } = useTranslation()
   return (
      <div className="flex flex-col yaes text-white items-center justify-center gap-[100px]">
         {/* Блок 1 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>

               <div className="bg-[#BC8E4A]  rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[1].counter}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[1].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>  {tariffContent[1].dom}</p>
                        <p>  {tariffContent[1].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              {t('ny.what')}

                           </h2>
                           <ul className="list-disc">
                              {tariffContent[1].includes.map((item, i) => {
                                 return (

                                    <li key={i}>{item}</li>
                                 )
                              })}
                              {/* <li>новогодний ужин</li>
                              <li>завтраки</li>
                              <li>
                                 участие в новогодних мероприятиях
                              </li> */}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[1].price}<span className='text-sm'>{t('ny.day')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar1}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
                        className="absolute -bottom-10 rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        {t('ny.booking.button')}

                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 2 */}
         <div className="bg-[#BC8E4A] place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
            <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
               {tariffContent[2].counter}
            </div>
            <h1 className="text-center text-lg font-bold text-violet">
               {tariffContent[2].title}
            </h1>
            <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
               <div className="text-md">
                  <p>{tariffContent[2].dom}</p>
                  <p>{tariffContent[2].location}</p>
                  <div className="ml-[10%]">
                     <h2 className="font-bold  text-violet">{t('ny.what')}

                     </h2>
                     <ul className="list-disc">
                        {tariffContent[2].includes.map((item, i) => (
                           <li key={i}>{item}</li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="flex items-center justify-center">
                  <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                     {tariffContent[2].price}<span className='text-sm'>{t('ny.day')}</span>
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
               <img
                  src={tar2}
                  className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                  alt=""
               />
            </div>
            <div>
               {/* <img
        className="absolute -top-10 rotate-180 -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
        src={bat}
        alt=""
     /> */}
            </div>
            <ScrollLink
               to="Form"
               smooth={true}
               duration={1000} // Длительность анимации скролла (в миллисекундах)
            >
               <NYGreenButton className="absolute text-black right-0  -bottom-5">
                  {t('ny.booking.button')}
                  {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
               </NYGreenButton>
            </ScrollLink>
         </div>


         {/* Блок 3 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] h-auto w-auto lg:h-[600px] flex flex-col items-center justify-center lg:w-[800px] xl:w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px] text-3xl text-NYred font-bold yaes">
                     {tariffContent[3].counter}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[3].title}
                  </h1>
                  <div className="flex-col md:flex-row mb-[2%] mx-5 p-5 rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[3].dom}</p>
                        <p>{tariffContent[3].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              {t('ny.what')}
                           </h2>
                           <ul className="list-disc">
                              {tariffContent[3].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[3].price} <span className='text-sm'>{t('ny.day')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar3}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
               className="absolute top-[100px] rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
               src={bat}
               alt=""
            /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000}
                  >
                     <NYGreenButton className="absolute text-black right-0 -bottom-5">
                        {t('ny.booking.button')}

                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 4 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-[#BC8E4A] place-self-end rounded-[16px] p-[2%] h-auto w-auto lg:h-[600px] flex flex-col items-center justify-center lg:w-[800px] xl:w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px] text-3xl text-NYred font-bold yaes">
                     {tariffContent[4].counter}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[4].title}
                  </h1>
                  <div className="flex-col md:flex-row mb-[2%] mx-5 p-5 rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[4].dom}</p>
                        <p>{tariffContent[4].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              {t('ny.what')}


                           </h2>
                           <ul className="list-disc">
                              {tariffContent[4].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[4].price} <span className='text-sm'>{t('ny.day')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar4}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
               className="absolute -top-10 -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
               src={bat}
               alt=""
            /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000}
                  >
                     <NYGreenButton className="absolute text-black right-0 -bottom-5">
                        {t('ny.booking.button')}

                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 5 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] h-auto w-auto lg:h-[600px] flex flex-col items-center justify-center lg:w-[800px] xl:w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px] text-3xl text-NYred font-bold yaes">
                     {tariffContent[5].counter}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[5].title}
                  </h1>
                  <div className="flex-col md:flex-row mb-[2%] mx-5 p-5 rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[5].dom}</p>
                        <p>{tariffContent[5].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              {t('ny.what')}


                           </h2>
                           <ul className="list-disc">
                              {tariffContent[5].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[5].price} <span className='text-sm'>{t('ny.day')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar5}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>

                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000}
                  >
                     <NYGreenButton className="absolute text-black right-0 -bottom-5">
                        {t('ny.booking.button')}

                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

      </div>
   )
}

export default TariffComponents