import React, { useState } from "react";
import styles from "./Features.module.css";
import fet1 from "../images/feature-1.png";
import fet2 from "../images/feature-2.png";
import fet3 from "../images/feature-3.png";
import fet4 from "../images/feature-4.png";
import fet5 from "../images/feature-5.png";
import fet6 from "../images/feature-6.png";
import fet7 from "../images/feature-7.png";
import fet8 from "../images/feature-8.png";
import { motion } from "framer-motion";
const Features = () => {
  let [active, setActive] = useState(0);
  let imArray = [fet1, fet2, fet3, fet4, fet5, fet6, fet7, fet8];
  return (
    <div className={styles.ftCont}>
      <div className={styles.upCont}>
        <h3 className={styles.header}>Discover Features</h3>
        <p className={styles.para}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          officia molestias at asperiores excepturi maiores magnam cupiditate et
          tempore distinctio!
        </p>
      </div>
      <div className={styles.dowCont}>
        <div className={styles.imgCont}>
          {imArray.map(
            (item, id) =>
              id == active && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  width="90%"
                  src={item}
                  alt=""
                />
              )
          )}
        </div>
        <div className={styles.linkCont}>
          <a
            style={
              active == 0
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(0)}
          >
            20+ Use Case-based App Pages
          </a>
          <a
            style={
              active == 1
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(1)}
          >
            100+ Components and Widgets
          </a>
          <a
            style={
              active == 2
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(2)}
          >
            Useful Chart Libraries
          </a>
          <a
            style={
              active == 3
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(3)}
          >
            Valid HTML5 + CSS3
          </a>
          <a
            style={
              active == 4
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(4)}
          >
            Built on Bootstrap 4 & SCSS
          </a>
          <a
            style={
              active == 5
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(5)}
          >
            Fully Responsive
          </a>
          <a
            style={
              active == 6
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(6)}
          >
            Beautiful UI
          </a>
          <a
            style={
              active == 7
                ? { color: "rgb(84, 185, 224)", fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => setActive(7)}
          >
            Free Updates & Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
