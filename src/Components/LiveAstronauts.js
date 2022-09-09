import React from "react"; 
function LiveAstronauts(props) { 
  // const ims=props.images.filter(a=> a.name===props.name );
   return  (
      <div className="oneby" >
       <img src="https://wallpaperaccess.com/full/1584.jpg" alt="asrt"/>
        <h3>{props.name}</h3>
        <p> <span>Kosmik Gəmi:</span>{props.craft}</p>
  </div>
  )
  ;
}

export default LiveAstronauts;
