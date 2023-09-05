import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#201E1F] flex justify-center items-center">
            <div className="h-full flex justify-center items-center">
                <div className="lg:w-[770px] lg:h-[760px] sm:w-[500px] w-[380px] sm:h-[500px] h-[420px] bg-[#75624A] border-[#AB8E67] border-[2px] rounded-[40px] lg:px-[90px] px-[50px] py-9 flex flex-col items-center justify-center">
                    <p className="lg:text-[32px] sm:text-[22px] text-[18px] text-white font-semibold text-center mb-24">Спасибо за то, что выбрали нас! <br />Наш менеджер скоро свяжется с вами!</p>
                    <Link className="lg:text-[32px] sm:text-[22px] text-[18px] text-white font-medium py-[15px] sm:px-[60px] px-[15px] bg-[rgb(171,_142,_103)] border-[4px] border-[#AB8E67] rlg:rounded-[30px] rounded-[20px]" to="/">
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Thanks;
