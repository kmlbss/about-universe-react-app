import React, { useEffect } from "react";
import CountUp from "react-countup";
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function JupiterOV() {
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
            <h1>Yupiter</h1>
            <p>
              Günəşdən beşinci sırada olan Yupiter, günəş sistemindəki ən böyük
              planetdir - digər planetlərin birləşməsindən iki qat daha
              çoxdur.Yupiterin tanış zolaqları və qıvrımları əslində hidrogen və
              helium atmosferində üzən soyuq, küləkli ammonyak və su
              buludlarıdır. Yupiterin simvolu olan Böyük Qırmızı Ləkə yüz
              illərdir davam edən Dünyadan daha böyük bir fırtınadır.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-jupiter" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="form-jupiter" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="struc-jupiter" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="jupiter"
              src="https://solarsystem.nasa.gov/gltf_embed/2375"
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
            <h1><CountUp end={0.9} start={0.01} decimals={1}/> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={11}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={468.898}  decimals={3}/>M km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={-150} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default JupiterOV;
