import React, { useEffect } from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function MarsOV() {
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
            <h1>Mars</h1>
            <p>
              Mars Günəşdən gələn dördüncü planetdir - tozlu, soyuq, çox nazik
              bir atmosferə sahib səhra dünyasıdır. Mars həm də mövsümləri, qütb
              buzlaqları, kanyonları, sönmüş vulkanları və keçmişdə daha da
              aktiv olduğunu sübut edən dinamik bir planetdir.Mars, Günəş
              sistemimizdə ən çox araşdırılmış cisimlərdən biridir və yad
              planetdə gəzmək üçün roverlər göndərdiyimiz yeganə planetdir.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-mars" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="form-mars" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="struc-mars" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="mars"
              src="https://solarsystem.nasa.gov/gltf_embed/2372"
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
            <h1><CountUp end={1}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={687}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={154.411}  decimals={3}/>M km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={13} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarsOV;
