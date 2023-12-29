import { useState } from "react"
import add1 from "images/korpLanding/add/001.webp"
import add2 from "images/korpLanding/add/002.webp"
import add3 from "images/korpLanding/add/003.webp"
import add4 from "images/korpLanding/add/004.webp"
import add5 from "images/korpLanding/add/005.webp"
import add6 from "images/korpLanding/add/006.webp"

import Button from "common/Button"
import korpnext from "icons/next_photo.png"

import trans2 from "images/korpLanding/trans2.png"

import arrow from "icons/arrow.png"
import Lightbox from "common/Lightbox"
import { useTranslation } from 'react-i18next'

const getTabs = () => {
   const { t } = useTranslation()

   const tabs = [
      { label: t("tab1Label"), img: add1 },
      { label: t("tab2Label"), img: add2 },
      { label: t("tab3Label"), img: add3 },
      { label: t("tab4Label"), img: add4 },
      { label: t("tab5Label"), img: add5 },
      { label: t("tab6Label"), img: add6 },
   ]

   return tabs
}

const Add = () => {
   const { t } = useTranslation()
   const tabs = getTabs()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [activeTab, setActiveTab] = useState(0)

   const handleTabClick = (index) => {
      setActiveTab(index)
   }

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const switchSlide = () => {
      if (activeTab === 5) setActiveTab(-1)
      setActiveTab((prev) => prev + 1)
   }

   return (
      <div id="add" className="relative bg-korpPrimary pb-[13vh] w-full">
         {isMenuOpen && <Lightbox toggleMenu={toggleMenu} items={tabs} />}

         <img
            src={trans2}
            alt=""
            className="absolute w-full -top-[2.5vh] sm:-top-[3.5vh] md:-top-[5vh] 900p:-top-[55px] lg:-top-[65px] xl:-top-[80px] 2xl:-top-[95px]   "
         />
         <div className="wrapper relative pt-[10%]">
            <div className="mb-[10vh]">
               <h1 className="mb-[5vh] text-center text-lg text-white">
                  {t("additionalServices")}
               </h1>

               <div className="relative">
                  <div className="flex flex-col-reverse md:flex-row  gap-10">
                     <div className="tabs flex w-full md:max-w-[400px] flex-col gap-5  text-slate-600">
                        {tabs.map((tab, index) => (
                           <div
                              key={index}
                              className={`${index === activeTab
                                 ? "text-white border border-white rounded-[30px] p-2 border-opacity-50"
                                 : ""
                                 } cursor-pointer text-md font-semibold text-center  md:text-start`}
                              onClick={() => handleTabClick(index)}
                           >
                              {tab.label}
                           </div>
                        ))}
                     </div>
                     <div className="tab-content relative">
                        <img
                           onClick={toggleMenu}
                           className="cursor-pointer object-contain"
                           src={tabs[activeTab].img}
                           alt=""
                        />
                        <button
                           onClick={switchSlide}
                           className="absolute right-0 md:-right-10 w-[60px] md:w-auto transform top-1/2 -translate-y-1/2 text-white "
                        >
                           <img src={korpnext} alt="" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <h2 className="text-md text-white">
               {t("optionalServiceAgreement")}
            </h2>
            <Button className="h-[40px] md:h-[60px] montserrat z-[100] min-w-[200px] sm:w-[600px] gap-5 bg-brown text-white">
               {t("getCost")}
               <img src={arrow} alt="" />
            </Button>
         </div>
         <img
            src={trans2}
            className="absolute -bottom-[2%] md:-bottom-[4%] 900p:-bottom-[55px] lg:-bottom-[65px] xl:-bottom-[80px] 2xl:-bottom-[95px] object-contain w-full "
         />
      </div>
   )
}

export default Add
