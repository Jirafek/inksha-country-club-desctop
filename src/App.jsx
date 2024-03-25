import messageIcon from 'icons/messageIcon.webp'
import loadable from '@loadable/component'
import Cookies from "js-cookie"
import NYLanding from 'pages/newYear/NYLanding'
import { lazy, useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { BooleanParam, useQueryParam } from "use-query-params"
import { updateURLData, useURLData } from "utils/URLData"
import Cookie from './common/Cookie'
import MainPopup from "./common/MainPopup"
import HelpPopup from './common/popups/helpPopup/HelpPopup'
import arrow from 'icons/arrow.png'
import { useTranslation, withTranslation, Trans } from 'react-i18next'
import ru_icon from 'icons/ru.webp'
import en_icon from 'icons/eng.webp'
import global from 'icons/global.webp'
import { changeLanguage } from 'utils/i18n'
import ValenLanding from 'pages/valenLanding/ValenLanding'
import ManLanding from 'pages/manLanding/ManLanding'
import MartLanding from 'pages/martLanding/MartLanding'
import ButterLanding from 'pages/butterLanding/ButterLanding'
import BirthLanding from 'pages/birthLanding/BirthLanding'

export const LanguageComponent = () => {
   const { i18n } = useTranslation()

   const toggleLanguage = () => {
      const newLanguage = i18n.language === "en" ? "ru" : "en"
      changeLanguage(newLanguage) // Use the changeLanguage function to update i18n and save to localStorage
      // window.location.reload()

   }



   return (
      <div onClick={toggleLanguage} className='cursor-pointer'>
         {/* Add logic to display the appropriate language icon */}
         {/* Example: */}
         {/* {i18n.language === 'en' ? <img className='w-[100px] h-[50px]' src={en_icon} alt="" /> : <img className='w-[100px] h-[50px]' src={ru_icon} alt='' />} */}
         <img className='w-[40px] h-[40px]' src={global} alt="" />
      </div>
   )
}

const NotFound = () => {
   useEffect(() => {

      let time = setTimeout(() => {
         window.location.href = 'https://ikshacountryclub.com'
         clearTimeout(time)
      }, 40000)
   }, [])
   return (
      <section className="relative h-screen bg-[#201E1F]">
         <div className="flex h-full w-screen flex-col items-center justify-center">
            <h1 className="text-[64px] text-white">404</h1>
            <Link
               className="border border-[#AB8E67] px-8 py-1 text-[26px] text-white duration-500 hover:bg-[#AB8E67]"
               to={"/"}
            >
               На главную
            </Link>
         </div>
      </section>
   )
}

const Home = loadable(() => import("pages/Home"))
const Keytering = loadable(() => import("pages/Keytering"))
const LocationId = loadable(() => import("pages/LocationId"))
const Korporativy = loadable(() => import("pages/Korporativy"))
const FAQ = loadable(() => import("pages/FAQ"))
const Privacy = loadable(() => import("pages/Privacy"))
const Thanks = loadable(() => import("pages/Thanks"))
const Helloween = loadable(() => import("pages/Helloween"))
const KorpLanding = loadable(() => import("pages/korpLanding/KorpLanding"))
// const NYLanding = loadable(() => import("pages/newYear/NYLanding"));

const BanLanding = loadable(() => import("./pages/banLanding/BanLanding"))
const ChillLanding = loadable(() => import("./pages/chillLanding/ChillLanding"))
const FishingLanding = loadable(() => import("./pages/fishingLanding/FishingLanding"))


const ToTheTopComponent = () => {
   return (
      <div onClick={() => { window.scrollTo(0, 0) }} className='fixed w-[72px] h-[72px] flex items-center border-[2px] border-[#58462E] justify-center bottom-[20px] bg-[#AB8E67] rounded-full cursor-pointer right-[100px] z-[10000]'>
         <img className='-rotate-90 h-[19px]' src={arrow} alt="" />
      </div>
   )
}

function App() {
   const { updateData, utm_campaign, utm_content, utm_source } = useURLData()
   const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false)
   const [timer, setTimer] = useState(false)
   const [isHelpButtonActive, setIsHelpButtonActive] = useState(false)
   const [isTimerOn, setIsTimerOn] = useState(!Cookies.get('isTimerOn'))
   const { t, i18n } = useTranslation()


   // Cookies.set('isTimerOn', '')


   if (isTimerOn) {
      useEffect(() => {
         setTimer(
            setTimeout(() => {
               setIsHelpPopupOpen(true)
               // setIsHelpButtonActive(true)
            }, 40000))
      }, [])
   }

   //бронируй онлайн попап услуг 
   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true
      const initializeWidget = () => {
         window.znmsWidget.init("#znms-service-widget-module", {
            moduleId: 5026,
            type: 'booking-services',
         })
      }
      script.onload = initializeWidget
      document.body.appendChild(script)
   }, [])





   useEffect(() => {
      // Check if the URL contains a fragment identifier
      let time = setTimeout(() => {
         clearTimeout(time)
         if (window.location.hash) {
            const welcome = document.getElementById('welcome')
            // Extract the fragment identifier (e.g., "locations")
            // const fragmentId = window.location.hash.substring(1)
            const fragmentId = window.location.hash.substring(1).split('/')[0]
            // Find the element with the corresponding ID
            const targetElement = document.getElementById(fragmentId)
            // If the element is found, scroll to it
            if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' })
            } else {
               welcome.scrollIntoView({ behavior: 'smooth' })
            }
         }
      }, 2000)
   }, [window.location.hash])



   useEffect(() => {
      setUrlParams()
   }, [])


   const setUrlParams = (isCoockieOnRight = undefined) => {

      const isCookieOn = localStorage.getItem('cookies_on')
      const urlParams = new URLSearchParams(window.location.search)

      const urlParamsData = [
         utm_source ? utm_source : urlParams.get("utm_source"),
         utm_campaign ? utm_campaign : urlParams.get("utm_campaign"),
         utm_content ? utm_content : urlParams.get("utm_content"),
      ]

      updateData(
         ...urlParamsData
      )

      if (isCoockieOnRight === undefined && isCookieOn === undefined) {
         return
      }

      if (isCoockieOnRight === false) {
         return
      }

      const cookieData = {
         utm_source: localStorage.getItem('utm_source'),
         utm_campaign: localStorage.getItem('utm_campaign'),
         utm_content: localStorage.getItem('utm_content'),
      }

      const UTMSource = urlParams.get("utm_source") ? (urlParams.get("utm_source").toLowerCase().includes('vk') ? 'vkontakte' : urlParams.get("utm_source")) : ''

      const settedData = [
         cookieData.utm_source !== undefined && cookieData.utm_source ? cookieData.utm_source : utm_source
            ? utm_source
            : UTMSource || "Сайт",

         cookieData.utm_campaign !== undefined && cookieData.utm_campaign ? cookieData.utm_campaign : utm_campaign
            ? utm_campaign
            : urlParams.get("utm_campaign") || "",

         cookieData.utm_content !== undefined && cookieData.utm_content ? cookieData.utm_content : utm_content
            ? utm_content
            : urlParams.get("utm_content") || ""
      ]


      updateData(
         ...settedData
      )

      if ((cookieData.utm_source === undefined || !cookieData.utm_source) && UTMSource !== null) {
         localStorage.setItem('utm_source', UTMSource)
      }
      if ((cookieData.utm_campaign === undefined || !cookieData.utm_campaign) && urlParams.get("utm_campaign") !== null) {
         localStorage.setItem('utm_campaign', urlParams.get("utm_campaign"))
      }
      if ((cookieData.utm_content === undefined || !cookieData.utm_content) && urlParams.get("utm_content") !== null) {
         localStorage.setItem('utm_content', urlParams.get("utm_content"))
      }
   }

   const [isPopupOpen, setIsPopupOpen] = useState(false)
   const isCookieOn = localStorage.getItem('cookies_on')
   const [isCookieOpen, setIsCookieOpen] = useState(isCookieOn === undefined ? true : isCookieOn !== 'true')
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }
   const [isKorpOpen, setIsKorpOpen] = useQueryParam("korpOpen", BooleanParam)
   const toggleKorp = () => {
      setIsKorpOpen((prev) => !prev)
   }

   const handleHelpButtonClick = () => {
      clearTimeout(timer)
      setIsHelpPopupOpen(!isHelpPopupOpen)

   }



   return (
      <div className='relative'>


         <div id="znms-service-widget-module"></div>

         <Cookie isCookieOpen={isCookieOpen} setIsCookieOpen={setIsCookieOpen} callBack={setUrlParams} />

         {isHelpPopupOpen && <HelpPopup setIsHelpButtonActive={setIsHelpButtonActive} isHelpPopupOpen={isHelpPopupOpen} setIsHelpPopupOpen={setIsHelpPopupOpen} />}

         {
            isTimerOn ? (isHelpButtonActive ? <div onClick={handleHelpButtonClick} className="fixed bottom-[20px] cursor-pointer right-[180px] z-[10000]">
               <img className='w-[72px] h-[72px]' src={messageIcon} alt="" />
            </div> : <div></div>)
               : <div onClick={handleHelpButtonClick} className="fixed bottom-[20px] cursor-pointer right-[180px] z-[10000]">
                  <img className='w-[72px] h-[72px]' src={messageIcon} alt="" />
               </div>
         }

         <ToTheTopComponent />


         {/* <LanguageComponent /> */}


         <MainPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <Korporativy toggleKorp={toggleKorp} isKorpOpen={isKorpOpen} />




         {/* routes */}
         <Routes className="relative">
            <Route
               path="/"
               element={
                  <Home togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
               }
            />
            <Route path="/keytering" element={<Keytering />} />
            <Route path="/location/:id" element={<LocationId />} />
            {/* <Route
               path="/korporativy"
               element={}
            /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/success" element={<Thanks />} />
            <Route path="/halloween" element={<Helloween />} />
            <Route path="/korp-landing" element={<KorpLanding />} />
            <Route path="/New-Year" element={<NYLanding />} />
            <Route
               path="/rules"
               element={<Privacy title={"Правила проживания"} />}
            />

            <Route path="/banya" element={<BanLanding />} />
            <Route path="/fishing" element={<FishingLanding />} />
            <Route path="/active" element={<ChillLanding />} />
            <Route path="/valentine" element={<ValenLanding />} />
            <Route path="/defender" element={<ManLanding />} />
            <Route path="/mart" element={<MartLanding />} />
            <Route path="/butter" element={<ButterLanding />} />
            <Route path="/birthday" element={<BirthLanding />} />



            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   )
}

export default App
