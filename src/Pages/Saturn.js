import React from 'react' ;
import Footer from "../Components/Footer";
import AboutSaturn from '../Components/AboutSaturn';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SaturnOV from "../Components/SaturnOV";
import SaturnStruc from '../Components/SaturnStruc';
import Carousel from "../Components/CarouselSaturn";
//  import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
function Saturn() {
    return (
        <div>
               <SaturnOV/>
               <AboutSaturn/>
               <Carousel/>
               <SaturnStruc/>
            <Footer/>
         
        </div>
    )
}

export default Saturn
