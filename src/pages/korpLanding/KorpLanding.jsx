import React from "react";
import Header from "./../../common/Header";
import Hero from "./components/Hero";
import Photo from "./components/Photo";
import Add from "./components/Add";

import Whyus from "./components/Whyus";
const KorpLanding = () => {
   return (
      <div className="monterey">
         <Header className="monterey bg-korpHeader text-grey" />
         <Hero />
         <Whyus />
         <Photo />
         <Add />
      </div>
   );
};

export default KorpLanding;
