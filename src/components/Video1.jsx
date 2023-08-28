import React from "react";

const Video1 = () => {
    return (
        <video className="w-screen h-screen absolute top-0 left-0" autoPlay loop muted>
            <source src={'/video/lesnaya.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default Video1;
