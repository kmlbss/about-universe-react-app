import React from 'react'
import clip from '../Videos/solar.mp4'; 
import {Link} from "react-scroll";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from 'react';
function HomeHeader() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600, 
          delay: 300,
        });
      }, []);
    return (
        <div>
             <div> 
    <video autoPlay loop={true}  muted  id="background-video">
      <source src={clip} type='video/mp4' />   
      <source src={clip} type="video/webm"/>
      <source src={clip} type="video/ogg" /> Your browser does not support the video tag. 
    </video>
        </div>
      <div className="header"   data-aos="fade-up"   >
        <div className="header-txt">
          <h1> Günəş Sistemi </h1>
          <p>
            Günəş Sistemi Günəş və onun cazibə qüvvəsinin təsirində olan səkkiz
            planetlə onların məlum 166 təbii peyki, beş kiçik planet və
            milyardlarla kiçik göy cisimlərindən ibarətdir. Göy cisimləri
            qrupuna asteroidlər, Koyper qurşağındakı cisimlər, kometlər,
            meteorlar və planetlərarası mühit-qaz və toz daxildir.
          </p>
        </div>
        <div className="details" >
        <Link   to="over-solar" smooth={true} duration={500}> <button className="link-info">Ümumi Məlumat <span></span><span></span><span></span><span></span></button></Link>
        <Link   to="over-cosmos" smooth={true} duration={500}>  <button className="link-info"> Kosmosda Yaşam axtarışı <span></span><span></span><span></span><span></span></button></Link>
        <Link   to="over-sun" smooth={true} duration={500}> <button className="link-info">Günəş <span></span><span></span><span></span><span></span></button></Link>
        </div>
      </div> 
        </div>
    )
}

export default HomeHeader
