import React from "react";
import LocationArrow from './icons/LocationArrow';
import { Link, useNavigate } from "react-router-dom";

const Title = ({ text, bg = "", isNeedBack = false, isMain = false }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };

    return (
        <div className="absolute lg:top-16 top-8 lg:left-52 left-12">
            <div className="relative flex gap-4">
                {
                    isNeedBack && <button onClick={goBack} className="w-[40px] rotate-180 z-10 hover:-translate-x-2 duration-300">
                        <LocationArrow />
                    </button>
                }

                <div style={bg ? { backgroundColor: bg } : {}} className="border border-[#AB8E67] rounded-sm px-[50px] py-[6px] text-white text-[20px] font-bold">
                    {isMain ? <h1 className='m-0'>{text}</h1> : <>{text}</>}
                </div>
            </div>
        </div>
    );
}

export default Title;
