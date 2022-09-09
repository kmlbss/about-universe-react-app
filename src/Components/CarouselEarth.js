import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function CarouselEarth() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600,
          delay: 300,
        });
      }, []);
    return (
      <div  id="form-earth">
        <div className="container" data-aos="fade-up" >
        <div className="allC-merc">
          <div className="section-heading"   >
            <h2> NASA Yer kürəsi </h2>
          </div >
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
                src="https://img1.goodfon.com/wallpaper/nbig/5/6f/nasa-photo-night-earth.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://images.theconversation.com/files/148168/original/image-20161130-17040-m6n6nw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://blog.horyou.com/wp-content/uploads/2019/07/NASA-cover.jpg"
              />
              
            </div>
            <div className="carousel-merc">
              <img
                alt="caouselMerc"
                src="https://static.dw.com/image/40327423_101.jpg"
              />
              
            </div>
          </Carousel>
        </div>
      </div>
      </div>
    )
}

export default CarouselEarth
