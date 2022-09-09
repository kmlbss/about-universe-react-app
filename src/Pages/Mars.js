import React from 'react';
import MarsOV from "../Components/MarsOV";
import Footer from "../Components/Footer";
import AboutMars from '../Components/AboutMars';
import Carousel from "../Components/CarouselMars";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MarsStruc from '../Components/MarsStruc';
// import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
function Mars() {
    return (
        <div>
            <MarsOV/>
            <AboutMars/>
            <Carousel/>
            <MarsStruc/>
            <Footer/>
     
        </div>
    )
}

export default Mars
