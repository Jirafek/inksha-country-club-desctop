import React from "react";

import Main from '../components/Home/Main';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Eat from '../components/Home/Eat';
import Locations from '../components/Home/Locations';
import Events from '../components/Home/Events';
import Gallery from '../components/Home/Gallery';
import Review from '../components/Home/Review';
import Bron from '../components/Home/Bron';
import Footer from '../components/Footer';
import Map from 'components/Home/Map/Map';


const Home = () => {
    return (
        <div>
            <Main />
            <Map />
            <About />
            <Happy />
            <Eat />
            <Locations />
            <Events />
            <Gallery />
            <Review />
            <Bron />
            <Footer />
        </div>
    )
}

export default Home;
