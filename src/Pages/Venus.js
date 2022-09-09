 import React from 'react';
 import VenusOV from "../Components/VenusOV";
 import Footer from "../Components/Footer";
 import AboutVens from '../Components/AboutVens';
 import Carousel from "../Components/CarouselVens";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VensStruc from '../Components/VensStruc';
//  import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
 
 function Venus() {
     return (
         <div>
             <VenusOV/>
             <AboutVens/>
             <Carousel/>
             <VensStruc/>
              <Footer/>
         
         </div>
     )
 }
 
 export default Venus
 