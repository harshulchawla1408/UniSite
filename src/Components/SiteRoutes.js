import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Resources from "./Resources";
import AboutTeam from "./AboutTeam";
import Admin from "./Admin";
import ExcelFilterForm from "./ExcelFilterForm";
import { useContext } from "react";
import { userContext } from "../App";
function SiteRoutes() {
    const { udata } = useContext(userContext);
    const Navigate = useNavigate();
    const isAdmin = udata && udata.usertype === "admin";
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin" element={isAdmin ? <Admin/> : <Navigate to="/home" replace />} />
            <Route path="/filter" element={isAdmin ? <ExcelFilterForm /> : <Navigate to="/home" replace />} />
            {(!isAdmin) && <Route path="/resources" element={<Resources/>}/>} 
            <Route path="/cseteam" element={<AboutTeam/>}/>
        </Routes></>
    )
}
export default SiteRoutes; 