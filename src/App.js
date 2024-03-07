import "./App.css"; 
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Jion from "./components/Jion";
import See from "./components/See";
import Top from "./components/Top";
import What from "./components/What";
import Header from "./components/Header";
import Nav from "./components/Nav";
import BackToTop from "./components/BackToTop";
import { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos"

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  },[])
  
  return (
    <div className=" overflow-hidden">
      <Nav />
      <Header />
      <Top />
      <See />
      <Discover />
      <What />
      <Explore />
      <Jion />
      <Footer />
      <BackToTop/>
    </div>
  );
}

export default App;
