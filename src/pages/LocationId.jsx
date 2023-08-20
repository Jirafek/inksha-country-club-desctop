import React, { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Title from '../components/Title';
import Logo from '../components/Logo';
import { v4 as uuid4 } from 'uuid';
import classNames from 'classnames';

const LocationsData = [
    {
        title: 'ЛЕСНАЯ РЕЗИДЕНЦИЯ',
        img: '/image/loc-1.webp',
        texts: [
            'Крытая зона BBQ с раковиной и столом',
            'Крытая зона BBQ с раковиной и столом',
            'Крытая зона BBQ с раковиной и столом',
            'Крытая зона BBQ с раковиной и столом',
            'Крытая зона BBQ с раковиной и столом'
        ],
        area: '15 соток',
        people: 'до 30 чел',
        holidays: {
            title: '20 000 (10 чел)',
            eachPeople: 'Далее + 1 тыс/гость',
            night: 'Ночёвка + 10 тыс'
        },
        days: {
            title: '15 000 (10 чел)',
            eachPeople: 'Далее + 1 тыс/гость',
            night: 'Ночёвка + 5 тыс'
        },
        time: '14:00 - 21:00',
        bigImg: '/image/loc-1-big.webp',
    },
    {
        title: 'ШАЛЕ',
        img: '/image/loc-2.webp',
        texts: [
            'Остекленная веранда со столом на 15 гостей, камином, бильярдом, тв- и аудио-системой, кухней и зоной отдыха с диваном и креслами',
            'Зона BBQ снаружи веранды (мангал, шампуры, решетки, угли 4 кг, розжиг включены)',
            'Доступен дополнительный коттедж для ночлега (на 10 спальных мест)',
            'Имеется оборудование для презентаций и караоке',
            'Снаружи озелененный участок, шезлонги, стол для пикника, детская площадка'
        ],
        area: '50 м²',
        people: 'до 15 чел',
        holidays: {
            title: '20 000 (10 чел)',
            eachPeople: 'Далее + 1 тыс/гость',
            night: 'Коттедж + 20 тыс'
        },
        days: {
            title: '10 000 (10 чел)',
            eachPeople: 'Далее + 1 тыс/гость',
            night: 'Коттедж + 15 тыс'
        },
        time: '12:00 - 21:00',
        bigImg: '/image/loc-2-big.webp',
    },
    {
        title: 'КОТТЕДЖ',
        img: '/image/loc-3.webp',
        texts: [
            'Двухэтажный коттедж, отапливаемая площадь 150м2, кирпич, с отделкой, мебелью и оборудованием, wifi, спутниковым ТВ',
            'Крытая веранда для мероприятий на открытом воздухе 40м2 и зоной BBQ',
            'Навес 30м2 с паркингом на 2 машины',
            'Просторный огороженный участок 10 соток, по границе которого располагается форелевый пруд с запрудой',
            'Можно воспользоваться баней и отдельностоящий верандой, организовать прогулки на лодке или sup досках, велосипеды, рыбалку'
        ],
        area: '150 м²',
        people: 'до 10 чел',
        holidays: {
            title: '30 000 (до 10 чел)',
            eachPeople: 'на сутки',
            night: ''
        },
        days: {
            title: '20 000 (до 10 чел)',
            eachPeople: 'на сутки',
            night: ''
        },
        time: '15:00 - 12:00',
        bigImg: '/image/loc-3-big.webp',
    },
    {
        title: 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ',
        img: '/image/loc-4.webp',
        texts: [
            '2 спальни с двуспальной кроватью',
            'Кухня-гостиная с обеденным столом, раскладным диваном и видом на сад',
            'Терраса с видом на водохранилище и пляж',
            'Зона BBQ с мангалом (все необходимое входит в аренду)',
            'Зона для пикника на лужайке, шезлонги'
        ],
        area: '',
        people: '',
        holidays: {
            title: '',
            eachPeople: '',
            night: ''
        },
        days: {
            title: '',
            eachPeople: '',
            night: ''
        },
        time: '15:00 - 12:00',
        bigImg: '/image/loc-4-big.webp',
        plash: [
            {
                title: '1 домик (выходные +10 тыс.)',
                cost: '15 000/сутки',
                people: 'до 6 спальных мест'
            },
            {
                title: '2 домика',
                cost: '30 000/сутки',
                people: 'до 12 спальных мест'
            },
            {
                title: '3 домика',
                cost: '50 000/сутки',
                people: 'до 18 спальных мест'
            },
        ]
    },
];

const LocationId = () => {
    const { id } = useParams();
    const [currentLocation, setCurrentLocation] = useState(LocationsData[0]);

    if (id !== "1" && id !== "2" && id !== "3" && id !== "4") {
        return <Navigate to="/" />;
    }

    useEffect(() => {
        setCurrentLocation(LocationsData[+id - 1]);
    }, [])

    return (
        <section className="relative min-h-screen w-full bg-[#201E1F] overflow-hidden">
            <img className="absolute h-screen 2xl:hidden lg:block hidden" src={currentLocation.bigImg} alt="" />
            <img className="absolute top-1/2 -translate-y-1/2 right-[180px] lg:block hidden" src="/image/logo_big.webp" alt="" />
            <div className="w-screen h-screen bg-black opacity-70 duration-300 absolute top-0 left-0 2xl:hidden lg:block hidden"></div>
            <img className="h-screen absolute left-0 top-0 2xl:block hidden" src={currentLocation.img} alt="" />
            <Title bg="#221C1C" text={'Локации'} isNeedBack={true} />
            <Logo />
            <div className="lg:block pt-[160px] flex md:flex-row flex-col justify-between lg:pr-0 sm:pr-5">
                <div className="lg:pl-[190px] pl-[40px] z-10 relative">
                    <h2 className="2xl:text-[68px] lg:text-[58px] md:text-[40px] text-[28px] text-white font-extrabold">
                        {currentLocation.title}
                    </h2>
                    <div className="flex-col 2xl:pl-[420px] gap-[40px] mb-[60px] md:flex hidden">
                        {
                            currentLocation.texts.map((text, i) => {
                                const textClass = classNames(
                                    `pl-[${i * 30}px]`,
                                    'text-white',
                                    'text-[28px]',
                                    'font-medium'
                                );
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
                        currentLocation.title !== 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ' ?
                            <>
                                <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">
                                    <h4 className="text-white 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                        {currentLocation.area}
                                    </h4>
                                    <p className="mb-2 text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                        общая площадь
                                    </p>
                                    <h4 className="text-white 2xl:text-[38px] xl:text-[32px] text-[24px] font-bold">
                                        {currentLocation.people}
                                    </h4>
                                    <p className="text-white 2xl:text-[28px] xl:text-[22px] font-medium">
                                        общая площадь
                                    </p>
                                </div>
                                <div className="bg-[#221C1C] border border-[#AB8E67] rounded-[15px] py-4 px-8 flex flex-col">
                                    <h5 className="text-white 2xl:text-[32px] xl:text-[26px] text-[18px] font-semibold">
                                        Выходные дни
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
                                        Будние Дни
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
                                Время аренды
                            </h5>
                            <h5 className="2xl:text-[32px] xl:text-[26px] text-[18px] text-white font-semibold">
                                {currentLocation.time}
                            </h5>
                        </div>
                        <a className="xl:text-[26px] text-[18px] font-extrabold text-white py-3 px-8 bg-[#75624A] rounded-[15px]" href="https://bronirui-online.ru/iksha-country-club">
                            Забронировать
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationId;

// holidays: {
//     title: '',
//     eachPeople: '',
//     night: ''
// },
