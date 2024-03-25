import Header from "common/Header"

import s from './birth.module.scss'

import { useState } from "react"
import Footer from "common/Footer"

import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import BirthHero from './components/BirthHero'
import BirthPhoto from './components/BirthPhoto'
import BirthLocations from './components/BirthLocations'
import BirthKaytering from './components/BirthKaytering'
import BirthGuest from './components/BirthGuest'
import BirthForm from './components/BirthForm'
import BirthAdd from './components/BirthAdd'
import BirthContacts from './components/BirthContacts'


const BirthLanding = () => {
   const getLinks = () => {
      const { t } = useTranslation()
      const links = [
         // { title: "Почему мы", link: "whyus" },
         { title: t('photo'), link: "photo" },
         { title: t('hlocations'), link: "locations" },
         { title: t('kay'), link: "kay" },
         { title: t('add'), link: "add" },
         { title: t('contactMe'), link: "Form" },
      ]
      return links
   }

   const GetFooterLinks = () => {

      const links = [
         { title: 'Договор оферты', link: "public/pdf/oferta.pdf" },
         { title: 'Правила проживания', link: "/rules" },
      ]

      return links
   }
   const footerLinks = GetFooterLinks()

   const links = getLinks()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }
   return (
      <div>
         <Helmet>
            <title>День рождения в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="День рождения и самый эффективный тимбилдинг в Подмосковье с Икша Кантри Клаб - День рождения а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="День рождения в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
день рождения, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <div className="montserrat relative">

            <Header
               isMenuOpen={isMenuOpen}
               links={links}
               toggleMenu={toggleMenu}
               MenuClassName='bg-BirthPurple text-white'
               className={`bg-BirthPurple font-bold text-white `}
            />
            <BirthHero />

            <BirthPhoto />
            <BirthLocations />
            <BirthKaytering />
            <BirthGuest />
            <BirthAdd />
            <BirthContacts />
            <BirthForm />
            <Footer FooterLinks={footerLinks} isMediaOpen={false} className={`bg-white  text-ButterDarkBlue`} />
         </div>
      </div>
   )
}

export default BirthLanding
