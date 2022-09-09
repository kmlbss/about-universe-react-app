import React from 'react' ;
import Footer from "../Components/Footer";
import UranusOV from "../Components/UranusOV";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../Components/CarouselUran';
import UranStruc from '../Components/Uranstruc';
import AboutUranus from '../Components/AboutUranus';
//  import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function Uranus() {
    return (
        <div>
               <UranusOV/>
               <AboutUranus/>
               <Carousel/>
               <UranStruc/>
            <Footer/>
         
        </div>
    )
}

export default Uranus;