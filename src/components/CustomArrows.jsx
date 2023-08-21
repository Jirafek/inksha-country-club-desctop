import React from "react";

const CustomNextArrow = (props) => {
    const { onClick, top = "", url = "" } = props;
    return (
        <div
            className={`arrow next-arrow ${(!top) ? 'bottom-1/2' : ''} sm:h-[80px] h-[50px] sm:w-[80px] w-[50px] absolute right-2 z-20 cursor-pointer`}
            onClick={onClick}
            style={top ?
                { top: top, backgroundImage: `url(${url ? url : '/image/arrow.webp'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
                { backgroundImage: `url(${url ? url : '/image/arrow.webp'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', transform: 'transalteY(-50%)', right: `${url ? '20px' : '8px'}` }}
        ></div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick, top = "", url = "" } = props;
    return (
        <div
            className={`arrow prev-arrow rotate-180 ${(!top) ? 'bottom-1/2' : ''} sm:h-[80px] h-[50px] sm:w-[80px] w-[50px] absolute left-2 z-20 cursor-pointer`}
            onClick={onClick}
            style={top ?
                { top: top, backgroundImage: `url(${url ? url : '/image/arrow.webp'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
                { backgroundImage: `url(${url ? url : '/image/arrow.webp'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', transform: 'transalteY(-50%)', left: `${url ? '20px' : '8px'}` }}
        ></div>
    );
};

export { CustomNextArrow, CustomPrevArrow };