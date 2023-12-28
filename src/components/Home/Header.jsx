import React, { useState } from "react"

import { Link } from "react-router-dom"

import { v4 as uuidv4 } from "uuid"

import { m } from "framer-motion"

import getRoutes from "../../utils/routes"

const Header = () => {
   const [burgerState, setBurgerState] = useState(false)

   const handleBurger = () => {
      setBurgerState(!burgerState)
   }
   return (
      <m.header
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: {
               delay: 1,
            },
         }}
         className="relative z-10 h-14 w-full"
      >
         <nav className="px-10 py-[10px] xl:bg-[#1e1c1dcc]">
            <ul className="flex items-center justify-between">


               {getRoutes().map((el, i) => {
                  if (el.link.startsWith("/")) {
                     return (
                        <li key={uuidv4()}>
                           <Link
                              className="monterey hidden text-[18px] font-semibold text-white xl:block 2xl:text-[22px] 3xl:text-[26px]"
                              to={el.link}
                           >
                              {el.title ? (
                                 el.title
                              ) : (
                                 // <picture>
                                 //     <source srcSet={`${el.iconAvif} 1x`} type="image/avif" />
                                 //     <img loading='lazy' className="3xl:w-[65px] 2xl:w-[57px] w-[47px]" src={el.icon} alt="Икша Кантри Клаб" />
                                 // </picture>
                                 <img loading='lazy'
                                    className="w-[47px] 2xl:w-[57px] 3xl:w-[65px]"
                                    src={el.icon}
                                    alt="Икша Кантри Клаб"
                                 />
                              )}
                           </Link>
                        </li>
                     )
                  } else {
                     return (
                        <li key={uuidv4()}>
                           <a
                              className="monterey hidden text-[18px] font-semibold text-white xl:block 2xl:text-[22px] 3xl:text-[26px]"
                              href={el.link}
                           >
                              {el.title ? (
                                 el.title
                              ) : (
                                 // <picture>
                                 //     <source srcSet={`${el.iconAvif} 1x`} type="image/avif" />
                                 //     <img loading='lazy' className="3xl:w-[65px] 2xl:w-[57px] w-[47px]" src={el.icon} alt="Икша Кантри Клаб" />
                                 // </picture>
                                 <img loading='lazy'
                                    className="w-[47px] 2xl:w-[57px] 3xl:w-[65px]"
                                    src={el.icon}
                                    alt="Икша Кантри Клаб"
                                 />
                              )}
                           </a>
                        </li>
                     )
                  }
               })}
            </ul>
         </nav>
         <button
            onClick={handleBurger}
            className="absolute left-10 top-10 xl:hidden"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="42"
               height="34"
               viewBox="0 0 42 34"
               fill="none"
            >
               <path
                  d="M33.2025 14.4563H5.49965C4.31302 14.4563 3.35107 15.298 3.35107 16.3363V16.5763C3.35107 17.6146 4.31302 18.4563 5.49965 18.4563H33.2025C34.3891 18.4563 35.3511 17.6146 35.3511 16.5763V16.3363C35.3511 15.298 34.3891 14.4563 33.2025 14.4563Z"
                  fill="url(#paint0_linear_56_1462)"
               />
               <path
                  d="M36.9339 26.6814H5.76822C4.43327 26.6814 3.35107 27.5231 3.35107 28.5614V28.8014C3.35107 29.8397 4.43327 30.6814 5.76822 30.6814H36.9339C38.2689 30.6814 39.3511 29.8397 39.3511 28.8014V28.5614C39.3511 27.5231 38.2689 26.6814 36.9339 26.6814Z"
                  fill="url(#paint1_linear_56_1462)"
               />
               <path
                  d="M36.9339 2.22974H5.76822C4.43327 2.22974 3.35107 3.07177 3.35107 4.11047V4.35056C3.35107 5.38927 4.43327 6.2313 5.76822 6.2313H36.9339C38.2689 6.2313 39.3511 5.38927 39.3511 4.35056V4.11047C39.3511 3.07177 38.2689 2.22974 36.9339 2.22974Z"
                  fill="url(#paint2_linear_56_1462)"
               />
               <defs>
                  <linearGradient
                     id="paint0_linear_56_1462"
                     x1="5.91465"
                     y1="16.6342"
                     x2="38.2187"
                     y2="16.6343"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stopColor="#AB8E67" />
                     <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                     id="paint1_linear_56_1462"
                     x1="6.23509"
                     y1="28.8593"
                     x2="42.5772"
                     y2="28.8593"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stopColor="#AB8E67" />
                     <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                     id="paint2_linear_56_1462"
                     x1="6.23509"
                     y1="4.40854"
                     x2="42.5772"
                     y2="4.40854"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop stopColor="#AB8E67" />
                     <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                  </linearGradient>
               </defs>
            </svg>
         </button>
         <div
            style={{ display: `${burgerState ? "flex" : "none"}` }}
            className="absolute left-20 top-20 z-20 flex-col gap-3 rounded-[10px] border-[2px] border-[#AB8E67] bg-[#221C1C] px-8 py-6 text-[#AB8E67] duration-300"
         >

            {getRoutes().map((el, i) => {
               if (el.title)
                  return (
                     <a
                        key={uuidv4()}
                        className="monterey text-[22px] font-semibold text-white"
                        href={el.link}
                     >
                        {el.title ? (
                           el.title
                        ) : (
                           // <picture>
                           //     <source srcSet={`${el.iconAvif} 1x`} type="image/avif" />
                           //     <img loading='lazy' className="w-[45px]" src={el.icon} alt="Икша Кантри Клаб" />
                           // </picture>
                           <img loading='lazy'
                              className="w-[45px]"
                              src={el.icon}
                              alt="Икша Кантри Клаб"
                           />
                        )}
                     </a>
                  )
            })}
            <div className="flex items-center gap-3">
               {getRoutes().map((el, i) => {
                  if (!el.title)
                     return (
                        <Link
                           key={uuidv4()}
                           className="monterey text-[22px] font-semibold text-white"
                           to={el.link}
                        >
                           {/*<picture>*/}
                           {/*    <source srcSet={`${el.iconAvif} 1x`} type="image/avif" />*/}
                           {/*    <img loading='lazy' className="w-[45px]" src={el.icon} alt="Икша Кантри Клаб" />*/}
                           {/*</picture>*/}
                           <img loading='lazy'
                              className="w-[45px]"
                              src={el.icon}
                              alt="Икша Кантри Клаб"
                           />
                        </Link>
                     )
               })}
            </div>
         </div>
      </m.header>
   )
}

export default Header
