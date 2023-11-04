// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import blagFull from 'images/gram_korp.webp'
import guest1 from "images/korpLanding/guest/001.webp";
import guest2 from "images/korpLanding/guest/002.webp";
import guest3 from "images/korpLanding/guest/003.webp";
import guest4 from "images/korpLanding/guest/004.webp";
import blag from "images/korpLanding/blag.png";
import korpprev from "icons/korpprev.png";
import korpnext from "icons/korpnext.png";
import { useRef } from "react";
import trans2 from "images/korpLanding/trans2.png";
import Lightbox from 'common/Lightbox';
const guests = [
   {
      img: guest4,
      name: "Полина  М",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
   {
      img: guest2,
      name: "Мария  К",
      date: "25 июня",
      text: "Идеальная площадка для летних мероприятий с безумно красивым видом и оформлением. Уютные чистые домики, приветливый персонал. Есть все, что необходимо для вечеринки. Спасибо за отличный праздник!",
   },
   {
      img: guest3,
      name: "Игорь Ф",
      date: "8 июля",
      text: "Вертикаль МСК: планировалось отметить день рождения компании. С первых минут общения с Юрием, где то внутри себя, наверное интуиция) понял, что это то самое место и надо брать) собственно, так и поступили. Мы довольны и искренне рекомендуем Икша Кантри Клаб!",
   },
   {
      img: guest1,
      name: "Вадим Х",
      date: "25 июля",
      text: "Снимали весь комплекс 24.07.2022 года на 20 человек, все очень понравилось! Ребята молодцы!",
   },
];
const menus = [
   { img: blagFull }
];
const KorpGuest = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   const swiperRef = useRef();
   return (
      <div className="bg-brown korp-guest relative pt-[5vh] pb-[15vh] md:pb-[25vh]">
         {isMenuOpen && <Lightbox toggleMenu={toggleMenu} items={menus} isButtonVisible={false} />}
         <div className="wrapper ">
            <Swiper
               // install Swiper modules
               modules={[Navigation, Autoplay]}
               className="korpswiper"
               spaceBetween={50}
               loop={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               slidesPerView={1}
               navigation
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
            >
               {guests.map((guest, i) => {
                  return (
                     <SwiperSlide className="px-[2vw] md:p-0" key={i}>
                        <div className="flex pl-5 w-full items-center justify-end">
                           <div className="min-w-[200px] min-h-[130px] md:w-[700px] bg-[#ECE9E9] rounded-[10px] md:h-[500px] relative">
                              <img
                                 className="absolute w-[30%] md:w-[40%]  md:max-w-auto -left-[10%] md:-left-[20%] top-1/2 transform -translate-y-1/2"
                                 src={guest.img}
                                 alt=""
                              />
                              <div className="pl-[25%] flex h-full flex-col justify-center md:pl-[20%] py-[2vh]">
                                 <h1 className="text-md ">{guest.name}</h1>
                                 <div className="text-sm ">{guest.date}</div>
                                 <h1 className="text-extramd ">{guest.text}</h1>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            <div className="flex max-w-[700px] my-5 ml-auto z-10 justify-between">
               <button
                  className="z-[200]"
                  onClick={() => swiperRef.current?.slidePrev()}
               >
                  <img
                     className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                     src={korpprev}
                     alt=""
                  />
               </button>
               <button
                  className="z-[200]"
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <img
                     className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                     src={korpnext}
                     alt=""
                  />
               </button>
            </div>
            <img
               className="absolute cursor-pointer w-[40%] md:w-[30%] left-0 bottom-0 md:bottom-10"
               src={blag}
               onClick={toggleMenu}
               alt="blagodarnosc"
            />
         </div>
         <img
            src={trans2}
            alt=""
            className="absolute w-full -bottom-[20vh] object-cover   "
         />
      </div>
   );
};

export default KorpGuest;
