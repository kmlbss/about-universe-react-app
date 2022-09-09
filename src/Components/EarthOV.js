import React, { useEffect } from "react";
import AOS from "aos";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import "aos/dist/aos.css";
function EarthOV() {
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
            <h1>Yer</h1>
            <p>
              Yer planeti Günəşdən görə üçüncü planetdir və canlıların yaşadığı
              bu günə qədər bildiyimiz yeganə planetdir.Dünya Günəş sistemindəki
              ən böyük beşinci planet olsa da, günəş sistemində səthində maye su
              olan yeganə dünyadır. Ona yaxın Veneradan bir qədər böyük olan
              Yer, hamısı qayadan və metaldan hazırlanmış Günəşə ən yaxın dörd
              planetin ən böyüyüdür.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-earth" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="form-earth" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="struc-earth" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe title="earth"
              src="https://solarsystem.nasa.gov/gltf_embed/2392"
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
            <h1><CountUp end={0.99} start={0.01} decimals={2}/> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={365.26}  decimals={2}/> gün</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={94.390}  decimals={3}/>M km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={16}  />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default EarthOV;
