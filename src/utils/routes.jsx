import { useTranslation } from 'react-i18next'
import { isItWinterNow } from "./helpers"

const getRoutes = () => {

   const { t } = useTranslation()

   const routes = [
      {
         title: t("routes.about"),
         link: "#about",
      },
      {
         title: t("routes.locations"),
         link: "#locations",
      },
      {
         title: t("routes.events"),
         link: "#events",
      },
      {
         title: t("routes.gallery"),
         link: "#gallery",
      },
      {
         title: t("routes.happy"),
         link: "#happy",
      },
      {
         title: t("routes.map"),
         link: "#map",
      },
      {
         title: t("routes.corporates"),
         link: "/?korpOpen=1",
      },
      {
         title: t("routes.faq"),
         link: "/faq",
      },
      {
         title: "",
         link: "https://vk.com/ikshacountryclub",
         icon: `/image/vk${isItWinterNow()}.webp`,
         iconAvif: `/image/vk${isItWinterNow()}.avif`,
         iconAlt: t("routes.vkIconAlt"),
      },
      {
         title: "",
         link: "https://www.instagram.com/ikshacountryclub",
         icon: `/image/inst${isItWinterNow()}.webp`,
         iconAvif: `/image/inst${isItWinterNow()}.avif`,
         iconAlt: t("routes.instagramIconAlt"),
      },
      {
         title: "",
         link: `https://wa.me/79859091202?text=${encodeURIComponent('Здравствуйте, меня интересует аренда домика')}`,
         icon: `/image/whatsapp${isItWinterNow()}.webp`,
         iconAvif: `/image/whatsapp${isItWinterNow()}.avif`,
         iconAlt: t("routes.whatsappIconAlt"),
      },
   ]

   return routes
}




export default getRoutes
