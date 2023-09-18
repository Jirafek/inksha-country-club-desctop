import React from "react";

const Logo = ({ z }) => {
    return (
        // <picture>
        //     <source srcSet="/image/logo_iksha.avif 1x" type="image/avif" />
        //     <img style={z ? { zIndex: z } : {}} className="absolute sm:block hidden right-9 2xl:top-20 lg:top-14 top-2 2xl:w-auto w-[170px]" src="/image/logo_iksha.webp" alt="Икша Кантри Клаб" />
        // </picture>
    <img style={z ? { zIndex: z } : {}} className="absolute sm:block hidden right-9 2xl:top-20 lg:top-14 top-2 2xl:w-auto w-[170px]" src="/image/logo_iksha.webp" alt="Икша Кантри Клаб" />
    );
}

export default Logo;
