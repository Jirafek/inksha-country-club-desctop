import { m } from "framer-motion"
import nyLogo from 'icons/ny-logo.webp'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useURLData } from "utils/URLData"
import { isItWinterNow } from "utils/helpers"
import Header from "./Header"
import { useTranslation, Trans } from 'react-i18next'
import bgWinAvif from 'images/welcome_bg_winter.webp'




const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

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
}

const Main = () => {

   const { utm_source } = useURLData()
   const { t, i18n } = useTranslation()



   const toggleLanguage = () => {
      if (i18n.language === 'en') {

         i18n.changeLanguage('ru')
      } else {
         i18n.changeLanguage('en')

      }
   }

   useEffect(() => {

      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

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
         })

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
               border-radius:22px !important;
               border: 1px solid #AB8E67 !important;
               background-color: #4D382B !important;
               min-width:180px !important;
            }
            .znms-widget__horizontal-form-submit {
                // margin-top: 0 !important;
            }
            .znms-widget__widget-btn.znms-widget__v-color4 {
               background-color: #AB8E67 !important;
               border:2px solid #75624a !important;
            }
            .nms-widget__module-form-block__items--booking-service-link {
                display: none !important;
            }
          `
         const styleElement = document.createElement("style")
         const DarkButton = document.querySelector('.znms-widget__module-form-block__btn.znms-widget__v-color8')
         styleElement.innerHTML = customStyles
         document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget
      document.body.appendChild(script)

      const clear = (inter) => {
         clearInterval(inter)
      }

      //пизда)))

      const interval = setInterval(() => {
         try {

            const element = document.querySelector('.znms-widget__module-form-block__title')
            const ww = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer.znms-widget__input-people-counter-horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__item--lg > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__select")
            const button = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > button")
            const guests = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer.znms-widget__input-people-counter-horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__item--lg > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__label")
            const checkIn = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__input-calendar-range.znms-widget__input-calendar-range--horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__items__item--first.znms-widget__form_inp-wrapper.znms-widget__form_inp-wrapper--vertical.znms-widget__datepicker > span:nth-child(1) > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__label")
            const choose1 = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__input-calendar-range.znms-widget__input-calendar-range--horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__items__item--first.znms-widget__form_inp-wrapper.znms-widget__form_inp-wrapper--vertical.znms-widget__datepicker > span.znms-widget__brononline-calendar.znms-widget__brononline-calendar--horizontal.znms-widget__brononline-calendar--horizontal--right.znms-widget__brononline-calendar--horizontal--static.znms-widget__validating--invalid > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__input.znms-widget__module-form-block__input--fake.znms-widget__module-form-block__input--fake--empty.znms-widget__module-form-block__input--pointer")
            const choose2 = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__input-calendar-range.znms-widget__input-calendar-range--horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__items__item--first.znms-widget__form_inp-wrapper.znms-widget__form_inp-wrapper--vertical.znms-widget__datepicker > span:nth-child(1) > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__input.znms-widget__module-form-block__input--fake.znms-widget__module-form-block__input--fake--empty.znms-widget__module-form-block__input--pointer")
            const checkOut = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__items--input-container > div.znms-widget__input-calendar-range.znms-widget__input-calendar-range--horizontal.znms-widget__module-form-block__items__item.znms-widget__module-form-block__items__item--first.znms-widget__form_inp-wrapper.znms-widget__form_inp-wrapper--vertical.znms-widget__datepicker > span.znms-widget__brononline-calendar.znms-widget__brononline-calendar--horizontal.znms-widget__brononline-calendar--horizontal--right.znms-widget__brononline-calendar--horizontal--static.znms-widget__validating--invalid > div.znms-widget__module-form-block__item.znms-widget__module-form-block__item--pointer > div.znms-widget__module-form-block__left > div.znms-widget__module-form-block__label")
            // const service = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__title.znms-widget__module-form-block__items__item.znms-widget__module-form-block__title--inline > a")
            const main = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items > div.znms-widget__module-form-block__title.znms-widget__module-form-block__items__item.znms-widget__module-form-block__title--inline")
            const mainSmaller = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__title.znms-widget__module-form-block__items__item.znms-widget__module-form-block__title--block")
            const serviceSmaller = document.querySelector("#main > section > div.relative.mb-\\[15\\%\\].mt-\\[120px\\].flex.flex-col.px-\\[40px\\].md\\:px-\\[90px\\] > div.z-0 > div > div:nth-child(1) > div > div > div > div.znms-widget__module-form-block__items--links-container > a")
            main.textContent = ''

            mainSmaller.textContent = t('bronirui.main')
            serviceSmaller.textContent = t('bronirui.service')

            const mmm = document.createElement('div')
            mmm.innerHTML = `${t('bronirui.Bronirovanie')} <br/> ${t('bronirui.Nomerov')}`
            // Add some styling to the div to ensure the line break is visible
            mmm.style.whiteSpace = 'normal'
            main.appendChild(mmm)

            // service.textContent = t('bronirui.service')
            guests.textContent = t('bronirui.guests')
            checkIn.textContent = t('bronirui.checkIn')
            checkOut.textContent = t('bronirui.checkOut')
            choose1.textContent = t('bronirui.choose')
            choose2.textContent = t('bronirui.choose')
            button.textContent = t('bronirui.btn')

            ww.textContent = 2 + '' + t('bronirui.adult')

         } catch (error) {
            // console.log('Произошла ошибка:', error)
         }


      }, 4000)





   }, [])

   const pumpkin_vars = {
      initial: {
         // y: "5px", // Начальная позиция за пределами экрана справа
         scale: 0.85,
      },
      animate: {
         // y: "-10px", // Конечная позиция за пределами экрана слева
         scale: 1,
      },
   }

   return (
      <div id='main' className='relative'>
         {/* <div className='fixed top-5 right-5 text-white font-bold rounded-full bg-slate-300 px-4 cursor-pointer z-[10000] text-md' onClick={toggleLanguage}>{i18n.language}</div> */}
         <Link to="/New-Year" className="absolute right-10 top-20 z-[1000]">
            <m.img
               transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  repeatDelay: 0.6,
               }}
               initial="initial"
               animate="animate"
               variants={pumpkin_vars}
               src={nyLogo}
               className="z-[10000000] h-[150px] w-[150px] rounded-full   bg-center object-cover shadow-xl"
               alt=""
            />
         </Link>
         <section
            style={{
               backgroundImage: `url(${isItWinterNow() ? bgWinAvif : '/image/welcome_bg.webp'})`,
               backgroundPosition: "right",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
            className="relative w-full"
         >
            <Header />

            <div className="absolute h-full left-0 top-0 flex items-center">
               <img
                  className="hidden lg:h-full lg:block"
                  src="/image/main_arrow_big.webp"
                  alt={t('imgAltText')}
               />

               <div className="absolute h-full left-0 top-0 block  w-screen bg-black opacity-70 duration-300 lg:hidden"></div>

               <img
                  className="-ml-[300px] hidden max-h-[750px] animate-[arrowAnimationMd_3s_infinite] lg:block 2xl:max-h-[790px] 2xl:animate-[arrowAnimation_5s_infinite]"
                  src="/image/main_arrow_md.webp"
                  alt={t('imgAltText')}
               />

               <img
                  className="-ml-[300px] hidden max-h-[620px] animate-[arrowAnimationMd_3s_infinite] lg:block 2xl:max-h-[650px] 2xl:animate-[arrowAnimation_5s_infinite]"
                  src="/image/main_arrow_sm.webp"
                  alt={t('imgAltText')}
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
                     {t('iksha')} <br />
                     <span className="gradient_title text-[45px] font-extrabold leading-[60px] md:text-[60px] 2xl:text-[78px] 2xl:leading-[100px]">
                        {t('CB')}
                     </span>
                  </h1>
               </div>
               <p className="mb-6 text-[30px] tracking-wider font-semibold text-white md:w-[400px] md:text-[38px] xl:mb-[30px] 2xl:w-[600px] 2xl:text-[48px]">
                  <span className='whitespace-nowrap'>{t('outdoorRecreation')}</span> {t('inTheMoscowRegion')}
               </p>
               <div className="z-0">
                  <div id="znms-widget-1"></div>
               </div>
            </m.div>

            <Link
               to="/new-year"
               className="montery z-[1000] flex h-[60px] w-full items-center justify-between bg-gradient-to-t from-[#AB8E67]/[.6] to-[#4D382B]/[.6] px-5 py-3 text-[18px] font-[700] text-white backdrop-opacity-90 lg:text-[22px]"
            >
               {
                  utm_source === 'yandex' ?
                     <div>{t('call')} +7(499) 505-50-67</div>
                     : utm_source === 'vkontakte' ?
                        <div>{t('call')} +7(499) 505-50-87</div>
                        :
                        <div>{t('call')} +7(499) 505-50-31</div>
               }
               <div className="text-[#D3AE7C]">
                  {t('newYearAtIksha')}-{t('limitedSpots')}
               </div>
               <div>{t('specialOffer')}</div>
            </Link>
         </section>
      </div>
   )
}

export default Main
