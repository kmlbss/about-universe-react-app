import React, { useEffect } from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function UranusOV() {
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
            <h1>Uran</h1>
            <p>
              Teleskop ilə tapılan ilk planet Uran 1781-ci ildə astronom William
              Herschel tərəfindən kəşf edildi, baxmayaraq ki, ilk başda bir
              kometa ya da bir ulduz olduğunu düşündü.İki il sonra, obyektin
              astronom Johann Elert Bode-nun müşahidələri sayəsində yeni bir
              planet olaraq qəbul edildi.Saturn, Yupiter və Neptun kimi Uran da
              halqalı  planetdir.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-uranus" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="form-uranus" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="struc-uranus" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="uranus"
              src="https://solarsystem.nasa.gov/gltf_embed/2344"
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
            <h1><CountUp end={0.17} decimals={2}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={84}  /> il</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={2.9}  decimals={1}/>B km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={-213} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default UranusOV;
