import React, { useEffect } from "react";
import CountUp from 'react-countup';
import {Link} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
function VenusOV() {
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
            <h1>Venera</h1>
            <p>
              Venera, Günəşdən gələn ikinci planetdir və dünyanın ən yaxın
              planet qonşusudur.Venera Dörd daxili, quru (və ya qayalı)
              planetlərdən biridir və ölçüsü və sıxlığı baxımından oxşar olduğu
              üçün bəzən Yerin əkizi adlandırılır.Veneranın səthində hava
              təzyiqi sarsıdıcıdır - Yer kürəsindən 90 qat daha çox . Yer üzündə
              okeanın bir mil altında qarşılaşacaq təzyiqə bənzəyir.
            </p>
          </div>
          <div className="planet-details">
          <Link   to="over-venus" smooth={true} duration={500}>   <button  className="planet-info">Ümumi Məlumat  <span></span><span></span><span></span><span></span></button></Link>
          <Link   to="form-venus" smooth={true} duration={500} > <button className="planet-info">Formalaşması  <span></span><span></span><span></span><span></span></button></Link>
          <Link  to="struc-venus" smooth={true} duration={500} > <button className="planet-info"> Daxili Quruluşu  <span></span><span></span><span></span><span></span></button></Link>
          </div>
        </div>
        <div className="image-png">
          <div className="iframe-planet">
            <iframe
            title="venus"
              src="https://solarsystem.nasa.gov/gltf_embed/2343"
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
            <h1><CountUp end={116}    /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Dövr etmə zamanı</small>
            <h1><CountUp end={225}  /> gün</h1>
          </div>
          <div className="planet-number">
            <small> Günəşdən olan məsafə</small>
            <h1><CountUp end={67} />M km</h1>
          </div>
          <div className="planet-number">
            <small> Orta temp.</small>
            <h1><CountUp end={452} />°C</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default VenusOV;
