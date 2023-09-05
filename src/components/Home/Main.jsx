import React, { useEffect } from "react";
import Header from './Header';
import { m } from "framer-motion";

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
        clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 0.8,
        },
    },
};

const Main = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//widget.bronirui-online.ru/js/app.js';
        script.async = true;

        const initializeWidget = () => {
            window.znmsWidget.init('#znms-widget-1', {
                moduleId: 5026,
                index: 0,
                widget: {
                    position: {
                        bottom: '200px',
                    },
                    mobile: {
                        absolute: false, // Абсолютное позиционирование в мобильной версии при виде отображения "У шапки сайта"
                        color: undefined, // HEX-код цвета виджета в мобильной версии
                        position: {
                            top: '100px',
                        },
                    },
                },
                // Настройки позиции плавающей кнопки
                button: {
                    position: {
                        bottom: '20px',
                        left: '100px',
                        right: '20px',
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
            const styleElement = document.createElement('style');
            styleElement.innerHTML = customStyles;
            document.head.appendChild(styleElement);
        };
        script.onload = initializeWidget;
        document.body.appendChild(script);
    }, []);
    return (
        <section style={{ backgroundImage: 'url(/image/bg1_right.webp)', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }} className="h-screen relative w-full overflow-hidden">
            <Header />
            <div className="absolute left-0 top-0 flex items-center">
                <img className="h-screen lg:block hidden" src="/image/main_arrow_big.webp" alt="" />
                <div className="w-screen h-screen bg-black opacity-70 duration-300 absolute top-0 left-0 lg:hidden block"></div>
                <img className="2xl:max-h-[790px] lg:block hidden max-h-[750px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_md.webp" alt="" />
                <img className="2xl:max-h-[650px] lg:block hidden max-h-[620px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_sm.webp" alt="" />
            </div>
            <m.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                    },
                }}
                className="md:px-[90px] px-[40px] flex flex-col lg:mt-[150px] mt-[50px] relative">
                <div className="flex flex-col 2xl:mb-[115px] mb-[55px]">
                    <h1 className="uppercase text-white 2xl:text-[98px] md:text-[70px] text-[56px] font-extrabold 2xl:leading-[100px] leading-[60px]">
                        Икша <br />
                        <span className="2xl:text-[78px] md:text-[60px] text-[45px] font-extrabold gradient_title 2xl:leading-[100px] leading-[60px]">КАНТРИ КЛАБ</span>
                    </h1>
                    {/* <h2 className="2xl:text-[78px] md:text-[60px] text-[45px] font-extrabold gradient_title 2xl:leading-[100px] leading-[60px]">КАНТРИ КЛАБ</h2> */}
                </div>
                <p className="2xl:w-[600px] md:w-[400px] 2xl:text-[48px] md:text-[38px] text-[30px] xl:mb-[30px] mb-6 text-white font-semibold">
                    Ваш идеальный отдых в подмосковье!
                </p>
                <div className="z-0">
                    <div id="znms-widget-1"></div>
                </div>
            </m.div>
        </section>
    )
}

export default Main;
