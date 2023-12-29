import React from "react"
import { v4 as uuid4 } from 'uuid'
import LocationArrow from '../components/icons/LocationArrow'
import { useNavigate } from "react-router-dom"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CustomNextArrow, CustomPrevArrow } from '../components/CustomArrows'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'

const imageData = [
    {
        imgAvif: "/image/keyt1.avif",
        imgWebp: "/image/keyt1.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - стейк красной рыбы на гриле'
    },
    {
        imgAvif: "/image/keyt2.avif",
        imgWebp: "/image/keyt2.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - речная рыба на гриле'
    },
    {
        imgAvif: "/image/keyt3.avif",
        imgWebp: "/image/keyt3.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - мясная нарезка'
    },
    {
        imgAvif: "/image/keyt4.avif",
        imgWebp: "/image/keyt4.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - бургер, картошка фри с фиременным соусом'
    },
    {
        imgAvif: "/image/keyt5.avif",
        imgWebp: "/image/keyt5.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - пицца'
    },
    {
        imgAvif: "/image/keyt6.avif",
        imgWebp: "/image/keyt6.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб'
    },
    {
        imgAvif: "/image/keyt7.avif",
        imgWebp: "/image/keyt7.webp",
        imgAltText: 'Изображение блюда из меню загородного клуба Икша Кантри Клаб - свежевыжатые соки'
    }
]

const Keytering = () => {

    const { t } = useTranslation()


    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const settings = {
        dots: false,
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow url="/image/arrow_gallery.webp" />,
        prevArrow: <CustomPrevArrow url="/image/arrow_gallery.webp" />,
    }

    return (
        <>
            <Helmet>
                <title>Отдых в Подмосковье с Икша Кантри Клаб - шашлыки и блюда на костре и мангале у воды. </title>
                <meta
                    name="description"
                    content="Отдых в Подмосковье с Икша Кантри Клаб - Очень вкусные Блюда на мангале, настоящая рыбацкая уха, Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
                />
                <meta
                    name="title"
                    content="Отдых в Подмосковье с Икша Кантри Клаб - шашлыки и блюда на костре и мангале на берегу Икшинского водохранилища."
                />
                <meta
                    name="keywords"
                    content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик,
                мангал, уха, плов, недалеко, москва, рядом, московская область, беседки"
                />
            </Helmet>
            <section className="min-h-screen w-full relative bg-[#201E1F]">
                <button onClick={goBack} className="w-[40px] sm:block hidden absolute top-3 left-7 rotate-180 z-10 hover:-translate-x-2 duration-300">
                    <LocationArrow />
                </button>
                <div className="pt-3">
                    <div className="flex justify-center">
                        <h1 className="sm:text-[68px] text-[32px] gradient_title font-extrabold mb-2">
                            {t('catering.title')}
                        </h1>
                    </div>
                    <div className="flex justify-center mb-2">
                        <a href="/pdf/menu.pdf" target="_blank" className="py-3 px-8 flex justify-center items-center rounded-[10px] bg-[#AB8E67] text-white text-[20px] font-medium">
                            {t('catering.viewMenu')}
                        </a>
                    </div>
                    <Slider {...settings}>
                        {imageData.map(({ imgAvif, imgWebp, imgAltText }, i) => (
                            <div className="lg:w-[700px_!important] sm:w-[590px_!important] w-[380px_!important]" key={uuid4()}>
                                {/*<picture>*/}
                                {/*    <source srcSet={`${imgAvif} 1x`} type="image/avif" />*/}
                                {/*    <img className="image h-full" src={imgWebp} alt="Икша Кантри Клаб" />*/}
                                {/*</picture>*/}
                                <img className="image h-full" src={imgWebp} alt={imgAltText} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Keytering