import React, { useEffect } from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function SaturnOV() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  return (
    <>
      <div className="planet-overview" data-aos="fade-up">
        <div className="overview-txt">
          <div className="planet">
            <h1>Saturn</h1>
            <p>
              Saturn günəşdən altıncı planet və günəş sistemimizin ikinci ən
              böyük planetidir. Minlərlə gözəl ringlet ilə bəzədilmiş Saturn
              planetlərin arasında misilsizdir. Buz və qaya parçaları
              halqalarına sahib olan tək planet deyil, lakin heç biri Saturn
              kimi möhtəşəm və ya mürəkkəb deyil.Yupiter kimi, Saturn da əsasən
              hidrogen və helyumdan yaranmış nəhəng bir topdur.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-saturn" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="form-saturn" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="struc-saturn" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="saturn"
              src="https://solarsystem.nasa.gov/gltf_embed/2355"
              width="100%"
              height="100%"
              frameBorder="0"
              className="mercury-ifr"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="planet-numbers ">
          <div className="planet-number">
            <small> Fırlanma Zamanı</small>
            <h1><CountUp end={0.10} decimals={2}  /> gün</h1> 
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={29.4} decimals={1} /> il</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={1.4}  />B km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={-176} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaturnOV;
