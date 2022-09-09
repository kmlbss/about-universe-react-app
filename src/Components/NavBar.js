import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
function NavBar() {
    const [open,setOpen]=useState(false);
    // style={ open? {transform: "translateX(0)"}:{transform: "translateX(100%)"} }
    // onClick={()=>  setOpen(!open)}
    return (
        <nav className="navbar">
            <Link to="/"><h2>Planetlər</h2> 
            <img src="https://i.gifer.com/X118.gif" alt="logo"/> </Link>
            <ul className="navbar-links"  style={ open? {transform: "translateX(0)"}:{display: "flex"} }>
               <NavLink activeClassName="active-link" className="navbar-link" to="/mercury" onClick={()=>setOpen(!open)}> <li>Merkuri</li> </NavLink>
               <NavLink activeClassName="active-link" className="navbar-link"to="/venus" onClick={()=>setOpen(!open)}> <li>Venera</li></NavLink> 
               <NavLink activeClassName="active-link"className="navbar-link" to="/earth" onClick={()=>setOpen(!open)}><li>Yer</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/mars" onClick={()=>setOpen(!open)}> <li>Mars</li></NavLink>
               <NavLink activeClassName="active-link" className="navbar-link" to="/jupiter" onClick={()=>setOpen(!open)}><li>Yupiter</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/saturn" onClick={()=>setOpen(!open)}> <li>Saturn</li></NavLink>
               <NavLink activeClassName="active-link"className="navbar-link" to="/uranus" onClick={()=>setOpen(!open)}><li>Uran</li></NavLink> 
               <NavLink activeClassName="active-link" className="navbar-link" to="/neptune" onClick={()=>setOpen(!open)}> <li>Neptun</li></NavLink>
            </ul>
            <div className={`burger ${open ? "toggle" : ""}`}  onClick={() => setOpen(!open)} >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
             </div>
        </nav>
    )
}

export default NavBar
