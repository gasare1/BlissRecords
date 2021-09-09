import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from "./Components/Pages/Homepage";
import HomepageCont from "./Components/Pages/HomepageCont";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Header />
      <Homepage />
      <HomepageCont />
    </Router>

  );
}

export default App;
