import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Features from "./Features/Features.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Contact from "./Contact/Contact.jsx";
import Testmonial from "./Testmonial/Testmonials.jsx";
const App = () => {
  let [num, setNum] = useState(0);
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNum(window.scrollY);
      setWidth(window.screen.width);
    }, 1000);
  }, [window.scrollY, num, width]);
  console.log(width);
  return (
    <div className={styles.allCont}>
      <Home width={width} num={num} />
      <About />
      <Testmonial />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
};

export default App;
