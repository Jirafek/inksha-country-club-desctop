import Footer from "common/Footer"
import Header from "common/Header"
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import NYForm from './components/NYForm'
import Hero from "./components/NYHero"
import { Programa } from "./components/NYPrograma"
import ProgramaSwiper from './components/NYProgramaSwiper'
import Tariff from "./components/NYTariff"
import "./index.css"
import { useTranslation } from 'react-i18next'



const NYLanding = () => {
   const { t } = useTranslation()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const links = [
      { title: t('ny.routes.program'), link: "Programa" },
      { title: t('ny.routes.tariff'), link: "Tariff" },
      { title: t('ny.routes.contact'), link: "Form" },
   ]
   return (
      <div className="yaes">
         <Helmet>
            <title>Новый год в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Новый год в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Новый год в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Новый год, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-NYheader text-NYgreen'
            className='bg-NYheader text-NYgreen' />
         <div className='ny-bg relative  w-full h-full'>
            <Hero />
            <ProgramaSwiper />
            <Programa />
            <Tariff />
         </div>
         <NYForm />
         <Footer className='bg-NYheader text-NYgreen' />
      </div>
   )
}

export default NYLanding
