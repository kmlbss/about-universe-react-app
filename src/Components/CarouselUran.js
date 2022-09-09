import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
function CarouselUran() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return (
      <div id="form-uranus">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Uran </h2>
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
                src="https://i.pinimg.com/originals/d8/ba/02/d8ba02ded337161430f08e3124918a97.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://i2-prod.mirror.co.uk/science/article11370299.ece/ALTERNATES/s615/1_Uranus.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://static.dw.com/image/18594214_303.png"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://solarsystem.nasa.gov/system/resources/detail_files/452_PIA01279.jpg"
              />
              
            </div>
          </Carousel>
        </div>
        </div>
      </div>
    )
}

export default CarouselUran
