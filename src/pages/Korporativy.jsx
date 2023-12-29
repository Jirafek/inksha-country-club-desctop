import React, { useRef, useState } from "react"
import { v4 as uuid4 } from "uuid"
import { useForm, Controller } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { Link, useNavigate, Navigate } from "react-router-dom"
import LocationArrow from "../components/icons/LocationArrow"
import InputMask from "react-input-mask"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import close from "./../assets/close.png"
import { m } from "framer-motion"
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const OpenBottom = {
   hidden: {
      opacity: 0,
      transform: "translateY(500px)",
   },
   visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
         ease: "easeOut",
         duration: 2.5,
      },
   },
}

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
}

const getKorpData = () => {
   const { t } = useTranslation()

   const korpData = [
      {
         title: t('korp.bania'),
         name: "bania",
      },
      {
         title: t('korp.besedka'),
         name: "besedka",
      },
      {
         title: t('korp.territory'),
         name: "territory",
      },
      {
         title: t('korp.voley'),
         name: "voley",
      },
      {
         title: t('korp.active'),
         name: "active",
      },
      {
         title: t('korp.sap'),
         name: "sap",
      },
      {
         title: t('korp.riba'),
         name: "riba",
      },
      {
         title: t('korp.shoosh'),
         name: "shoosh",
      },
      {
         title: t('korp.keyt'),
         name: "keyt",
      },
      {
         title: t('korp.karaoke'),
         name: "karaoke",
      },
      {
         title: t('korp.squer'),
         name: "squer",
      },
      {
         title: t('korp.dogovor'),
         name: "dogovor",
      },
   ]
   return korpData
}


const images = [
   {
      imgAvif: "/image/korp1.avif",
      imgWebp: "/image/korp1.webp",
   },
   {
      imgAvif: "/image/korp2.avif",
      imgWebp: "/image/korp2.webp",
   },
   {
      imgAvif: "/image/korp3.avif",
      imgWebp: "/image/korp3.webp",
   },
   {
      imgAvif: "/image/korp4.avif",
      imgWebp: "/image/korp4.webp",
   },
   {
      imgAvif: "/image/korp5.avif",
      imgWebp: "/image/korp5.webp",
   },
   {
      imgAvif: "/image/korp6.avif",
      imgWebp: "/image/korp6.webp",
   },
]

