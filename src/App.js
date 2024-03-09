import "./App.css"; 
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import See from "./components/See";
import Nav from "./components/Nav";
import BackToTop from "./components/Comman/BackToTop";
import { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos"
import Join from "./components/Join";
import Hero from "./components/Hero";
import Topdestination from "./components/Topdestination";
import Ourcustomers from "./components/Ourcustomer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  },[])
  
  return (
    <div className=" overflow-hidden">
      <Nav />
      <Hero/>
      <Topdestination/>
      <See />
      <Discover />
      <Ourcustomers/>
      <Explore />
      <Join/>
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
