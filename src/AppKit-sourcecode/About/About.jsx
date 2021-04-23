import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import html from "../images/logo-html5.svg";
import css from "../images/logo-css3.svg";
import boot from "../images/logo-bootstrap.svg";
import sass from "../images/logo-sass.svg";
import jquery from "../images/logo-jquery.svg";
import figure1 from "../images/figure-1.png";
import figure2 from "../images/figure-2.png";
import figure3 from "../images/figure-3.png";
import { motion } from "framer-motion";
import classnames from "classnames";

const About = () => {
  let [y, setY] = useState(300);

  let [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos >= y;
      setIsScroll(isScrollingUp);
    }
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  console.log(isScroll);
  let parent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delayChildren: 0.3,
        staggerChildren: 0.3,
        ease: "easeIn",
      },
    },
  };
  let children = {
    hidden: {
      opacity: 0,
      y: "60px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  let icon = {
    hidden: { opacity: 0, x: "-50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate={isScroll ? "visible" : "hidden"}
      className={styles.aboutCont}
    >
      <motion.div className={styles.upperCont}>
        <motion.h2 variants={children} className={styles.header}>
          Why Use AppKit Landing?
        </motion.h2>
        <motion.p variants={children} className={styles.para}>
          Appkit Landing uses modern front-end technologies and is packed with
          useful components and widgets to speed up your development
        </motion.p>
        <motion.div className={styles.icons}>
          <motion.img variants={icon} src={html} alt="" />
          <motion.img variants={icon} src={css} alt="" />
          <motion.img variants={icon} src={boot} alt="" />
          <motion.img variants={icon} src={sass} alt="" />
          <motion.img variants={icon} src={jquery} alt="" />
        </motion.div>
      </motion.div>
      <motion.div className={styles.bottomCont}>
        <motion.div variants={children} className={styles.cont}>
          <img width="50%" src={figure1} alt="" />
          <h4 className={styles.head}>Benefit Lorem Ipsum</h4>
          <p className={classnames(styles.pa, styles.paragraph)}>
            List one of your product's benefits here. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </p>
        </motion.div>
        <motion.div variants={children} className={styles.cont}>
          <img width="50%" src={figure2} alt="" />
          <h4 className={styles.head}>Benefit Lorem Ipsum</h4>
          <p className={classnames(styles.pa, styles.paragraph)}>
            List one of your product's benefits here. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </p>
        </motion.div>
        <motion.div variants={children} className={styles.cont}>
          <img width="50%" src={figure3} alt="" />
          <h4 className={styles.head}>Benefit Lorem Ipsum</h4>
          <p className={classnames(styles.pa, styles.paragraph)}>
            List one of your product's benefits here. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
