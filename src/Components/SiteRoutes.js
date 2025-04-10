import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Resources from "./Resources";
import Admin from "./Admin";
// import FilterStudents from "./FilterStudents";
// import FilterPage from "./FilterPage";
import ExcelFilterForm from "./ExcelFilterForm";

function SiteRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/about" element={<About/>}/> */}
            <Route path="/admin" element={<Admin/>}/>
            {/* <Route path="/filter" element={<FilterStudents/>}/> */}
            <Route path="/filter" element={<ExcelFilterForm />} />
            <Route path="/resources" element={<Resources/>}/>
        </Routes></>
    )

}
export default SiteRoutes; 