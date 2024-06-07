import { domAnimation, LazyMotion } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import App from "./App"
import "./fonts.css"
import "./fonts/Lato-Regular.ttf"
import "./fonts/MontserratAlternates-Regular.ttf"
import "./index.css"
import { useURLData } from 'utils/URLData'
import { addUser, fetchData } from '../firebase.js'

import './utils/i18n.js'
import { useTranslation } from 'react-i18next'

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
         <LazyMotion features={domAnimation} strict>
            <Suspense
               fallback={
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                     {" "}
                     <img
                        loading='lazy'
                        src="/image/download.gif"
                        alt="Изображение анимации загрузки"
                     />{" "}
                  </div>
               }
            >
               <AppWithDelay />
            </Suspense>
         </LazyMotion>
      </QueryParamProvider>
   </BrowserRouter>
)

function AppWithDelay() {
   const { t } = useTranslation()
   // console.log(window.location)
   // console.log(window.location.search)
   // console.log(window.location.search.includes('?korpOpen=1'))

   const { updatePhoneContent, setClienId } = useURLData()
   const groupID = -1002014846298

   useEffect(() => {
      if (window.globalClientId) {
         addUser(window.globalClientId).then()
         setClienId(window.globalClientId)
      }

      fetchData(groupID, updatePhoneContent)
   }, [updatePhoneContent, setClienId])


   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   const handleResize = () => {
      setWindowWidth(window.innerWidth)
   }

   useEffect(() => {
      // Установка лиснера при монтировании
      window.addEventListener("resize", handleResize)

      // Удаление лиснера при размонтировании
      return () => {
         window.removeEventListener("resize", handleResize)
      }
   }, [])



   // if (windowWidth < 768) {

   //    const url = new URL(window.location.href)
   //    const queryParams = url.searchParams

   //    const queryString = queryParams.toString()



   //    switch (true) {

   //       case window.location.pathname.includes('/location'):
   //          window.location.href = "https://mobile.ikshacountryclub.com/locations-about" + '/?' + queryString
   //          break

   //       case window.location.search.includes('?korpOpen=1'):

   //          window.location.href = "https://mobile.ikshacountryclub.com/korp" + '/?' + queryString
   //          break

   //       default:
   //          window.location.href = `https://mobile.ikshacountryclub.com` + window.location.hash + (window.location.pathname === '/' ? '' : window.location.pathname) + '/?' + queryString
   //          break
   //    }


   //    // window.location.href = `http://localhost:5173` + window.location.hash + (window.location.pathname === '/' ? '' : window.location.pathname) + '/?' + queryString
   //    window.location.href = `https://mobile.ikshacountryclub.com` + window.location.hash + (window.location.pathname === '/' ? '' : window.location.pathname) + '/?' + queryString
   // }
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false)
      }, 3000)
   }, [])

   return isLoading ? (
      <div className="absolute flex flex-col gap-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
         {" "}
         <p className="text-center text-[22px] font-bold">{t('common.loading')}</p>{" "}
         <img
            loading='lazy'
            className="rounded-[15px]"
            src="/image/download.gif"
            alt="Изображение анимации загрузки"
         />{" "}
      </div>
   ) : (
      <App />
   )
}
