import React from 'react';
import EarthOV from "../Components/EarthOV";
 import Footer from "../Components/Footer";
 import AboutEarth from '../Components/AboutEarth';
import Carousel from "../Components/CarouselEarth"; 
import EarthStruc from '../Components/EarthStruc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//  import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
function Earth() {
     
    return (
        <div>
           <EarthOV/>
           <AboutEarth/>
           <Carousel/>
           <EarthStruc/>
           <Footer/>
       
        </div>
    )
}

export default Earth
