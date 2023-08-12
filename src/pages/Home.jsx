import React from "react";

import Main from '../components/Home/Main';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Eat from '../components/Home/Eat';
import Locations from '../components/Home/Locations';
import Events from '../components/Home/Events';
import Gallery from '../components/Home/Gallery';


const Home = () => {
    return (
        <div>
            <Main />
            <About />
            <Happy />
            <Eat />
            <Locations />
            <Events />
            <Gallery />
        </div>
    )
}

export default Home;
