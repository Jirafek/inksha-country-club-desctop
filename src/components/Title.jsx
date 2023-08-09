import React from "react";

const Title = ({ text }) => {
    return (
        <div className="absolute lg:top-16 top-8 lg:left-52 left-12 border border-[#AB8E67] rounded-sm px-[50px] py-[6px] text-white text-[20px] font-bold">
            {text}
        </div>
    );
}

export default Title;
