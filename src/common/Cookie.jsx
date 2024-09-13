import cookie from "icons/cookies.png"
import Cookies from "js-cookie"
import { useTranslation } from 'react-i18next'
import { Helmet } from "react-helmet"

const Cookie = ({ isCookieOpen, setIsCookieOpen, callBack = (isOn) => { } }) => {
   const { t } = useTranslation()

   const closeCookie = () => {
      setIsCookieOpen(false)
   }

   const handleAccept = () => {
      Cookies.set('cookies_on', true, { expires: Infinity })
      localStorage.setItem('cookies_on', 'true')
      callBack(true)
      closeCookie()
   }

   const handleReject = () => {
      closeCookie()
      callBack(false)
   }

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
         <div
            className={` ${isCookieOpen ? "flex" : "hidden"
               } bg-white px-[2%] md:px-[5%] gap-3 fixed z-[400000] bottom-0 items-center  w-full h-[145px] justify-between`}
         >
            <img className="w-[50px] md:w-auto" src={cookie} alt="" />
            <p className="text-small text-black max-w-[600px]">
               Мы используем файлы cookie. Продолжая использовать наш сайт, вы
               автоматически соглашаетесь с использованием данных технологий.
               <a href='/pdf/confi.pdf' className='text-blue-300 underline cursor-pointer'>
                  Политика конфиденциальности
               </a>
               .
            </p>
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
               <button
                  onClick={handleReject}
                  className="text-sm font-bold underlineOnHover montserrat"
                  type="button"
               >
                  Отклонить
               </button>

               <button
                  onClick={handleAccept}
                  className="text-sm montserrat hover:border hover:border-black hover:bg-white hover:text-black duration-300 h-[40px] md:h-[50px] w-[100px] md:w-[200px] flex justify-center items-center bg-black text-white font-bold"
                  type="button"
               >
                  Принять
               </button>
            </div>
         </div>
      </div>
   )
}

export default Cookie
