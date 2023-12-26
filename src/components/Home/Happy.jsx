import React from "react";

import { m } from "framer-motion";

import { useTranslation } from 'react-i18next';

import { useMemo } from 'react';

import HappyCard from "../HappyCard";
import Logo from "../Logo";
import Title from "../Title";

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



const Happy = () => {
   
   const { t } = useTranslation();
   const textBlocks = useMemo(() => t('happy.happyData', { returnObjects: true }), [t]);
  
   const translatedTitle = t('happy.sectionTitle');
   const translatedSubtitle = t('happy.sectionSubtitle');
   return (
      <section id="happy" className="relative min-h-screen w-full bg-[#201E1F]">
         <Title text={translatedTitle} subtitle={translatedSubtitle} />
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
               {t('happy.weOfferYou')} <br /> {t('happy.severalTypesOfEntertainment')}{" "}
               <span className="text-[#A69376]">{t('happy.colon')}</span>
            </m.h2>
            <HappyCard arrayData={textBlocks} />
         </m.div>
      </section>
   );
};

export default Happy;
