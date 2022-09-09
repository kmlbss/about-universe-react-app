import React, { useEffect } from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function NeptuneOV() {
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
            <h1>Neptun</h1>
            <p>
              Qaranlıq, soyuq və səsdən sürətli küləklər tərəfindən çırpılmış
              buz nəhəngi Neptun günəş sisteminin səkkizinci,ən uzaq
              planetidir.Günəşdən Yerdən 30 qat daha çox məsafədə olan Neptun,
              günəş sistemində gözlə görünməyən yeganə planetdir və kəşfindən
              əvvəl riyaziyyatçılar tərəfindən proqnozlaşdırılan ilk planetdir.
              2011-ci ildə Neptun 1846-cı ildə kəşf edildiyi gündən bəri ilk 165
              illik orbitini tamamladı.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-neptune" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="form-neptune" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="struc-neptune" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="neptune"
              src="https://solarsystem.nasa.gov/gltf_embed/2364"
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
            <h1><CountUp end={0.16} start={0.01} decimals={1}/> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={165}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={4.5 } decimals={1}  />B km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={-200} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NeptuneOV;
