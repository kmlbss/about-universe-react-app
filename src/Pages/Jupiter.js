import React from "react";
// import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import JupiterOV from "../Components/JupiterOV";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutJupiter from "../Components/AboutJupiter";
import Footer from "../Components/Footer";
import JupiterStruc from "../Components/JupiterStruc";
import Carousel from "../Components/CarouselJup";
function Jupiter() {
  return (
    <div>
      <JupiterOV/>
      <AboutJupiter/>
      <Carousel/>
      <JupiterStruc/>
      <Footer/>
   

    </div>
  );
}

export default Jupiter;
