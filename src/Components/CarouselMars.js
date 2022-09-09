import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import img from "../img/marscarousel.jpeg";
import "aos/dist/aos.css";
function CarouselMars() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return (
      <div id="form-mars">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Mars </h2>
          </div>
          <Carousel
            autoPlay
            infiniteLoop
            interval="3000"
            axis="vertical"
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            dynamicHeight={false}
            emulateTouch={true}
          >
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://mars.nasa.gov/system/news_items/main_images/8901_1-PIA24543-Curiosity's-Selfie-at-Mont-Mercou-main-web.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src={img}
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://share.america.gov/wp-content/uploads/2017/01/602861main_pia14293-amended-full_full.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://mars.nasa.gov/files/mepjpl/25640_PIA24264-Perseverance_Sol3_Mastcam-Z_panorama-web6.jpg"
              />
              
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    );
}

export default CarouselMars
