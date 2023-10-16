import React from "react";
import { m } from "framer-motion";
import Title from "../Title";
import HappyCard from "../HappyCard";
import Logo from "../Logo";

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
};

const OpenLeft = {
   hidden: {
      opacity: 0,
      transform: "translate(-500px)",
   },
   visible: {
      opacity: 1,
      transform: "translate(0px)",
      transition: {
         ease: "easeOut",
         duration: 2.5,
      },
   },
};

const happyData = [
   {
      imgAvif: "/image/happy_1.avif",
      imgWebp: "/image/happy_1.webp",
      imgAltText: "Блюда на мангале",
      title: "ПОСИДЕЛКИ У КОСТРА",
      text: "Отличный способ провести время после трудового дня в компании друзей и родных",
      type: "text",
   },
   {
      imgAvif: "/image/happy_2.avif",
      imgWebp: "/image/happy_2.webp",
      imgAltText: "Катание на лодках",
      title: "РЫБАЛКА",
      text: "Если вы любите рыбалку, Икша Кантри Клаб - прекрасное место для Вас. Водохранилище и форелевый пруд вас приятно удивят",
      type: "text",
   },
   {
      imgAvif: "/image/happy_3.avif",
      imgWebp: "/image/happy_3.webp",
      imgAltText: "Прогулки по лесу",
      title: "ВИДЫ АКТИВНОГО ОТДЫХА",
      text: [
         "велосипед, квадроцикл",
         "Сап-доски, лодка, катер, гидроцикл",
         "волейбол, футбол, бадминтон",
      ],
      type: "array",
   },
   {
      imgAvif: "/image/happy_4.avif",
      imgWebp: "/image/happy_4.webp",
      imgAltText: "Баня с купелью",
      title: "БАНЯ И СПА",
      text: "Единение с природой, сочетание русских традиций и современного подхода к уходу за собой",
      type: "text",
   },
];

const Happy = () => {
   return (
      <section id="happy" className="relative min-h-screen w-full bg-[#201E1F]">
         <Title text={"Развлечения"} />
         <Logo />
         <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heading}
            className=" pb-6 pl-[40px] pt-[110px] md:pl-[90px] 2xl:pt-[170px]"
         >
            <m.h2
               variants={OpenLeft}
               className=" text-[28px] font-extrabold text-white md:text-[40px] lg:text-[58px] 2xl:text-[68px]"
            >
               МЫ ПРЕДЛАГАЕМ ВАМ <br /> НЕСКОЛЬКО{" "}
               <span className="text-[#A69376]">ВИДОВ РАЗВЛЕЧЕНИЙ:</span>
            </m.h2>
            <HappyCard arrayData={happyData} />
         </m.div>
      </section>
   );
};

export default Happy;
