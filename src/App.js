import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from "./Components/Pages/Homepage";
import HomepageCont from "./Components/Pages/HomepageCont";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blank from './Components/Pages/BlankSpace'
import Contact from "./Components/Pages/Contact";
import image1 from './Images/goldbackground.jpg'
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Footer/Footer";
import News from "./Components/Pages/News";



const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <div >
      <Router>

        <Header />
        <Homepage />
        <HomepageCont />
        <Blank />
        <News />
        <Contact  path="/contact" component={Contact} exact />
        <Footer  style={{ background: ' #000' }} />
      </Router>
    </div>

  );
}

export default App;
