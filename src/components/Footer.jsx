import React from "react";
import routes from '../utils/routes';
import { v4 as uuid4 } from 'uuid';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full xl:h-[275px] sm:h-[410px] h-[500px] bg-[#201e1f] px-4 border-t-[1px] xl:border-t-transparent pt-5 flex flex-col justify-between border-t-[#AB8E67]">
            <ul className="flex justify-around flex-wrap gap-6">
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
                {/* <Link className="text-white md:text-[32px] text-[23px]" to={'/korporativy'}>
                    Корпоративы
                </Link> */}
            </ul>t
            <div className="flex xl:flex-row flex-col justify-center items-center xl:gap-20 gap-4 pb-2">
                <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" href="/pdf/confi.pdf" target="_blank">
                    Политика конфиденциальности
                </a>
                <Link className="text-white 2xl:text-[18px] text-[15px] font-medium underline" to="/rules">
                    Правила проживания
                </Link>
                <p className="text-white 2xl:text-[18px] text-[15px] text-center font-medium">
                    "Икша Кантри Клаб" <br />
                    Все права защищены Copyright © 2023
                </p>
                <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" href="/pdf/about.pdf">
                    Презентациия о нас
                </a>

                <a className="text-white 2xl:text-[18px] text-[15px] font-medium underline" href="/pdf/oferta.pdf" target="_blank">
                    Договор оферты
                </a>
            </div>
        </footer>
    );
}

export default Footer;
