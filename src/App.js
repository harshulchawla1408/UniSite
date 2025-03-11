import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AdminHeader from "./Components/AdminHeader";
import SiteRoutes from './Components/SiteRoutes';
import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const userContext = createContext(null);

function App() {
  const [udata, setudata] = useState(null);
  useEffect(() => {
    if (sessionStorage.getItem("userdata") !== null) {
      setudata(JSON.parse(sessionStorage.getItem("userdata")));
    } 
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{ udata, setudata }}>
        {udata === null ? (
          <Header />
        ) : udata.usertype === "admin" ? (
          <AdminHeader />
        ) : (
          <Header />
        )}     
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SiteRoutes/>
      <Footer/>   
      </userContext.Provider>
      <ToastContainer theme ="colored"/>
    </div>
  );
}
export { userContext };
export default App;
