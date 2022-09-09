import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
function CarouselSaturn() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return ( <div id="form-saturn">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Saturn </h2>
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
                src="https://solarsystem.nasa.gov/internal_resources/147/"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://ewscripps.brightspotcdn.com/dims4/default/e8014e8/2147483647/strip/true/crop/1100x619+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F8d%2F70%2Fca875bce4d778103dd57e7611e1e%2Fs103124044.JPG"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://images.indianexpress.com/2019/04/saturn-nasa-fbfeed.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://www.thestatesman.com/wp-content/uploads/2017/08/1492149753-saturn1.jpg"
              />
              
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    )
}

export default CarouselSaturn
