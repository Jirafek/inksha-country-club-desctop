import React, { useState } from "react";
import routes from '../../utils/routes';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { m } from "framer-motion";

const Header = () => {
    const [burgerState, setBurgerState] = useState(false);

    const handleBurger = () => {
        setBurgerState(!burgerState);
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
            className="w-full relative h-14 z-10">
            <nav className="py-[10px] px-10 flex items-center justify-between xl:bg-[#1e1c1dcc]">
                {
                    routes.map((el, i) => {
                        if (el.link.includes('/')) {
                            return (
                                <Link key={uuidv4()} className="3xl:text-[26px] hidden xl:block 2xl:text-[22px] text-[18px] text-white monterey font-semibold" to={el.link}>
                                    {
                                        el.title ?
                                            el.title
                                            :
                                            <img className="3xl:w-[65px] 2xl:w-[57px] w-[47px]" src={el.icon} alt="" />
                                    }
                                </Link>
                            );
                        } else {
                            return (
                                <a key={uuidv4()} className="3xl:text-[26px] hidden xl:block 2xl:text-[22px] text-[18px] text-white monterey font-semibold" href={el.link}>
                                    {
                                        el.title ?
                                            el.title
                                            :
                                            <img className="3xl:w-[65px] 2xl:w-[57px] w-[47px]" src={el.icon} alt="" />
                                    }
                                </a>
                            );
                        }
                    })
                }
            </nav>
            <button onClick={handleBurger} className="xl:hidden absolute top-10 left-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 42 34" fill="none">
                    <path d="M33.2025 14.4563H5.49965C4.31302 14.4563 3.35107 15.298 3.35107 16.3363V16.5763C3.35107 17.6146 4.31302 18.4563 5.49965 18.4563H33.2025C34.3891 18.4563 35.3511 17.6146 35.3511 16.5763V16.3363C35.3511 15.298 34.3891 14.4563 33.2025 14.4563Z" fill="url(#paint0_linear_56_1462)" />
                    <path d="M36.9339 26.6814H5.76822C4.43327 26.6814 3.35107 27.5231 3.35107 28.5614V28.8014C3.35107 29.8397 4.43327 30.6814 5.76822 30.6814H36.9339C38.2689 30.6814 39.3511 29.8397 39.3511 28.8014V28.5614C39.3511 27.5231 38.2689 26.6814 36.9339 26.6814Z" fill="url(#paint1_linear_56_1462)" />
                    <path d="M36.9339 2.22974H5.76822C4.43327 2.22974 3.35107 3.07177 3.35107 4.11047V4.35056C3.35107 5.38927 4.43327 6.2313 5.76822 6.2313H36.9339C38.2689 6.2313 39.3511 5.38927 39.3511 4.35056V4.11047C39.3511 3.07177 38.2689 2.22974 36.9339 2.22974Z" fill="url(#paint2_linear_56_1462)" />
                    <defs>
                        <linearGradient id="paint0_linear_56_1462" x1="5.91465" y1="16.6342" x2="38.2187" y2="16.6343" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#AB8E67" />
                            <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_56_1462" x1="6.23509" y1="28.8593" x2="42.5772" y2="28.8593" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#AB8E67" />
                            <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_56_1462" x1="6.23509" y1="4.40854" x2="42.5772" y2="4.40854" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#AB8E67" />
                            <stop offset="1" stopColor="#AB8E67" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>
            <div style={{ display: `${burgerState ? 'flex' : 'none'}` }} className="absolute top-20 left-20 flex-col z-10 duration-300 py-6 rounded-[10px] bg-[#221C1C] border-[2px] border-[#AB8E67] text-[#AB8E67] gap-3 px-8">
                {
                    routes.map((el, i) => {
                        if (el.title)
                            return (
                                <a key={uuidv4()} className="text-[22px] text-white monterey font-semibold" href={el.link}>
                                    {
                                        el.title ?
                                            el.title
                                            :
                                            <img className="w-[45px]" src={el.icon} alt="" />
                                    }
                                </a>
                            )
                    })
                }
                <div className="flex gap-3 items-center">
                    {
                        routes.map((el, i) => {
                            if (!el.title)
                                return (
                                    <Link key={uuidv4()} className="text-[22px] text-white monterey font-semibold" to={el.link}>
                                        <img className="w-[45px]" src={el.icon} alt="" />
                                    </Link>
                                )
                        })
                    }
                </div>
            </div>
        </m.header>
    )
}

export default Header;