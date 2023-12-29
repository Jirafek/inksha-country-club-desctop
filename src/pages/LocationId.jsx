import React, { useState, useEffect, useRef } from "react"
import { useParams, Navigate, Link } from "react-router-dom"
import Title from '../components/Title'
import Logo from '../components/Logo'
import { v4 as uuid4 } from 'uuid'
import classNames from 'classnames'
import Video1 from '../components/Video1'
import Video2 from '../components/Video2'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'

// const LocationsData = [
//     {
//         title: t('locationId.data.forest.title'),
//         imgAvif: '/image/loc-1.avif',
//         imgWebp: '/image/loc-1.webp',
//         imgAltText: 'Изображение локации - лесная резиденция',
//         video: <Video1 />,
//         texts: [
//             'Крытая зона BBQ с раковиной и столом',
//             'Остекленная веранда со столом на 20+ гостей',
//             'Имеется оборудование для презентаций',
//             'Собственный пирс и баня с купелью на берегу',
//             'Горячая купель, повар (плов, уха, шашлык), кальянщик, банщик'
//         ],
//         area: '15 соток',
//         people: 'до 30 чел',
//         holidays: {
//             title: '20 000 (10 чел)',
//             eachPeople: 'Далее + 1 тыс/гость',
//             night: 'Ночёвка + 10 тыс'
//         },
//         days: {
//             title: '15 000 (10 чел)',
//             eachPeople: 'Далее + 1 тыс/гость',
//             night: 'Ночёвка + 5 тыс'
//         },
//         time: '14:00 - 21:00',
//         bigImgAvif: '/image/loc-1-big.avif',
//         bigImgWebp: '/image/loc-1-big.webp',
//     },
//     {
//         title: 'КОТТЕДЖ',
//         imgAvif: '/image/loc-3.avif',
//         imgWebp: '/image/loc-3.webp',
//         imgAltText: 'Изображение локации - коттедж',
//         video: '/video/kottegge.mp4',
//         texts: [
//             'Двухэтажный коттедж, отапливаемая площадь 150м2, мебелью и оборудованием, wifi',
//             'Крытая веранда для мероприятий на открытом воздухе 40м2 и зоной BBQ',
//             'Навес 30м2 с паркингом на 2 машины',
//             'Просторный огороженный участок 10 соток, по границе которого располагается форелевый пруд',
//             'Можно воспользоваться баней и отдельностоящий верандой, велосипеды, рыбалка'
//         ],
//         area: '150 м²',
//         people: 'до 10 чел',
//         holidays: {
//             title: '30 000 (до 10 чел)',
//             eachPeople: 'на сутки',
//             night: ''
//         },
//         days: {
//             title: '20 000 (до 10 чел)',
//             eachPeople: 'на сутки',
//             night: ''
//         },
//         time: '15:00 - 12:00',
//         bigImgAvif: '/image/loc-3-big.avif',
//         bigImgWebp: '/image/loc-3-big.webp',
//     },
//     {
//         title: 'ШАЛЕ',
//         imgAvif: '/image/loc-2.avif',
//         imgWebp: '/image/loc-2.webp',
//         imgAltText: 'Изображение локации - шале',
//         video: <Video2 />,
//         texts: [
//             'Остекленная веранда со столом на 15 гостей',
//             'Зона BBQ снаружи (мангал, шампуры, решетки, угли 4 кг, розжиг включены)',
//             'Доступен коттедж для ночлега (на 10 спальных мест)',
//             'Имеется оборудование для презентаций',
//             'Снаружи озелененный участок, шезлонги, стол для пикника'
//         ],
//         area: '50 м²',
//         people: 'до 15 чел',
//         holidays: {
//             title: '20 000 (10 чел)',
//             eachPeople: 'Далее + 1 тыс/гость',
//             night: 'Коттедж + 20 тыс'
//         },
//         days: {
//             title: '10 000 (10 чел)',
//             eachPeople: 'Далее + 1 тыс/гость',
//             night: 'Коттедж + 15 тыс'
//         },
//         time: '12:00 - 21:00',
//         bigImgAvif: '/image/loc-2-big.avif',
//         bigImgWebp: '/image/loc-2-big.webp',
//     },
//     {
//         title: 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ',
//         imgAvif: '/image/loc-4.avit',
//         imgWebp: '/image/loc-4.webp',
//         imgAltText: 'Изображение локации - олимпийская деревня',
//         video: '/video/olimp.mp4',
//         texts: [
//             '2 спальни с двуспальной кроватью',
//             'Кухня-гостиная с обеденным столом, раскладным диваном и видом на сад',
//             'Терраса с видом на водохранилище и пляж',
//             'Зона BBQ с мангалом (все необходимое входит в аренду)',
//             'Зона для пикника на лужайке, шезлонги'
//         ],
//         area: '',
//         people: '',
//         holidays: {
//             title: '',
//             eachPeople: '',
//             night: ''
//         },
//         days: {
//             title: '',
//             eachPeople: '',
//             night: ''
//         },
//         time: '15:00 - 12:00',
//         bigImgAvif: '/image/loc-4-big.avif',
//         bigImgWebp: '/image/loc-4-big.webp',
//         plash: [
//             {
//                 title: '1 домик (выходные +10 тыс.)',
//                 cost: '15 000/сутки',
//                 people: 'до 6 спальных мест'
//             },
//             {
//                 title: '2 домика',
//                 cost: '30 000/сутки',
//                 people: 'до 12 спальных мест'
//             },
//             {
//                 title: '3 домика',
//                 cost: '50 000/сутки',
//                 people: 'до 18 спальных мест'
//             },
//         ]
//     },
// ]
const getLocationData = () => {
    const { t } = useTranslation()

    const LocationsData = [
        {
            title: t('locationId.data.forest.title'),
            imgAvif: '/image/loc-1.avif',
            imgWebp: '/image/loc-1.webp',
            imgAltText: t('locationId.data.forest.imgAltText'),
            video: <Video1 />,
            texts: [
                t('locationId.data.forest.texts.0'),
                t('locationId.data.forest.texts.1'),
                t('locationId.data.forest.texts.2'),
                t('locationId.data.forest.texts.3'),
                t('locationId.data.forest.texts.4'),
            ],
            area: t('locationId.data.forest.area'),
            people: t('locationId.data.forest.people'),
            holidays: {
                title: t('locationId.data.forest.holidays.title'),
                eachPeople: t('locationId.data.forest.holidays.eachPeople'),
                night: t('locationId.data.forest.holidays.night'),
            },
            days: {
                title: t('locationId.data.forest.days.title'),
                eachPeople: t('locationId.data.forest.days.eachPeople'),
                night: t('locationId.data.forest.days.night'),
            },
            time: t('locationId.data.forest.time'),
            bigImgAvif: '/image/loc-1-big.avif',
            bigImgWebp: '/image/loc-1-big.webp',
        },
        {
            title: t('locationId.data.cottage.title'),
            imgAvif: '/image/loc-3.avif',
            imgWebp: '/image/loc-3.webp',
            imgAltText: t('locationId.data.cottage.imgAltText'),
            video: '/video/kottegge.mp4',
            texts: [
                t('locationId.data.cottage.texts.0'),
                t('locationId.data.cottage.texts.1'),
                t('locationId.data.cottage.texts.2'),
                t('locationId.data.cottage.texts.3'),
                t('locationId.data.cottage.texts.4'),
            ],
            area: t('locationId.data.cottage.area'),
            people: t('locationId.data.cottage.people'),
            holidays: {
                title: t('locationId.data.cottage.holidays.title'),
                eachPeople: t('locationId.data.cottage.holidays.eachPeople'),
                night: t('locationId.data.cottage.holidays.night'),
            },
            days: {
                title: t('locationId.data.cottage.days.title'),
                eachPeople: t('locationId.data.cottage.days.eachPeople'),
                night: t('locationId.data.cottage.days.night'),
            },
            time: t('locationId.data.cottage.time'),
            bigImgAvif: '/image/loc-3-big.avif',
            bigImgWebp: '/image/loc-3-big.webp',
        },
        {
            title: t('locationId.data.chalet.title'),
            imgAvif: '/image/loc-2.avif',
            imgWebp: '/image/loc-2.webp',
            imgAltText: t('locationId.data.chalet.imgAltText'),
            video: <Video2 />,
            texts: [
                t('locationId.data.chalet.texts.0'),
                t('locationId.data.chalet.texts.1'),
                t('locationId.data.chalet.texts.2'),
                t('locationId.data.chalet.texts.3'),
                t('locationId.data.chalet.texts.4'),
            ],
            area: t('locationId.data.chalet.area'),
            people: t('locationId.data.chalet.people'),
            holidays: {
                title: t('locationId.data.chalet.holidays.title'),
                eachPeople: t('locationId.data.chalet.holidays.eachPeople'),
                night: t('locationId.data.chalet.holidays.night'),
            },
            days: {
                title: t('locationId.data.chalet.days.title'),
                eachPeople: t('locationId.data.chalet.days.eachPeople'),
                night: t('locationId.data.chalet.days.night'),
            },
            time: t('locationId.data.chalet.time'),
            bigImgAvif: '/image/loc-2-big.avif',
            bigImgWebp: '/image/loc-2-big.webp',
        },
        {
            title: t('locationId.data.olympicVillage.title'),
            imgAvif: '/image/loc-4.avit',
            imgWebp: '/image/loc-4.webp',
            imgAltText: t('locationId.data.olympicVillage.imgAltText'),
            video: '/video/olimp.mp4',
            texts: [
                t('locationId.data.olympicVillage.texts.0'),
                t('locationId.data.olympicVillage.texts.1'),
                t('locationId.data.olympicVillage.texts.2'),
                t('locationId.data.olympicVillage.texts.3'),
                t('locationId.data.olympicVillage.texts.4'),
            ],
            area: '',
            people: '',
            holidays: {
                title: '',
                eachPeople: '',
                night: '',
            },
            days: {
                title: '',
                eachPeople: '',
                night: '',
            },
            time: t('locationId.data.olympicVillage.time'),
            bigImgAvif: '/image/loc-4-big.avif',
            bigImgWebp: '/image/loc-4-big.webp',
            plash: [
                {
                    title: t('locationId.data.olympicVillage.plash.0.title'),
                    cost: t('locationId.data.olympicVillage.plash.0.cost'),
                    people: t('locationId.data.olympicVillage.plash.0.people'),
                },
                {
                    title: t('locationId.data.olympicVillage.plash.1.title'),
                    cost: t('locationId.data.olympicVillage.plash.1.cost'),
                    people: t('locationId.data.olympicVillage.plash.1.people'),
                },
                {
                    title: t('locationId.data.olympicVillage.plash.2.title'),
                    cost: t('locationId.data.olympicVillage.plash.2.cost'),
                    people: t('locationId.data.olympicVillage.plash.2.people'),
                },
            ],
        },
    ]

    return LocationsData
}


