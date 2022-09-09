import React,{useEffect} from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
function MilkyWay() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 600, 
          delay: 300,
        });
      }, []);
    return (
        <div className="milky-way" data-aos="fade-up">
       <img  src="https://www.pakistanchristian.tv/wp-content/uploads/2021/05/1621406599_26_When-was-the-Milky-Way-New-research-on-the-age.jpg" alt="milky way"/>
       <div className="milky-overlay">
            <div className="milky-txt">
                <p>200 milyard <i style={ {color:"#bb86fc"}}className="far fa-star"></i></p>
                <p>Günəş sisteminin Milky Way boyunca səyahət etməsi 230m il çəkir </p>
                <p> Bir çox ulduz  Günəşdən(4,5 milyard il) yaşlıdır</p>
            </div>
       </div>
      
       </div> 
    )
}

export default MilkyWay
