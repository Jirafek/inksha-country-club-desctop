import React from "react";
import Title from '../Title';
import Logo from '../Logo';
import { v4 as uuid4 } from 'uuid';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomNextArrow, CustomPrevArrow } from '../CustomArrows';

const eventsData = [
    {
        img: '/image/events1.webp',
        title: 'СПОРТИВНЫЕ ИГРЫ',
        text: 'В здорово теле - здоровый дух, а в здоровой атмосфере - здоровый спор, свежий воздух, русская баня, шашлык или барбекю - идеальный выбор для любителей активного отдыха',
    },
    {
        img: '/image/events2.webp',
        title: 'БАРБЕКЮ',
        text: 'Барбекю как в кино? Именно так это и выглядит у нас, все необходимое собрано в одном месте в идеальных пропорциях и приправлено отличным сервисом',
    },
    {
        img: '/image/events3.webp',
        title: 'ПИКНИК',
        text: 'Еда на природе всегда вкуснее, а в компании друзей и семьи - еще вкуснее, устройте пикник вашей мечты у нас, незабываемые впечатления вам гарантированы',
    },
    {
        img: '/image/events4.webp',
        title: 'ШАШЛЫКИ',
        text: 'Повеселиться и вкусно поесть на свежем воздухе - идеальное сочетание, зовите родных, друзей или знакомых и приезжайте к нам на шашлыки',
    },
    {
        img: '/image/events5.webp',
        title: 'ДЕНЬ РОЖДЕНИЯ',
        text: 'Самый главный праздник стоит того, чтобы запомниться надолго, а значит, его нужно правильно отметить. Мы предлагаем все необходимое для этого специально для вас!',
    },
    {
        img: '/image/events6.webp',
        title: 'БАНЯ И СПА',
        text: 'Единение с природой, сочетание русских традиций и современного подхода к уходу за собой. Мы умеем сочетать несочетаемое и создавать незабываемое',
    },
    {
        img: '/image/events7.webp',
        title: 'КАРАОКЕ-ВЕЧЕРИНКА',
        text: 'В приятной душевной атмосфере и хорошей компании душа поет и просит музыки? В таком случае, танцуют все! И поют тоже, караоке к вашим услугам',
    },
    {
        img: '/image/events8.webp',
        title: 'ДЕВИЧНИК',
        text: 'Женский коллектив хочет посплетничать и посекретничать без лишних мальчиков? Или наоборот с ними? Приезжайте и отдыхайте, мы никому не расскажем',
    },
    {
        img: '/image/events9.webp',
        title: 'МАЛЬЧИШНИК',
        text: 'Мужская компания ищет местечко для хорошего мужского отдыха? Все правильно, именно для этого мы вас и приглашаем',
    },
    {
        img: '/image/events10.webp',
        title: 'СВАДЬБА',
        text: 'Свадьба - одно из самых важных событий в жизни человека, особенный день, когда все должно быть идеально, доверьте организацию нам, мы вас не разочаруем',
    },
    {
        img: '/image/events11.webp',
        title: 'ПОСЛЕСВАДЕБНАЯ ВЕЧЕРИНКА',
        text: 'Ощущение начала вашей семейной истории тоже должно быть идеальным, и мы об этом знаем, как никто. Мы поможем организовать продолжение вашей свадебной церемонии',
    },
    {
        img: '/image/events2.webp',
        title: 'КОРПОРАТИВЫ & ТИМБИЛДИНГ',
        text: 'Выбраться из офиса за город? Отличная мысль, но как это все организовать? Ответ прост - приезжайте к нам, у нас уже всё готово, прекрасная природа и полный комфорт ждут!'
    }
];

const Events = () => {
    const sliderSettings = {
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
        ],
        slide: 'div',
        speed: 1000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <section id="events" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={'Мероприятия'} />
            <Logo />
            <a href="https://bronirui-online.ru/iksha-country-club" style={{ background: 'linear-gradient(90deg, #EDE6DD 0%, rgba(171, 142, 103, 0.87) 100%), #75624A' }} className="text-[rgba(34,_28,_28,_0.70)] z-10 absolute left-1/2 -translate-x-1/2 top-[7.5rem] lg:py-5 py-3 px-10 lg:text-[30px] text-[23px] font-semibold border-[3px] border-[#604E3A] rounded-[10px]">
                ОРГАНИЗОВАТЬ СОБЫТИЕ
            </a>
            <Slider {...sliderSettings} className="flex xl:justify-between justify-center sm:pl-14 pt-[250px]">
                {
                    eventsData.map((el, i) => (
                        <div className="sm:w-[400px_!important] w-[380px_!important] flex flex-col items-center h-[700px_!important] border border-[#AB8E67] bg-[#221C1C] rounded-[30px] pb-4" key={uuid4()}>
                            <img className="]" src={el.img} alt="" />
                            <h3 className="text-[30px] text-[#AB8E67] font-bold text-center">
                                {el.title}
                            </h3>
                            <p className="px-4 text-white text-[24px] text-center font-medium my-[30px]">
                                {el.text}
                            </p>
                            <div className="flex justify-center">
                                <a href="https://bronirui-online.ru/iksha-country-club/uslugi" className="text-[rgba(34,_28,_28,_0.70)] text-[25px] font-semibold py-4 px-8 border border-[#604E3A] bg-[#75624A] rounded-lg">
                                    УЗНАТЬ БОЛЬШЕ
                                </a>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}

export default Events;
