import React from "react";
import Header from "./../../common/Header";
import Hero from "./components/KorpHero";
import KorpLocations from "./components/KorpLocations";
import Photo from "./components/KorpPhoto";
import Add from "./components/KorpAdd";
import Form from "./components/KorpForm";

import Whyus from "./components/KorpWhyus";
const KorpLanding = () => {
   return (
      <div className="montserrat">
         <Header className="montserrat bg-korpHeader text-grey" />
         <Hero />
         <Whyus />
         <Photo />
         <KorpLocations />
         <Add />
         <Form />
      </div>
   );
};

export default KorpLanding;
