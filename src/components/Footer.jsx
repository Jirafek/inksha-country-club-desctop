import React from "react";
import routes from '../utils/routes';
import { v4 as uuid4 } from 'uuid';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full absolute bottom-0 md:h-[275px] h-[330px] bg-[#201e1fc6] px-4 border-t-[1px] xl:border-t-transparent pt-5 flex flex-col justify-between border-t-[#AB8E67]">
            <div className="flex justify-around flex-wrap gap-6">
                {
                    routes.map((el, i) => {
                        if (!el.title) return;

                        return (
                            <Link className="text-white md:text-[32px] text-[23px]" to={el.link}>
                                {
                                    el.title
                                }
                            </Link>
                        );
                    })
                }
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
