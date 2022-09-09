import React, { useState, useEffect } from "react";
import HomeHeader from "../Components/HomeHeader";
import Universe from "../Components/Universe";
// import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import AOS from "aos";
import Footer from "../Components/Footer";
import LiveAstronauts from "../Components/LiveAstronauts";
import TheSun from "../Components/TheSun";
import MilkyWay from "../Components/MilkyWay";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  const [astronaut, setAstronaut] = useState([]);
   
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let final = await fetch(`http://api.open-notify.org/astros.json?`).then(
      (a) => a.json()
    );
    setAstronaut(final.people);
  }
  return (
    <div>
      <HomeHeader />
      <Universe />
      <div id="over-cosmos">
        <div className="astronauts" data-aos="fade-up">
          <div className="container">
            <div className="section-heading">
              <h2> Hazırda Kosmosda olan Astronavtlar </h2>
            </div>
            <div className="astronaut" data-aos="fade-up">
              {astronaut &&
                astronaut.map((a) => {
                  return (
                    <LiveAstronauts
                      key={a.name}
                      name={a.name} 
                      craft={a.craft}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <TheSun />
      <MilkyWay />
      <Footer />
    
    </div>
  );
}

export default Home;
