import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
function CarouselMerc() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <div id="form-mercury">
    <div className="container" data-aos="fade-up">
      <div className="allC-merc">
        <div className="section-heading">
          <h2> NASA Merkuri </h2>
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
              src="https://solarsystem.nasa.gov/system/resources/detail_files/773_PIA16388_detail.jpg"
            />
            
          </div>
          <div className="carousel-merc">
            <img
              alt="caouselMerc"
              src="https://solarsystem.nasa.gov/system/resources/detail_files/531_PIA17386.jpg"
            />
            
          </div>
          <div className="carousel-merc">
            <img
              alt="caouselMerc"
              src="https://solarsystem.nasa.gov/system/resources/detail_files/771_PIA16853.jpg"
            />
            
          </div>
          <div className="carousel-merc">
            <img
              alt="caouselMerc"
              src="https://lh3.googleusercontent.com/EAjBQnJRpG21SErpwDfrA-m75V7o-9nAPoBSISsJZLH6dICAtjD4K1bGZrO-JsuI7pyQ5S5RboZ1vcXJLYHru6X_Kmwl0RrOWBWRjhoP1s6YyouYe1HTotdvOYd8odH4prW2zwE"
            />
            
          </div>
        </Carousel>
      </div>
    </div>
    </div>
  );
}

export default CarouselMerc;
