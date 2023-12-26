import React, { useState, useEffect, Fragment } from "react"
import Title from '../Title'
import GalleryArrow from '../icons/GalleryArrow'
import { v4 as uuid4 } from 'uuid'
import { m } from "framer-motion"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomNextArrow, CustomPrevArrow } from '../CustomArrows'
import { useTranslation } from 'react-i18next'



export const getGalleryData = () => {
    const { t } = useTranslation()

    const galleryData = [
        {
            title: t('gallery.forestResidence'),
            images: [
                {
                    imgAvif: '/image/gallery-1-1.avif',
                    imgWebp: '/image/gallery-1-1.webp',
                    imgAltText: 'Котеджи в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-2.avif',
                    imgWebp: '/image/gallery-1-2.webp',
                    imgAltText: 'Домик на природе',
                },
                {
                    imgAvif: '/image/gallery-1-3.avif',
                    imgWebp: '/image/gallery-1-3.webp',
                    imgAltText: 'Снять домик в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-4.avif',
                    imgWebp: '/image/gallery-1-4.webp',
                    imgAltText: 'Лесная резиденция',
                },
                {
                    imgAvif: '/image/gallery-1-5.avif',
                    imgWebp: '/image/gallery-1-5.webp',
                    imgAltText: 'Коттедж в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-6.avif',
                    imgWebp: '/image/gallery-1-6.webp',
                    imgAltText: 'Баня с купелью на природе',
                },
                {
                    imgAvif: '/image/gallery-1-7.avif',
                    imgWebp: '/image/gallery-1-7.webp',
                    imgAltText: 'Домик в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-8.avif',
                    imgWebp: '/image/gallery-1-8.webp',
                    imgAltText: 'Русская баня в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-9.avif',
                    imgWebp: '/image/gallery-1-9.webp',
                    imgAltText: 'Отдых на берегу',
                },
                {
                    imgAvif: '/image/gallery-1-10.avif',
                    imgWebp: '/image/gallery-1-10.webp',
                    imgAltText: 'Домик в лесу',
                },
                {
                    imgAvif: '/image/gallery-1-11.avif',
                    imgWebp: '/image/gallery-1-11.webp',
                    imgAltText: 'Снять домик ',
                },
                {
                    imgAvif: '/image/gallery-1-12.avif',
                    imgWebp: '/image/gallery-1-12.webp',
                    imgAltText: 'Коттедж',
                },
                {
                    imgAvif: '/image/gallery-1-13.avif',
                    imgWebp: '/image/gallery-1-13.webp',
                    imgAltText: 'Отдых на природе',
                },
                {
                    imgAvif: '/image/gallery-1-14.avif',
                    imgWebp: '/image/gallery-1-14.webp',
                    imgAltText: 'Котеджи на природе',
                },
                {
                    imgAvif: '/image/gallery-1-15.avif',
                    imgWebp: '/image/gallery-1-15.webp',
                    imgAltText: 'Одых с ночевкой на природе',
                },
                {
                    imgAvif: '/image/gallery-1-16.avif',
                    imgWebp: '/image/gallery-1-16.webp',
                    imgAltText: 'Домики на природе',
                },
                {
                    imgAvif: '/image/gallery-1-17.avif',
                    imgWebp: '/image/gallery-1-17.webp',
                    imgAltText: 'Отдых в подмосковье',
                },
                {
                    imgAvif: '/image/gallery-1-18.avif',
                    imgWebp: '/image/gallery-1-18.webp',
                    imgAltText: 'Отдых на природе',
                },
                {
                    imgAvif: '/image/gallery-1-19.avif',
                    imgWebp: '/image/gallery-1-19.webp',
                    imgAltText: 'Снять домики в подмосковье',
                }
            ]
        },
        {
            title: t('gallery.chalet'),

            images: [
                {
                    imgAvif: '/image/gallery-7-2.avif',
                    imgWebp: '/image/gallery-7-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-3.avif',
                    imgWebp: '/image/gallery-7-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-4.avif',
                    imgWebp: '/image/gallery-7-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-5.avif',
                    imgWebp: '/image/gallery-7-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-6.avif',
                    imgWebp: '/image/gallery-7-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-7.avif',
                    imgWebp: '/image/gallery-7-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-8.avif',
                    imgWebp: '/image/gallery-7-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-9.avif',
                    imgWebp: '/image/gallery-7-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-7-10.avif',
                    imgWebp: '/image/gallery-7-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
        {
            title: t('gallery.cottage'),

            images: [
                {
                    imgAvif: '/image/gallery-3-2.avif',
                    imgWebp: '/image/gallery-3-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-3.avif',
                    imgWebp: '/image/gallery-3-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-4.avif',
                    imgWebp: '/image/gallery-3-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-5.avif',
                    imgWebp: '/image/gallery-3-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-6.avif',
                    imgWebp: '/image/gallery-3-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-7.avif',
                    imgWebp: '/image/gallery-3-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-8.avif',
                    imgWebp: '/image/gallery-3-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-9.avif',
                    imgWebp: '/image/gallery-3-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-10.avif',
                    imgWebp: '/image/gallery-3-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-11.avif',
                    imgWebp: '/image/gallery-3-11.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-12.avif',
                    imgWebp: '/image/gallery-3-12.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-13.avif',
                    imgWebp: '/image/gallery-3-13.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-14.avif',
                    imgWebp: '/image/gallery-3-14.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-15.avif',
                    imgWebp: '/image/gallery-3-15.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-16.avif',
                    imgWebp: '/image/gallery-3-16.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-3-17.avif',
                    imgWebp: '/image/gallery-3-17.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
        {
            title: t('gallery.olympicVillage'),

            images: [
                {
                    imgAvif: '/image/gallery-4-1.avif',
                    imgWebp: '/image/gallery-4-1.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-2.avif',
                    imgWebp: '/image/gallery-4-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-3.avif',
                    imgWebp: '/image/gallery-4-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-4.avif',
                    imgWebp: '/image/gallery-4-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-5.avif',
                    imgWebp: '/image/gallery-4-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-6.avif',
                    imgWebp: '/image/gallery-4-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-7.avif',
                    imgWebp: '/image/gallery-4-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-8.avif',
                    imgWebp: '/image/gallery-4-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-9.avif',
                    imgWebp: '/image/gallery-4-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-10.avif',
                    imgWebp: '/image/gallery-4-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-11.avif',
                    imgWebp: '/image/gallery-4-11.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-12.avif',
                    imgWebp: '/image/gallery-4-12.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-13.avif',
                    imgWebp: '/image/gallery-4-13.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-14.avif',
                    imgWebp: '/image/gallery-4-14.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-15.avif',
                    imgWebp: '/image/gallery-4-15.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-16.avif',
                    imgWebp: '/image/gallery-4-16.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-17.avif',
                    imgWebp: '/image/gallery-4-17.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-4-18.avif',
                    imgWebp: '/image/gallery-4-18.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
        {
            title: t('gallery.ourGuests'),

            images: [
                {
                    imgAvif: '/image/gallery-2-2.avif',
                    imgWebp: '/image/gallery-2-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-3.avif',
                    imgWebp: '/image/gallery-2-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-4.avif',
                    imgWebp: '/image/gallery-2-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-5.avif',
                    imgWebp: '/image/gallery-2-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-6.avif',
                    imgWebp: '/image/gallery-2-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-7.avif',
                    imgWebp: '/image/gallery-2-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-8.avif',
                    imgWebp: '/image/gallery-2-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-9.avif',
                    imgWebp: '/image/gallery-2-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-10.avif',
                    imgWebp: '/image/gallery-2-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-11.avif',
                    imgWebp: '/image/gallery-2-11.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-12.avif',
                    imgWebp: '/image/gallery-2-12.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-13.avif',
                    imgWebp: '/image/gallery-2-13.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-14.avif',
                    imgWebp: '/image/gallery-2-14.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-15.avif',
                    imgWebp: '/image/gallery-2-15.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-16.avif',
                    imgWebp: '/image/gallery-2-16.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-2-17.avif',
                    imgWebp: '/image/gallery-2-17.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
        {
            title: t('gallery.food'),

            images: [
                {
                    imgAvif: '/image/gallery-5-1.avif',
                    imgWebp: '/image/gallery-5-1.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-2.avif',
                    imgWebp: '/image/gallery-5-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-3.avif',
                    imgWebp: '/image/gallery-5-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-4.avif',
                    imgWebp: '/image/gallery-5-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-5.avif',
                    imgWebp: '/image/gallery-5-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-6.avif',
                    imgWebp: '/image/gallery-5-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-7.avif',
                    imgWebp: '/image/gallery-5-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-8.avif',
                    imgWebp: '/image/gallery-5-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-9.avif',
                    imgWebp: '/image/gallery-5-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-10.avif',
                    imgWebp: '/image/gallery-5-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-11.avif',
                    imgWebp: '/image/gallery-5-11.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-12.avif',
                    imgWebp: '/image/gallery-5-12.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-13.avif',
                    imgWebp: '/image/gallery-5-13.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-14.avif',
                    imgWebp: '/image/gallery-5-14.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-15.avif',
                    imgWebp: '/image/gallery-5-15.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-5-16.avif',
                    imgWebp: '/image/gallery-5-16.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
        {
            title: t('gallery.entertainment'),

            images: [
                {
                    imgAvif: '/image/gallery-6-2.avif',
                    imgWebp: '/image/gallery-6-2.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-3.avif',
                    imgWebp: '/image/gallery-6-3.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-4.avif',
                    imgWebp: '/image/gallery-6-4.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-5.avif',
                    imgWebp: '/image/gallery-6-5.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-6.avif',
                    imgWebp: '/image/gallery-6-6.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-7.avif',
                    imgWebp: '/image/gallery-6-7.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-8.avif',
                    imgWebp: '/image/gallery-6-8.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-9.avif',
                    imgWebp: '/image/gallery-6-9.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-10.avif',
                    imgWebp: '/image/gallery-6-10.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-11.avif',
                    imgWebp: '/image/gallery-6-11.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-12.avif',
                    imgWebp: '/image/gallery-6-12.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-13.avif',
                    imgWebp: '/image/gallery-6-13.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-14.avif',
                    imgWebp: '/image/gallery-6-14.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-15.avif',
                    imgWebp: '/image/gallery-6-15.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-16.avif',
                    imgWebp: '/image/gallery-6-16.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-17.avif',
                    imgWebp: '/image/gallery-6-17.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-18.avif',
                    imgWebp: '/image/gallery-6-18.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-19.avif',
                    imgWebp: '/image/gallery-6-19.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-20.avif',
                    imgWebp: '/image/gallery-6-20.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-21.avif',
                    imgWebp: '/image/gallery-6-21.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-22.avif',
                    imgWebp: '/image/gallery-6-22.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-23.avif',
                    imgWebp: '/image/gallery-6-23.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-24.avif',
                    imgWebp: '/image/gallery-6-24.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-25.avif',
                    imgWebp: '/image/gallery-6-25.webp',
                    imgAltText: 'Икша Кантри Клаб',
                },
                {
                    imgAvif: '/image/gallery-6-26.avif',
                    imgWebp: '/image/gallery-6-26.webp',
                    imgAltText: 'Икша Кантри Клаб',
                }
            ]
        },
    ]
    return galleryData
}



const Gallery = () => {
    const { t } = useTranslation()
    const GD = getGalleryData()
    const [menuItem, setMenuItem] = useState(t('gallery.forestResidence'))
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedImages, setSelectedImages] = useState([])

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuItem = (index) => {
        setMenuItem(GD[index].title)
        setIsMenuOpen(false)
    }

    console.log(GD)
    useEffect(() => {
        const selectedData = GD.find(item => item.title === menuItem)
        if (selectedData) {
            setSelectedImages(selectedData.images)
        }
    }, [menuItem])

    const sliderSettings = {
        slidesToShow: 1,
        slide: 'div',
        speed: 1000,
        nextArrow: <CustomNextArrow url="/image/arrow_gallery.webp" />,
        prevArrow: <CustomPrevArrow url="/image/arrow_gallery.webp" />,
    }

    return (
        <section id="gallery" className="relative min-h-screen w-full bg-[#201E1F]">
            <Title text={t('gallery.gallery')} />
            <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[190px] top-[156px] lg:w-[550px] w-[360px] border border-[#AB8E67] bg-[#75624A] rounded-[22px]">
                <div className="relative w-full pl-12 flex flex-col gap-2 items-start">
                    {
                        GD.map((el, i) => {
                            if (el.title === menuItem) return

                            return (
                                <button key={uuid4()} onClick={() => handleMenuItem(i)} className="lg:text-[35px] text-[24px] text-white font-medium">
                                    {el.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <m.button
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 2
                    },
                }}
                onClick={handleMenu}
                className="absolute z-20 left-1/2 -translate-x-1/2 top-[7.5rem] lg:w-[550px] w-[360px] lg:h-[100px] h-[65px] border border-[#AB8E67] bg-[#75624A] rounded-[22px]"
            >
                <div className="relative h-full w-full flex items-center lg:pl-12 pl-4">
                    <p className="text-white lg:text-[35px] text-[24px] font-medium">
                        {menuItem}
                    </p>
                    <div className="absolute lg:right-12 right-4 lg:w-auto w-[35px] top-1/2 -translate-y-1/2">
                        <GalleryArrow />
                    </div>
                </div>
            </m.button>
            <Slider {...sliderSettings} className="flex justify-center pt-[250px] pb-5 max-h-[1500px] 3xl:px-40 2xl:px-32 md:px-24 px-0">
                {
                    selectedImages.map(({ imgAvif, imgWebp, imgAltText }) => (
                        // <Fragment key={uuid4()}>
                        //     <picture>
                        //         <source srcSet={`${imgAvif} 1x`} type="image/avif" />
                        //         <m.img
                        //             initial={{ opacity: 0 }}
                        //             animate={{
                        //                 opacity: 1,
                        //                 transition: {
                        //                     delay: 2,
                        //                     duration: 1
                        //                 },
                        //             }}
                        //             src={imgWebp}
                        //             alt={imgAltText}
                        //         />
                        //     </picture>
                        // </Fragment>
                        <m.img
                            loading='lazy'
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 2,
                                    duration: 1
                                },
                            }}
                            key={uuid4()}
                            src={imgWebp}
                            alt={imgAltText}
                        />
                    ))
                }
            </Slider>
        </section>
    )
}

export default Gallery
