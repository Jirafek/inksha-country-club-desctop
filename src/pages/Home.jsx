import React from "react";

import Main from '../components/Home/Main';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Eat from '../components/Home/Eat';
import Locations from '../components/Home/Locations';


const Home = () => {
    return (
        <div>
            <Main />
            <About />
            <Happy />
            <Eat />
            <Locations />
        </div>
    )
}

export default Home;
