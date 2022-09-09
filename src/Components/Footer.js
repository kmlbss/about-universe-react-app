import React,{useEffect} from "react";
import {Link} from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600, 
      delay: 300,
    });
  }, []);
  return (
    <div className="footer"  > 
      <div className="footer-container">
        <div className="footer-clm" data-aos="fade-up">
          <h3>Günəş Sistemi</h3>
          <div className="footer-content">
            <p>
              Günəş sistemi təqribən 100000 işıq ili ölçüsündə olan və içində
              200 milyarda qədər ulduz olan Milky Way qalaktikasında
              yerləşir. 
            </p>
          </div>
          <div className="emailus">
                    <h3 className="sosial-media"> Elektron poçt ünvanımız </h3>
                    <div className="footer-email">
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i> planets@gmail.com</a>  
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i> theplanets@br.ru</a> 
                    </div>
                    </div>
          </div>
          <div className="footer-clm" data-aos="fade-up">
          <h3 id="planets-h3" >Planetlər</h3> 
          <div className="footer-links">

                    <ul className="footer-link">
                    <Link  to="/mercury"> <li>Merkuri</li> </Link>
               <Link  to="/venera"> <li>Venera</li></Link> 
               <Link   to="/earth"><li>Yer</li></Link> 
               <Link   to="/mars"> <li>Mars</li></Link>
                    </ul> 
                    <ul className="footer-link"> 
               <Link  to="/jupiter"><li>Yupiter</li></Link> 
               <Link   to="/saturn"> <li>Saturn</li></Link>
               <Link  to="/uranus"><li>Uran</li></Link> 
               <Link  to="/neptune"> <li>Neptun</li></Link>

                    </ul>
          </div>
                    
                   <h3 className="sosial-media"> Sosial media  </h3>
                    <div className="footer-icons">
                    <a href="https://www.instagram.com/codersazerbaijan/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>  
                    <a href="https://www.instagram.com/codersazerbaijan/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a> 
                    <a href="https://www.instagram.com/codersazerbaijan/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>  
                    <a href="https://www.instagram.com/codersazerbaijan/" target="_blank"rel="noreferrer"><i className="fab fa-linkedin-in"></i></a> 
                    </div>
                
        </div>
        <div className="footer-clm  df-footer" data-aos="fade-up" >
                    <div className="source" >
                     <h3> Foto və Video </h3>
                     <a href="https://az.wikipedia.org/wiki/G%C3%BCn%C9%99%C5%9F_sistemi"  target="_blank" rel="noreferrer"> Google</a> 
                     <a href="https://www.youtube.com/watch?v=uD4izuDMUQA" target="_blank" rel="noreferrer"> YouTube</a> 
                     <a href="https://az.wikipedia.org/wiki/G%C3%BCn%C9%99%C5%9F_sistemi" target="_blank" rel="noreferrer"> Wikipedia</a> 
                     <a href="https://www.nasa.gov/multimedia/imagegallery/index.html" target="_blank" rel="noreferrer"> NASA Gallery</a> 
                    </div>
                   
                </div>
        </div> 
      </div> 
  );
}

export default Footer;
