import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Earth from "./Pages/Earth";
import Jupiter from "./Pages/Jupiter";
import Mars from "./Pages/Mars";
import Mercury from "./Pages/Mercury";
import Neptune from "./Pages/Neptune";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Venus from "./Pages/Venus";
function App() {
   
  return (
    <Router>
      <div className="App"> 
           <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>  
          <Route path="/earth"  element={<Earth/>} />
          <Route path="/jupiter" element={<Jupiter/>}/> 
          <Route path="/mars"  element={<Mars/>}/>
          <Route path="/mercury"  element={<Mercury/>} />
          <Route path="/neptune" element={<Neptune/>} />
          <Route path="/saturn"  element={<Saturn/>} />
          <Route path="/uranus" element={<Uranus/>}/> 
          <Route path="/venus"  element={<Venus/>} />
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
