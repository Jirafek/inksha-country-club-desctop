import { Helmet } from "react-helmet"
import loadable from '@loadable/component'
import arrow from 'icons/arrow.png'


const Map = loadable(() => import("components/Home/Map/Map"))
const Footer = loadable(() => import("../components/Footer"))
const About = loadable(() => import("../components/Home/About"))
const Bron = loadable(() => import("../components/Home/Bron"))
const Eat = loadable(() => import("../components/Home/Eat"))
const Events = loadable(() => import("../components/Home/Events"))
const Gallery = loadable(() => import("../components/Home/Gallery"))
const Happy = loadable(() => import("../components/Home/Happy"))
const Locations = loadable(() => import("../components/Home/Locations"))
const Main = loadable(() => import("../components/Home/Main"))
const Review = loadable(() => import("../components/Home/Review"))

const Home = ({ isPopupOpen, togglePopup }) => {

   return (
      <div className='relative'>
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
         <a href='#main' className='fixed w-[72px] h-[72px] flex items-center border-[2px] border-[#58462E] justify-center bottom-[20px] bg-[#AB8E67] rounded-full cursor-pointer right-[100px] z-[10000]'>
            <img className='-rotate-90 h-[19px]' src={arrow} alt="" />
         </a>
         <Main />
         <About />
         <Map />
         <Happy />
         <Eat />
         <Locations />
         <Events />
         <Gallery />
         <Review />
         <Bron />
         <Footer />
      </div>
   )
}

export default Home
