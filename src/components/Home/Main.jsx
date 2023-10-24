import React, { useEffect, useState } from "react";
import Header from "./Header";
import { m } from "framer-motion";
import AnimationButton from "./../../common/AnimationButton";
import MainPopup from "./../../common/MainPopup";
import { Link } from "react-router-dom";
const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
};

const headingLines = {
   hidden: {
      y: 10,
      opacity: 0,
      clipPath: "inset(100% 0px 0px)",
   },
   visible: {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0px 0px)",
      transition: {
         ease: "easeOut",
         duration: 0.8,
      },
   },
};

const Main = () => {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "//widget.bronirui-online.ru/js/app.js";
      script.async = true;

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-widget-1", {
            moduleId: 5026,
            index: 0,
            widget: {
               position: {
                  bottom: "200px",
               },
               mobile: {
                  absolute: false, // Абсолютное позиционирование в мобильной версии при виде отображения "У шапки сайта"
                  color: undefined, // HEX-код цвета виджета в мобильной версии
                  position: {
                     top: "100px",
                  },
               },
            },
            // Настройки позиции плавающей кнопки
            button: {
               position: {
                  bottom: "20px",
                  left: "100px",
                  right: "20px",
               },
            },
         });

         // Примените ваши стили после инициализации виджета
         const customStyles = `
            .znms-widget__module-form-block--opacity-bg {
                background: #75624A  !important;
            }
            .znms-widget__module-form-block .znms-widget__module-form-block__title {
                color: #fff !important;
            }
            .znms-widget__module-form-block__title a.znms-widget__module-form-block__items--booking-service-link {
                color: #fff !important;
            }
            .znms-widget__module-form-block__btn.znms-widget__v-color8 {
              border-color: #4D382B !important;
                    background-color: #4D382B !important
            }
            .znms-widget__horizontal-form-submit {
                // margin-top: 0 !important;
            }
            .znms-widget__widget-btn.znms-widget__v-color4 {
                background-color: #75624a !important;
            }
            .nms-widget__module-form-block__items--booking-service-link {
                display: none !important;
            }
          `;
         const styleElement = document.createElement("style");
         styleElement.innerHTML = customStyles;
         document.head.appendChild(styleElement);
      };
      script.onload = initializeWidget;
      document.body.appendChild(script);
   }, []);

   return (
      <div>
         <section
            style={{
               backgroundImage: "url(/image/bg1_right.webp)",
               backgroundPosition: "right",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
            className="relative w-full"
         >
            <Header />

            <div className="absolute left-0 top-0 flex items-center">
               {/*<picture>*/}
               {/*    <source srcSet="/image/main_arrow_big.avif 1x" type="image/avif" />*/}
               {/*    <img className="h-screen lg:block hidden" src="/image/main_arrow_big.webp" alt="Икша Кантри Клаб" />*/}
               {/*</picture>*/}
               <img
                  className="hidden h-screen lg:block"
                  src="/image/main_arrow_big.webp"
                  alt="Икша Кантри Клаб"
               />

               <div className="absolute left-0 top-0 block h-screen w-screen bg-black opacity-70 duration-300 lg:hidden"></div>

               {/*<picture>*/}
               {/*    <source srcSet="/image/main_arrow_md.avif 1x" type="image/avif" />*/}
               {/*    <img className="2xl:max-h-[790px] lg:block hidden max-h-[750px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_md.webp" alt="Икша Кантри Клаб" />*/}
               {/*</picture>*/}
               <img
                  className="-ml-[300px] hidden max-h-[750px] animate-[arrowAnimationMd_3s_infinite] lg:block 2xl:max-h-[790px] 2xl:animate-[arrowAnimation_5s_infinite]"
                  src="/image/main_arrow_md.webp"
                  alt="Икша Кантри Клаб"
               />

               {/*<picture>*/}
               {/*    <source srcSet="/image/main_arrow_sm.avif 1x" type="image/avif" />*/}
               {/*    <img className="2xl:max-h-[650px] lg:block hidden max-h-[620px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_sm.webp" alt="Икша Кантри Клаб" />*/}
               {/*</picture>*/}
               <img
                  className="-ml-[300px] hidden max-h-[620px] animate-[arrowAnimationMd_3s_infinite] lg:block 2xl:max-h-[650px] 2xl:animate-[arrowAnimation_5s_infinite]"
                  src="/image/main_arrow_sm.webp"
                  alt="Икша Кантри Клаб"
               />
            </div>
            <m.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: {
                     delay: 2,
                  },
               }}
               className="relative mb-[15%] mt-[120px]  flex flex-col px-[40px] md:px-[90px] "
            >
               <div className="mb-[55px] flex flex-col 2xl:mb-[115px]">
                  <h1 className="text-[56px] font-extrabold uppercase leading-[60px] text-white md:text-[70px] 2xl:text-[98px] 2xl:leading-[100px]">
                     Икша <br />
                     <span className="gradient_title text-[45px] font-extrabold leading-[60px] md:text-[60px] 2xl:text-[78px] 2xl:leading-[100px]">
                        КАНТРИ КЛАБ
                     </span>
                  </h1>
                  {/* <h2 className="2xl:text-[78px] md:text-[60px] text-[45px] font-extrabold gradient_title 2xl:leading-[100px] leading-[60px]">КАНТРИ КЛАБ</h2> */}
               </div>
               <p className="mb-6 text-[30px] font-semibold text-white md:w-[400px] md:text-[38px] xl:mb-[30px] 2xl:w-[600px] 2xl:text-[48px]">
                  Ваш идеальный отдых в Подмосковье!
               </p>
               <div className="z-0">
                  <div id="znms-widget-1"></div>
               </div>
            </m.div>

            <Link
               to="/halloween"
               className="montery z-[1000] flex h-[60px] w-full items-center justify-between bg-gradient-to-t from-[#AB8E67]/[.6] to-[#4D382B]/[.6] px-5 py-3 text-[18px] font-[700] text-white backdrop-opacity-90 lg:text-[22px]"
            >
               <div>+7 (499) 505-50-31</div>
               <div className="text-[#D3AE7C]">
                  Хеллуин в Икша Кантри Клабе - Места ограничены
               </div>
               <div>Спецпредложение </div>
            </Link>
         </section>
      </div>
   );
};

export default Main;
