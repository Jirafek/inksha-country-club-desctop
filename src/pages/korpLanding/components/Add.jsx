import React, { useState } from "react";
import add1 from "image/korpLanding/add/001.png";
import add2 from "image/korpLanding/add/002.png";
import add3 from "image/korpLanding/add/003.png";
import add4 from "image/korpLanding/add/004.png";
import add5 from "image/korpLanding/add/005.png";
import add6 from "image/korpLanding/add/006.png";
import Button from "common/Button";
import arrow from "icons/arrow.png";
const tabs = [
   { label: "Растопка бани/купели", img: add1 },
   { label: "Аренда территории", img: add2 },
   {
      label: "Активный отдых (квадроциклы, рыбалка с лодки, велосипедная и лыжная  экскурсии и др)",
      img: add3,
   },
   { label: "Караоке", img: add4 },
   { label: "Кейтеринг", img: add5 },
   { label: "Кальян", img: add6 },
];

const Add = () => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
      setActiveTab(index);
   };
   return (
      <div className="bg-korpPrimary">
         <div className="wrapper">
            <div>
               <h1 className="text-xl text-white">Дополнительные услуги</h1>
               <div className="flex items-center gap-10">
                  <div className="tabs flex max-w-[400px] flex-col gap-5  text-grey">
                     {tabs.map((tab, index) => (
                        <div
                           key={index}
                           className={`${
                              index === activeTab ? "text-white" : ""
                           } cursor-pointer`}
                           onClick={() => handleTabClick(index)}
                        >
                           {tab.label}
                        </div>
                     ))}
                  </div>
                  <div className="tab-content">
                     <img src={tabs[activeTab].img} alt="" />
                  </div>
               </div>
            </div>
            <h2 className="text-md text-white">
               Также по вашему желанию мы можем предоставить услугу
               <br /> оформление юр.договора (+10% к общей сумме)
            </h2>
            <Button className="h-max-[65px] min-w-[600px] gap-5 bg-brown text-white">
               Узнать стоимость
               <img src={arrow} alt="" />
            </Button>
         </div>
      </div>
   );
};

export default Add;
