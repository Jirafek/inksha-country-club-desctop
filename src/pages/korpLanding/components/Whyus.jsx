import React from "react";
import trans2 from "image/korpLanding/trans2.png";
import why1 from "image/korpLanding/whyus/1.png";
import why2 from "image/korpLanding/whyus/2.png";
import why3 from "image/korpLanding/whyus/3.png";
import why4 from "image/korpLanding/whyus/4.png";

const whyusmap = [
   {
      img: why1,
      text: "Большие локации площадью 50 кв.м. с уютной верандой и зоной отдыха",
   },
   {
      img: why2,
      text: "Русская баня с панорамным видом, где вы можете расслабиться после долгих прогулок",
   },
   {
      img: why3,
      text: "Комфортабельные, уединеннные домики,оборудованные всем необходимым",
   },
   {
      img: why4,
      text: "Велосипеды, лыжи, коньки и спорт-оборудование позволит Вам активно провести время на свежем воздухе",
   },
];

const Whyus = () => {
   return (
      <div className="relative  bg-brown  pb-[7%]  ">
         <div className="wrapper">
            <div className="text-center">
               <h1 className="mb-[1em] text-lg text-black">
                  Почему Нас Выбирают
               </h1>
               <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                  {whyusmap.map((item, i) => {
                     return (
                        <div
                           className="items col-span-1 flex flex-col items-center justify-center gap-5 place-self-start"
                           key={i}
                        >
                           <img
                              className="whyus_img h-[180px] w-[168px]"
                              src={item.img}
                           />
                           <div>{item.text}</div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         <img
            className="absolute -bottom-[10%] w-full object-cover"
            src={trans2}
            alt=""
         />
      </div>
   );
};

export default Whyus;
