import Home from "./Pages/Home";

import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userupdate from "./Pages/UserUpdate";
function App() {
  return (
    <>
       <Router>
     <Routes> 
       <Route path="/" element={<Home/>}/>
       <Route path="/update" element={<Userupdate/>}/>
     </Routes> 
     </Router>
    </>
  );
}

export default App;
