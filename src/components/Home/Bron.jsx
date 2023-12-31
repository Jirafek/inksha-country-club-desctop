import { m } from "framer-motion"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useURLData } from "utils/URLData"
import { v4 as uuid4 } from "uuid"
import Title from "../Title"
import MainPopup from "./../../common/MainPopup"

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
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

const Bron = () => {
   const { utm_source, phoneContent } = useURLData()
   const matchingPhone = phoneContent.find(item => item.utm === utm_source)
   const phoneNumber = matchingPhone ? '+' + matchingPhone.phone : '+74995055031'
   const { t } = useTranslation()


   const bronData = [
      {
         imgAvif: "/image/wa_bl.avif",
         imgWebp: "/image/wa_bl.webp",
         imgAltText: t("bron.call"),
         text: phoneNumber,
         link: phoneNumber,
      },
      {
         imgAvif: "/image/tg_bl.avif",
         imgWebp: "/image/tg_bl.webp",
         imgAltText: t("bron.telegram"),
         text: "@ikshacountryclub",
         link: "https://t.me/ikshacountryclub",
      },
      {
         imgAvif: "/image/inst_bl.avif",
         imgWebp: "/image/inst_bl.webp",
         imgAltText: t("bron.photo"),
         text: "@ikshacountryclub",
         link: "https://instagram.com/ikshacountryclub",
      },
      {
         imgAvif: "/image/vk_bl.avif",
         imgWebp: "/image/vk_bl.webp",
         imgAltText: t("bron.VK"),
         text: "@ikshacountryclub",
         link: "https://vk.com/ikshacountryclub",
      },
      {
         imgAvif: "/image/mail_bl.avif",
         imgWebp: "/image/mail_bl.webp",
         imgAltText: t("bron.sendEmail"),
         text: "contact@ikshacountryclub.com",
         link: "mailto:contact@ikshacountryclub.com",
      },
   ]

   const [isPopupOpen, setIsPopupOpen] = useState(false)

   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }

   return (
      <section id="contacts" className="relative min-h-screen w-full bg-[#201E1F]">
         <MainPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <Title text={t("bron.booking")} />
         <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heading}
            className="flex flex-col justify-between xl:flex-row"
         >
            <m.div
               variants={OpenLeft}
               className="z-10 flex flex-col pl-[40px] pt-[90px] sm:pt-[140px] xl:pl-[70px]"
            >
               <h2 className="text-[35px] font-extrabold text-[#AB8E67] sm:text-[42px] 2xl:text-[68px]">
                  {t("bron.booking")}
               </h2>
               <p className="mb-5 w-[350px] font-medium text-white sm:w-[450px] sm:text-[18px] 2xl:w-[700px] 2xl:text-[32px]">
                  {t("bron.relaxAndMemorable")}
                  <span className="text-[#AB8E67]">{t("bron.threeSimpleSteps")}</span>
               </p>
               <div className="flex items-center gap-4 text-[#AB8E67] sm:gap-11">
                  <p className="text-[42px] font-extrabold text-[#75624A] sm:text-[55px] 2xl:text-[78px]">
                     01
                  </p>
                  <div
                     onClick={togglePopup}
                     className="cursor-pointer text-[24px] font-extrabold underline sm:text-[28px] 2xl:text-[38px]"
                  >
                     {t("bron.fillForm")}
                  </div>
               </div>
               <div className="my-9 flex items-center gap-4 text-[#AB8E67] sm:gap-11">
                  <p className="text-[42px] font-extrabold text-[#75624A] sm:text-[55px] 2xl:text-[78px]">
                     02
                  </p>
                  <p className="text-[24px] font-extrabold sm:text-[28px] 2xl:text-[38px]">
                     {t("bron.checkEmail")}
                  </p>
               </div>
               <div className="flex items-center gap-4 text-[#AB8E67] sm:gap-11">
                  <p className="text-[42px] font-extrabold text-[#75624A] sm:text-[55px] 2xl:text-[78px]">
                     03
                  </p>
                  <p className="text-[24px] font-extrabold sm:text-[28px] 2xl:text-[38px]">
                     {t("bron.comeAndRelax")}
                  </p>
               </div>
            </m.div>
            <m.div
               initial={{ opacity: 0 }}
               animate={{
                  opacity: 1,
                  transition: {
                     delay: 2,
                     duration: 1,
                  },
               }}
               className="z-10 mb-5 ml-[10px] mr-6 mt-[25px] flex w-[375px] flex-col gap-2 rounded-[15px] border border-[#AB8E67] bg-[#221C1C] py-5 pl-8 sm:w-[600px] xl:mb-0 xl:ml-0 xl:mt-0 xl:self-end 2xl:gap-4"
            >
               {bronData.map((el) => (
                  <a
                     key={uuid4()}
                     href={el.link}
                     className="flex items-center gap-2 2xl:gap-4"
                  >
                     <img
                        loading="lazy"
                        className="w-[45px] 2xl:w-auto"
                        src={el.imgWebp}
                        alt={el.imgAltText}
                     />
                     <p className="2xltext-[28px] text-[20px] font-medium text-[#AB8E67]">
                        {el.text}
                     </p>
                  </a>
               ))}
            </m.div>
            <img
               loading="lazy"
               className="absolute right-0 top-0 hidden h-screen xl:block"
               src="/image/bron_bg.webp"
               alt={t("bron.book")}
            />
         </m.div>
      </section>
   )
}

export default Bron
