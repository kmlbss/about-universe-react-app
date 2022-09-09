import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
function CarouselNept() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return (
      <div id="form-neptune">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Neptun  </h2>
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
                src="https://cdn.akamai.steamstatic.com/steam/apps/500461/ss_151eba341b6b340886a9f2cd49acc31e07a5bf4f.1920x1080.jpg?t=1560244604"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/1095/2016/11/03155708/OSC_Astro_11_03_High.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://www.universetoday.com/wp-content/uploads/2012/03/Triton_ESO.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Neptune%2C_Earth_size_comparison.jpg/1200px-Neptune%2C_Earth_size_comparison.jpg"
              />
              
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    )
}

export default CarouselNept
