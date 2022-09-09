import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import {Link} from "react-scroll";
import "aos/dist/aos.css";
function MercuryOV() {
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
            <h1>Merkuri</h1>
            <p>
              Günəş sistemindəki ən kiçik və Günəşə ən yaxın planet olan Merkuri
              Yerin Ayından az fərqlə böyükdür.Merkurinin səthindən Günəş Yerdən
              göründüyündən üç qat daha böyük görünür və gün işığı yeddi qat
              daha parlaq olur.Günəşə yaxın olmasına baxmayaraq, Merkuri günəş
              sistemimizdəki ən isti planet deyil
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-mercury" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="form-mercury" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="struc-mercury" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe
              title="mercuryr"
              src="https://solarsystem.nasa.gov/gltf_embed/2369"
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
            <h1>
              <CountUp end={58} /> gün
            </h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1>
              <CountUp end={88} /> gün
            </h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1>
              <CountUp end={43.342} start={0.01} decimals={3} />M km
            </h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1>
              <CountUp end={178} />
              °C
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MercuryOV;
