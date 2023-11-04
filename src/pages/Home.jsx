import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { updateData, URLData } from "../utils/URLData";

import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Happy from "../components/Home/Happy";
import Eat from "../components/Home/Eat";
import Locations from "../components/Home/Locations";
import Events from "../components/Home/Events";
import Gallery from "../components/Home/Gallery";
import Review from "../components/Home/Review";
import Bron from "../components/Home/Bron";
import Footer from "../components/Footer";
import Map from "components/Home/Map/Map";

const Home = ({ isPopupOpen, togglePopup }) => {

   return (
      <>
         <Helmet>
            <title>
               Загородный клуб Икша Кантри Клаб - Отдых в Подмосковье на берегу
               Икшинского водохранилища.
            </title>
            <meta
               name="description"
               content="Загородный клуб Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
            />
            <meta
               name="title"
               content="Загородный клуб Икша Кантри Клаб -Отдых в подмосковье, Рыбалка, Баня и СПА, водные виды спорта на Икшинском водохранилище."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>

         <Main />
         <Map />
         <About />
         <Happy />
         <Eat />
         <Locations />
         <Events />
         <Gallery />
         <Review />
         <Bron />
         <Footer />
      </>
   );
};

export default Home;
