import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SiteRoutes from './Components/SiteRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <SiteRoutes/>
      <Footer/>   
    </div>
  );
}

export default App;
