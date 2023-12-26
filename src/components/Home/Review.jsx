import React, { useState, useEffect } from "react"
import { v4 as uuid4 } from "uuid"
import { m } from "framer-motion"
import { useTranslation } from "react-i18next"
import Title from "../Title"

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const OpenLeft = {
    hidden: {
        opacity: 0,
        transform: "translate(-500px)",
    },
    visible: {
        opacity: 1,
        transform: "translate(0px)",
        transition: {
            ease: "easeOut",
            duration: 2.5,
        },
    },
}

const getReviewData = () => {
    const { t } = useTranslation()

    const reviewData = [
        {
            imgAvif: "/image/review1.avif",
            imgWebp: "/image/review1.webp",
            imgAltText: "Отзыв Анны о нашем загородном клубе",
            title: t('reviews.data.firstTitle'),
            text: t('reviews.data.firstText'),

        },
        {
            imgAvif: "/image/review2.avif",
            imgWebp: "/image/review2.webp",
            imgAltText: "Отзыв Натальи о нашем загородном клубе",
            title: t('reviews.data.secondName'),
            text: t('reviews.data.secondText')

        },
    ]
    return reviewData
}



const Review = () => {
    const { t } = useTranslation()

    return (
        <section id="req" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={t("reviews.title")} />
            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={heading}
                className="md:pl-[90px] sm:pl-[40px] pl-3 2xl:pt-[170px] sm:pt-[110px] pt-[90px] pb-6"
            >
                <m.h2
                    variants={OpenLeft}
                    className="2xl:text-[68px] xl:text-[58px] lg:text-[40px] sm:text-[28px] text-[22px] text-white font-extrabold sm:pl-0 pl-7"
                >
                    {t("reviews.subtitle")} <br />{" "}
                    <span className="text-[#A69376]">{t("reviews.highlight")}</span>
                </m.h2>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 2,
                        },
                    }}
                    className="flex flex-col items-center lg:gap-14 gap-7"
                >
                    {getReviewData().map((el, i) => (
                        <div
                            key={uuid4()}
                            className="flex relative sm:flex-row flex-col items-center lg:gap-14 gap-7 lg:py-7 py-3 lg:px-14 px-4 bg-[#221C1C] border border-[#AB8E67] rounded-[15px] lg:mr-40 mr-4"
                        >
                            <div className="absolute left-0 top-0 2xl:block hidden">
                                <div className="relative flex">
                                    <img
                                        loading="lazy"
                                        src="/image/comma.webp"
                                        alt={t("common.logoAlt")}
                                    />
                                    <img
                                        loading="lazy"
                                        className="absolute left-12"
                                        src="/image/comma.webp"
                                        alt={t("common.logoAlt")}
                                    />
                                </div>
                            </div>
                            <div className="absolute right-0 -bottom-12 lg:block hidden">
                                <div className="relative flex">
                                    <img
                                        loading="lazy"
                                        className="rotate-180"
                                        src="/image/comma.webp"
                                        alt={t("common.logoAlt")}
                                    />
                                    <img
                                        loading="lazy"
                                        className="absolute right-12 rotate-180"
                                        src="/image/comma.webp"
                                        alt={t("common.logoAlt")}
                                    />
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                className="2xl:w-auto lg:w-[150px] w-[112px]"
                                src={el.imgWebp}
                                alt={el.imgAltText}
                            />
                            <div className="flex flex-col lg:gap-3">
                                <h3 className="2xl:text-[58px] lg:text-[42px] text-[30px] text-[#AB8E67] font-semibold">
                                    {el.title}
                                </h3>
                                <p className="text-white 2xl:text-[32px] lg:text-[20px] font-medium">
                                    {el.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </m.div>
            </m.div>
        </section>
    )
}

export default Review
