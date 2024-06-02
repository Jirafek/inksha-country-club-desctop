import Footer from 'common/Footer'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from 'common/Header'
import HousingHero from './components/HousingHero'
import HousingConcept from './components/HousingConcept'
import HousingServices from './components/HousingServices'
import HousingEntertainment from './components/HousingFun'
import HousingCommunity from './components/HousingCommunity'
import HousingFinancies from './components/HousingFinancies'
import HousingStart from './components/HousingStart'
import HousingContacts from './components/HousingContacts'
import HousingJoinus from './components/HousingJoinus'

const HousingLanding = () => {
   const getLinks = () => {
      const links = [
         // { title: "Почему мы", link: "whyus" },
         // { title: t('photo'), link: "photo" },
         // { title: t('hlocations'), link: "locations" },
         // { title: t('kay'), link: "kay" },
         // { title: t('add'), link: "add" },
         { title: "Концепт", link: "concept" },
         { title: "Услуги", link: "services" },
         { title: "Развлечения", link: "fun" },
         { title: "Окружение", link: "Form" },
         { title: "Контакты", link: "contacts" },
      ]
      return links
   }

   const links = getLinks()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   return (
      <div>
         <Helmet>
            <title>Аренда на год домов в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Корпоративы и самый эффективный тимбилдинг в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Аренда на год домов в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <div className="montserrat bg-[#221C1C] text-white relative">

            <Header
               MenuClassName='montserrat bg-brown'
               isMenuOpen={isMenuOpen}
               toggleMenu={toggleMenu}
               links={links}
               className="montserrat bg-korpHeader text-grey"
            />
            <HousingHero />
            <HousingConcept />
            <HousingServices />
            <HousingEntertainment />
            <HousingCommunity />
            <HousingFinancies />
            <HousingStart />
            <HousingContacts />
            <HousingJoinus />

            <Footer className="montserrat bg-korpHeader" />
         </div>
      </div>
   )
}

export default HousingLanding