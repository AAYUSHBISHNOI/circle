import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