const LocationId = () => {
    const LocationsData = getLocationData()
    const { t } = useTranslation()
    const { id } = useParams()
    const [currentLocation, setCurrentLocation] = useState(LocationsData[0])
    const [currentVideo, setCurrentVideo] = useState(LocationsData[0])
    const videoRef = useRef(null)

    const videous = [
        '/video/lesnaya.mp4',
        '/video/kottegge.mp4',
        '/video/shale.mp4',
        '/video/olimp.mp4'
    ]

    if (id !== "1" && id !== "2" && id !== "3" && id !== "4") {
        return <Navigate to="/" />
    }

    useEffect(() => {
        setCurrentLocation(LocationsData[+id - 1])
        setCurrentVideo(videous[+id - 1])
        videoRef.current.src = videous[+id - 1]
        videoRef.current.load()
    }, [])


    return (
        <>
            <Helmet>
                <title>Домики в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
                <meta
                    name="description"
                    content="Домики в Подмосковье с Икша Кантри Клаб -  а также беседки Рыбалка, Баня и СПА, водные виды спорта. Приезжайте
            отдохнуть на берегу Икшинского водохранилища.
            Уютные домики и беседки, Шашлыки, красивые закаты. Проведите свои выходные на природе, недалеко от Москвы"
                />
                <meta
                    name="title"
                    content="Домики в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
                />
                <meta
                    name="keywords"
                    content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, глэмпинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
                />
            </Helmet>
            <section className="relative min-h-screen w-full bg-[#201E1F] overflow-hidden">
                <video ref={videoRef} className="w-screen h-screen absolute top-0 left-0" autoPlay loop muted>
                    <source src={'/video/lesnaya.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {currentLocation.video}
                {/*<picture>*/}
                {/*    <source srcSet={`${currentLocation.bigImgAvif} 1x`} type="image/avif" />*/}
                {/*    <img className="absolute h-screen 2xl:hidden lg:block hidden" src={currentLocation.bigImgWebp} alt={currentLocation.imgAltText} />*/}
                {/*</picture>*/}
                {/*<picture>*/}
                {/*    <source srcSet="/image/logo_big.avif 1x" type="image/avif" />*/}
                {/*    <img className="absolute top-1/2 -translate-y-1/2 right-[180px] lg:block hidden" src="/image/logo_big.webp" alt={currentLocation.imgAltText} />*/}
                {/*</picture>*/}
                <div className="w-screen h-screen bg-black opacity-80 duration-300 absolute top-0 left-0"></div>

                {/*<picture>*/}
                {/*    <source srcSet={`${currentLocation.imgAvif} 1x`} type="image/avif" />*/}
                {/*    <img className="h-screen absolute left-0 top-0 2xl:block hidden" src={currentLocation.imgWebp} alt={currentLocation.imgAltText} />*/}
                {/*</picture>*/}
                <img className="h-screen absolute left-0 top-0 2xl:block hidden" src={currentLocation.imgWebp} alt={currentLocation.imgAltText} />
                <Title bg="#221C1C" text={'Локации'} isNeedBack={true} />
                <Logo />
                <div className="lg:block pt-[160px] flex md:flex-row flex-col justify-between lg:pr-0 sm:pr-5">
                    <div className="lg:pl-[190px] pl-[40px] z-10 relative">
                        <h1 className="2xl:text-[68px] lg:text-[58px] md:text-[40px] text-[28px] text-white font-extrabold">
                            {currentLocation.title}
                        </h1>
                        <div className="flex-col 2xl:pl-[420px] gap-[40px] mb-[60px] md:flex hidden">
                            {
                                currentLocation.texts.map((text, i) => {
                                    const textClass = classNames(
                                        `pl-[${i * 30}px]`,
                                        'text-white',
                                        'text-[28px]',
                                        'font-medium'
                                    )
                                    return (
                                        <p key={uuid4()} className="text-white 3xl:max-w-[1060px] max-w-[880px] 3xl:text-[28px] text-[24px] text_with_padding font-medium">
                                            {text}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-around items-center z-10 relative md:justify-self-start justify-self-center">
                        {
                            currentLocation.title !== t('locationId.data.olympicVillage.title') ?
                                <>
                                    <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">
                                        <h4 className="text-white 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                            {currentLocation.area}
                                        </h4>
                                        <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {t('locationId.totalArea')}
                                        </p>
                                        <h4 className="text-white 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                            {currentLocation.people}
                                        </h4>
                                        <p className="text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {t('locationId.totalArea')}
                                        </p>
                                    </div>
                                    <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">
                                        <h5 className="text-white 2xl:text-[32px] xl:text-[26px] text-[18px] font-semibold">
                                            {t('locationId.weekendDays')}
                                        </h5>
                                        <h4 className="text-[#AB8E67] 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                            {currentLocation.holidays.title}
                                        </h4>
                                        <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {currentLocation.holidays.eachPeople}
                                        </p>
                                        <p className="text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {currentLocation.holidays.night}
                                        </p>
                                    </div>
                                    <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">
                                        <h5 className="text-white 2xl:text-[32px] xl:text-[26px] text-[18px] font-semibold">
                                            {t('locationId.weekdays')}
                                        </h5>
                                        <h4 className="text-[#AB8E67] 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                            {currentLocation.days.title}
                                        </h4>
                                        <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {currentLocation.days.eachPeople}
                                        </p>
                                        <p className="text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                            {currentLocation.days.night}
                                        </p>
                                    </div>
                                </>
                                :
                                <>
                                    {
                                        currentLocation.plash.map((el, i) => (
                                            <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">

                                                <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                                    {el.title}
                                                </p>
                                                <h4 className="text-[#AB8E67] 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                                    {el.cost}
                                                </h4>
                                                <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                                    {el.people}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </>
                        }
                        <div className="flex flex-col gap-6 relative">
                            <div className="py-4 px-[18px] flex flex-col items-center justify-center bg-[#221C1C] border border-[#AB8E67] rounded-[15px]">
                                <h5 className="2xl:text-[32px] xl:text-[26px] text-[18px] text-white font-semibold">
                                    {t('locationId.rentalTime')}
                                </h5>
                                <h5 className="2xl:text-[32px] xl:text-[26px] text-[18px] text-white font-semibold">
                                    {currentLocation.time}
                                </h5>
                            </div>
                            <a className="xl:text-[26px] text-center text-[18px] font-extrabold text-white py-3 px-8 bg-[#75624A] rounded-[15px]" href="https://bronirui-online.ru/iksha-country-club" rel="noreferrer">
                                {t('locationId.book')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LocationId

// holidays: {
//     title: '',
//     eachPeople: '',
//     night: ''
// },
