import React, { useEffect } from "react";
import Header from './Header';

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
                        bottom: '0px',
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
                        bottom: '50px',
                        left: '50px',
                        right: '50px',
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
                margin-top: 0 !important;
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
        <section style={{ backgroundImage: 'url(/image/bg1_right.png)', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }} className="h-screen relative w-full">
            <Header />
            <div className="absolute left-0 top-0 flex items-center">
                <img className="h-screen lg:block hidden" src="/image/main_arrow_big.png" alt="" />
                <div className="w-screen h-screen bg-black opacity-70 duration-300 absolute top-0 left-0 lg:hidden block"></div>
                <img className="2xl:h-full lg:block hidden h-[750px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_md.png" alt="" />
                <img className="2xl:h-full lg:block hidden h-[620px] -ml-[300px] 2xl:animate-[arrowAnimation_5s_infinite] animate-[arrowAnimationMd_3s_infinite]" src="/image/main_arrow_sm.png" alt="" />
            </div>
            <div className="md:px-[90px] px-[40px] flex flex-col mt-[150px] relative">
                <div className="flex flex-col 2xl:mb-[115px] mb-[55px]">
                    <h1 className="uppercase text-white 2xl:text-[98px] md:text-[70px] text-[56px] font-extrabold 2xl:leading-[100px] leading-[60px]">Икша</h1>
                    <h2 className="2xl:text-[78px] md:text-[60px] text-[45px] font-extrabold gradient_title 2xl:leading-[100px] leading-[60px]">КАНТРИ КЛАБ</h2>
                </div>
                <p className="2xl:w-[600px] md:w-[400px] 2xl:text-[48px] md:text-[38px] text-[30px] lg:mb-0 mb-6 text-white font-semibold">
                    Ваш идеальный отдых в подмосковье!
                </p>
                <img className="mt-[70px] widget1:mb-[120px] lg:block hidden mb-[20px] w-[590px]" src="/image/palka_pending.png" alt="" />
                <div id="znms-widget-1"></div>
                {/* <button className="rounded-[15px] border-[2px] border-[#4D382B] bg-[#AB8E67] py-[18px] flex justify-center items-center w-[420px]">
                    <p className="text-[32px] text-white font-semibold">Забронировать</p>
                </button> */}
            </div>
        </section>
    )
}

export default Main;
