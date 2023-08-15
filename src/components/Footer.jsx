import React from "react";
import routes from '../utils/routes';
import { v4 as uuid4 } from 'uuid';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full md:h-[275px] sm:h-[350px] h-[390px] bg-[#201e1f] px-4 border-t-[1px] xl:border-t-transparent pt-5 flex flex-col justify-between border-t-[#AB8E67]">
            <div className="flex justify-around flex-wrap gap-6">
                {
                    routes.map((el, i) => {
                        if (!el.title) return;
                        if (el.link.includes('/')) {
                            return (
                                <Link key={uuid4()} className="text-white md:text-[32px] text-[23px]" to={el.link}>
                                    {
                                        el.title
                                    }
                                </Link>
                            );
                        } else {
                            return (
                                <a key={uuid4()} className="text-white md:text-[32px] text-[23px]" href={el.link}>
                                    {
                                        el.title
                                    }
                                </a>
                            );
                        }
                    })
                }
                <Link className="text-white md:text-[32px] text-[23px]" to={'/korporativy'}>
                    Корпоративы
                </Link>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-4">
                <Link className="text-white text-[18px] font-medium underline" to="/rules">
                    Правила проживания
                </Link>
                <p className="text-white text-[18px] text-center font-medium">
                    "Икша Кантри Клаб" <br />
                    Все права защищены Copyright © 2023
                </p>
                <Link className="text-white text-[18px] font-medium underline" to="/poli">
                    Политика данных
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
