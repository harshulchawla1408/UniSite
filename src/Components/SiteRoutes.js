import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Resources from "./Resources";

function SiteRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resources" element={<Resources/>}/>
        </Routes></>
    )

}
export default SiteRoutes; 