const Korporativy = ({ isKorpOpen, toggleKorp }) => {
   const korpData = getKorpData()
   const { t } = useTranslation()
   const navigate = useNavigate()
   const goBack = () => {
      navigate(-1)
   }

   const [peopleState, setPeopleState] = useState(10)
   const [isImageOpen, setIsImageOpen] = useState(false)

   const handleImageClick = () => {
      setIsImageOpen(true)
   }

   const handleBackdropClick = () => {
      setIsImageOpen(false)
   }

   const handleInputChange = (e) => {
      let value = e.target.value

      try {
         const val = Number(value)
         if (val > 50 || val < 0) return
         setPeopleState(val)
      } catch (err) {
         return
      }
   }

   const sliderRef = useRef(null)

   const onNextClick = () => {
      sliderRef.current.slickNext()
   }

   const handleDownload = (url) => {
      window.open(url, "_blank")
   }

   const settings = {
      dots: false,
      arrows: true,
      draggable: false,
      swipe: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
   }

   const settingsBig = {
      dots: false,
      arrows: false,
      draggable: false,
      swipe: false,
      autoplay: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
   }

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm()
   const [navigation, setNavigation] = useState(false)

   const onSubmit = (dataFromForm) => {
      for (var key in dataFromForm) {
         if (dataFromForm[key] === true) {
            const title = korpData.find((item) => item.name === key.toString())
            dataFromForm[key] = title.title + ", "
         } else if (dataFromForm[key] === false) {
            dataFromForm[key] = ""
         }
      }

      dataFromForm.people = peopleState

      const email = {
         email: "-",
      }
      const data = Object.assign({}, dataFromForm, email)

      emailjs
         .send("service_a1dan7b", "template_rmhn4mc", data, "V_IkuqWqNwJlUw72K")
         .then(
            (result) => {
               // onNextClick();
               setNavigation(true)
            },
            (error) => {
               alert("Ошибка при отправке формы")
            }
         ) // sending to email
   }

   return (
      <>
         {isKorpOpen && (
            <div className="korpo_wrapp  fixed bottom-0 left-1/2 z-[100] h-[90vh] w-[99%] -translate-x-1/2 transform overflow-y-scroll rounded-[20px] border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
               <Helmet>
                  <title>
                     {t('korp.title')}
                  </title>
                  <meta
                     name="description"
                     content={t('korp.description')}
                  />
                  <meta
                     name="title"
                     content={t('korp.metaTitle')}
                  />
                  <meta
                     name="keywords"
                     content={t('korp.keywords')}
                  />
               </Helmet>
               <section className="relative min-h-screen w-full bg-[#201E1F]">
                  {navigation && <Navigate to="/thanks" />}
                  <button
                     onClick={toggleKorp}
                     className="absolute right-7 top-7 z-10 hidden w-[40px] rotate-180 duration-300  sm:block"
                  >
                     {/* <LocationArrow /> */}
                     <img className="h-9 w-9 object-cover" src={close} alt="" />
                  </button>
                  <m.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={heading}
                     className="pt-3"
                  >
                     <m.div variants={OpenLeft} className="flex justify-center">
                        <h1 className="gradient_title mb-7 text-[20px] font-extrabold sm:mb-12 sm:text-[32px] md:text-[42px] xl:text-[68px]">
                           {t('korp.heading')}
                        </h1>
                     </m.div>
                     {isImageOpen && (
                        <div
                           className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70"
                           onClick={handleBackdropClick}
                        >
                           <img
                              src="/image/doca.png"
                              alt="Икша Кантри Клаб"
                              className="max-h-[90vh] rounded-3xl"
                           />
                        </div>
                     )}
                     <m.form
                        variants={OpenBottom}
                        onSubmit={handleSubmit(onSubmit)}
                     >
                        <Slider ref={sliderRef} {...settingsBig}>
                           <div className="slick-slider-flex flex flex-col items-center justify-center gap-11 xl:flex-row">
                              <div className="flex flex-col items-center gap-[30px] xl:items-start">
                                 <div className="flex flex-col gap-2">
                                    <div className="flex h-[80px] w-[380px] items-center gap-1 rounded-xl border-[3px] border-[#AB8E67] bg-[#604E3A] pl-8 text-white sm:w-[400px]">
                                       <p className="text-[26px] font-semibold">
                                          {t('korp.people')}
                                       </p>
                                       <input
                                          onChange={handleInputChange}
                                          className="h-[50px] w-[50px] border-none bg-transparent text-[32px] outline-none"
                                          value={peopleState}
                                          type="number"
                                       />
                                    </div>
                                    <div className="h-[80px] w-[380px] rounded-xl border-[3px] border-[#AB8E67] bg-[#604E3A] text-white sm:w-[400px]">
                                       <label className="flex h-full items-center justify-between gap-1 pl-8 pr-4">
                                          <p className="text-[26px] font-semibold">
                                             {t('korp.overnight')}
                                          </p>
                                          <input
                                             className="h-[15px] w-[15px] rounded-lg border border-[#4D382B] bg-[#AB8E67] sm:h-[20px] sm:w-[20px] 3xl:h-[30px] 3xl:w-[30px]"
                                             {...register("night")}
                                             type="checkbox"
                                             name=""
                                             id=""
                                          />
                                       </label>
                                    </div>
                                 </div>
                                 <div className="relative flex w-[380px] flex-col items-center rounded-[10px] border-[2px] border-[#AB8E67] bg-[rgba(117,_98,_74,_0.50)] px-11 py-8 sm:w-[550px] 3xl:w-[800px]">
                                    <h4 className="mb-14 text-center text-[18px] font-semibold text-white sm:text-[22px] 3xl:text-[32px]">
                                       {t('korp.services')}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-8">
                                       {korpData.map((el, i) => (
                                          <label
                                             key={uuid4()}
                                             className="flex items-center gap-2"
                                          >
                                             <div className="relative h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] 3xl:h-[30px] 3xl:w-[30px]">
                                                <input
                                                   className="h-[15px] w-[15px] rounded-lg border border-[#4D382B] bg-[#AB8E67] sm:h-[20px] sm:w-[20px] 3xl:h-[30px] 3xl:w-[30px]"
                                                   type="checkbox"
                                                   name="korp"
                                                   {...register(el.name)}
                                                />
                                             </div>
                                             <p className="font-medium text-white sm:text-[18px] 3xl:text-[28px]">
                                                {el.title}
                                             </p>
                                          </label>
                                       ))}
                                    </div>
                                    <button
                                       onClick={onNextClick}
                                       type="button"
                                       className=" mt-2 rounded-[20px] border-[5px] border-[#4D382B] bg-[#AB8E67] px-12 py-2 text-[22px] font-semibold text-white sm:px-20 sm:py-3 3xl:text-[32px]"
                                    >
                                       {t('korp.cost')}
                                    </button>
                                 </div>

                                 <Link
                                    to="/korp-landing"
                                    className="z-10 cursor-pointer pb-5 leading-4 tracking-widest text-white underline"
                                 >
                                    {t('korp.learnMore')}
                                 </Link>
                              </div>
                              <div className="flex flex-col items-center gap-8 pb-10 xl:pb-0">
                                 <div className="flex w-full justify-between gap-1">
                                    <button
                                       type="button"
                                       onClick={handleImageClick}
                                    >
                                       <img
                                          className="w-[200px] rounded-[15px] 3xl:w-[300px]"
                                          src="/image/doca.png"
                                          alt="Икша Кантри Клаб"
                                       />
                                    </button>
                                    <button
                                       type="button"
                                       onClick={() =>
                                          handleDownload("/pdf/keyt.pdf")
                                       }
                                    >
                                       <img
                                          className="w-[200px] rounded-[15px] 3xl:w-[300px]"
                                          src="/image/menu_list.jpg"
                                          alt="Меню в Икша Кантри Клаб"
                                       />
                                    </button>
                                 </div>
                                 <Slider
                                    className="h-[240px] w-[360px] rounded-[15px] border-[2px] border-b-0 border-[#AB8E67] p-1 sm:h-[325px] sm:w-[500px] 3xl:h-[460px] 3xl:w-[700px]"
                                    {...settings}
                                 >
                                    {images.map(({ imgAvif, imgWebp }, i) => (
                                       <div key={uuid4()}>
                                          {/*<picture>*/}
                                          {/*    <source srcSet={`${imgAvif} 1x`} type="image/avif" />*/}
                                          {/*    <img className="rounded-[15px]" src={imgWebp} alt="Икша Кантри Клаб" />*/}
                                          {/*</picture>*/}
                                          <img
                                             className="rounded-[15px]"
                                             src={imgWebp}
                                             alt="Икша Кантри Клаб"
                                          />
                                       </div>
                                    ))}
                                 </Slider>
                              </div>
                           </div>{" "}
                           <div className="flex h-full items-center justify-center">
                              <div className="flex h-[420px] w-[380px] flex-col items-center rounded-[40px] border-[2px] border-[#AB8E67] bg-[#75624A] px-[50px] py-9 sm:h-[500px] sm:w-[500px] lg:h-[760px] lg:w-[770px] lg:px-[90px]">
                                 <p className="mb-8 text-center text-[18px] font-semibold text-white sm:text-[22px] lg:mb-16 lg:text-[32px]">
                                    {t('korp.leaveUrData')}
                                 </p>
                                 <input
                                    placeholder="Имя"
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="mb-[30px] w-full rounded-xl bg-[#604E3A] py-2 pl-[20px] text-[20px] text-white sm:pl-[40px] sm:text-[28px] lg:h-[88px] lg:rounded-[20px] lg:py-0 lg:text-[36px]"
                                 />
                                 {/* <input
                                    placeholder="Телефон"
                                    {...register("phone", { required: true })}
                                    type="text"
                                    className="mb-8 w-full rounded-xl bg-[#604E3A] py-2 pl-[20px] text-[20px] text-white sm:pl-[40px] sm:text-[28px] lg:mb-16 lg:h-[88px] lg:rounded-[20px] lg:py-0 lg:text-[36px]"
                                 /> */}
                                 <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                       <InputMask
                                          mask="+7 (999) 999-99-99"
                                          value={field.value}
                                          onChange={(e) =>
                                             field.onChange(e.target.value)
                                          }
                                       >
                                          {(inputProps) => (
                                             <input
                                                type="text"
                                                placeholder={t('common.name')}
                                                className={`mb-8 w-full rounded-xl bg-[#604E3A] py-2 pl-[20px] text-[20px] text-white sm:pl-[40px] sm:text-[28px] lg:mb-16 lg:h-[88px] lg:rounded-[20px] lg:py-0 lg:text-[36px]`}
                                                {...inputProps}
                                             />
                                          )}
                                       </InputMask>
                                    )}
                                 />

                                 <button
                                    type="submit"
                                    className="mb-[100px] rounded-[20px] border-[4px] border-[#AB8E67] bg-[rgb(171,_142,_103)] px-[30px] py-[15px] text-[18px] font-medium text-white sm:text-[22px] lg:rounded-[30px] lg:py-[25px] lg:text-[32px]"
                                 >
                                    {t('korp.leaveZajavka')}
                                 </button>
                              </div>
                           </div>
                        </Slider>
                     </m.form>
                  </m.div>
               </section>
            </div>
         )}
      </>
   )
}

export default Korporativy
