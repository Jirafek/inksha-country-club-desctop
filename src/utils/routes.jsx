import { isItWinterNow } from "./helpers"

const routes = [
   {
      title: "О нас",
      link: "#about",
   },
   {
      title: "Локации",
      link: "#locations",
   },
   {
      title: "Мероприятия",
      link: "#events",
   },
   {
      title: "Галерея",
      link: "#gallery",
   },
   {
      title: "Развлечения",
      link: "#happy",
   },
   {
      title: "Карта территории",
      link: "#map",
   },
   {
      title: "Корпоративы",
      link: "/?korpOpen=1",
   },
   {
      title: "FAQ",
      link: "/faq",
   },
   {
      title: "",
      link: "https://vk.com/ikshacountryclub",
      icon: `/image/vk${isItWinterNow()}.webp`,
      iconAvif: `/image/vk${isItWinterNow()}.avif`,
   },
   {
      title: "",
      link: "https://www.instagram.com/ikshacountryclub",
      icon: `/image/inst${isItWinterNow()}.webp`,
      iconAvif: `/image/inst${isItWinterNow()}.avif`,
   },
   {
      title: "",
      link: `https://wa.me/79859091202?text=${encodeURIComponent('Здравствуйте, меня интересует аренда домика')}`,
      icon: `/image/whatsapp${isItWinterNow()}.webp`,
      iconAvif: `/image/whatsapp${isItWinterNow()}.avif`,
   },
]

export default routes
