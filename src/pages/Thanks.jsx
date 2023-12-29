import React from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'

const Thanks = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Отдых в Подмосковье на берегу Икшинского водохранилища - Посетите Икша Кантри Клаб</title>
                <meta
                    name="description"
                    content="Отдых в Подмосковье с Икша Кантри Клаб - Посетите наш загородный клуб. У нас есть Рыбалка, Баня и СПА, водные виды спорта. Приезжайте
            отдохнуть на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Проведите выходные на природе, недалеко от Москвы"
                />
                <meta
                    name="title"
                    content="Отдых в Подмосковье на берегу Икшинского водохранилища - Посетите Икша Кантри Клаб"
                />
                <meta
                    name="keywords"
                    content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
                />
            </Helmet>
            <section className="relative min-h-screen w-full bg-[#201E1F] flex justify-center items-center">
                <div className="h-full flex justify-center items-center">
                    <div className="lg:w-[770px] lg:h-[760px] sm:w-[500px] w-[380px] sm:h-[500px] h-[420px] bg-[#75624A] border-[#AB8E67] border-[2px] rounded-[40px] lg:px-[90px] px-[50px] py-9 flex flex-col items-center justify-center">
                        <p className="lg:text-[32px] sm:text-[22px] text-[18px] text-white font-semibold text-center mb-24">{t('thanks.message')}</p>
                            <Link className="lg:text-[32px] sm:text-[22px] text-[18px] text-white font-medium py-[15px] sm:px-[60px] px-[15px] bg-[rgb(171,_142,_103)] border-[4px] border-[#AB8E67] rlg:rounded-[30px] rounded-[20px]" to="/">
                                {t('thanks.returnHome')}
                            </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thanks
