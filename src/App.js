import "./App.css"; 
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import BackToTop from "./components/common/BackToTop";
import { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos"
import Join from "./components/JoinUs";
import Hero from "./components/Hero";
import Ourcustomers from "./components/OurCustmores";
import Destination from "./components/Destination";
import SeeHow from "./components/SeeHow";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  },[])
  
  return (
    <div className=" overflow-hidden">
      <Nav />
      <Hero/>
      <Destination/>
      <SeeHow/>
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
