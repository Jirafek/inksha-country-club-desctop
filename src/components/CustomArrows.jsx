import React from "react";

const CustomNextArrow = (props) => {
    const { onClick, top = "" } = props;
    return (
        <div
            className="arrow next-arrow h-[80px] w-[80px] absolute right-2 z-20"
            onClick={onClick}
            style={top ?
                { top: top, backgroundImage: "url(/image/arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
                { backgroundImage: "url(/image/arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', bottom: '50%', transform: 'transalteY(-50%)' }}
        ></div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick, top = "" } = props;
    return (
        <div
            className="arrow prev-arrow rotate-180 h-[80px] w-[80px] absolute left-2 z-20"
            onClick={onClick}
            style={top ?
                { top: top, backgroundImage: "url(/image/arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } :
                { backgroundImage: "url(/image/arrow.png)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', bottom: '50%', transform: 'transalteY(-50%)' }}
        ></div>
    );
};

export { CustomNextArrow, CustomPrevArrow };