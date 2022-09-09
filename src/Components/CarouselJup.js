import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
function CarouselJup() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return (
      <div id="form-jupiter">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Yupiter </h2>
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
                src="https://cdn.cnn.com/cnnnext/dam/assets/181215042152-nasa-juno-01-exlarge-169.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://ogrencikariyeri.com//AdminFiles/CMS/Content/wp-content/uploads/2020/10/jupiter.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://solarsystem.nasa.gov/system/resources/list_images/803_192016main_100907_11_thumb.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://www.idevice.ro/wp-content/uploads/2019/09/Planeta-Jupiter.-Imagine-UILITOR-de-RARA-care-a-SOCAT-si-NASA.jpg"
              />
              
            </div>
          </Carousel>
        </div>
      </div>
      </div>
      
    )
}

export default CarouselJup
