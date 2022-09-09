import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function CarouselVens() {
    useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
    return ( <div id="form-venus">
        <div className="container" data-aos="fade-up">
        <div className="allC-merc">
          <div className="section-heading">
            <h2> NASA Venera </h2>
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
                src="https://publika.az/storage/2021/02/26/800x450/venera1.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://i.ytimg.com/vi/4Z9rM8ChTjY/maxresdefault.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://www.siliconrepublic.com/wp-content/uploads/2017/02/Venus-surface-simulation-718x523.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://s3.amazonaws.com/images.spaceref.com/news/2020/oovenus_current_and_ancient.jpg"
              />
              
            </div>
          </Carousel>
        </div>
        </div>
      </div>
    )
}

export default CarouselVens
