import { Helmet } from "react-helmet"

import Map from "components/Home/Map/Map"
import Footer from "../components/Footer"
import About from "../components/Home/About"
import Bron from "../components/Home/Bron"
import Eat from "../components/Home/Eat"
import Events from "../components/Home/Events"
import Gallery from "../components/Home/Gallery"
import Happy from "../components/Home/Happy"
import Locations from "../components/Home/Locations"
import Main from "../components/Home/Main"
import Review from "../components/Home/Review"

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
корпоратив, тимбилдинг, цен, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
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
   )
}

export default Home
