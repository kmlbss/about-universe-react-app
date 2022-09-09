import React from "react";
import MercuryOV from "../Components/MercuryOV";
import Footer from "../Components/Footer";
import AboutMerc from "../Components/AboutMerc";
import Carousel from "../Components/CarouselMerc";
import MercuryStruc from "../Components/MercuryStruc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
function Mercury() {
  return (
    <div>
      <MercuryOV />
      <AboutMerc />
      <Carousel />
      <MercuryStruc/>
      <Footer />
  
    </div>
  );
}

export default Mercury;
