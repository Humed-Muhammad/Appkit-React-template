import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import imac from "../images/imac.png";
import logo from "../images/logo-icon.svg";
import { Button, Icon } from "semantic-ui-react";
import classnames from "classnames";

let homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      delayChildren: 1.5,
      staggerChildren: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
};

let item = {
  hidden: {
    opacity: 0,
    y: "50px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Home = ({ num, width }) => {
  let [height, setHeight] = useState(window.scrollY);
  let [list, setList] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
    setHeight(window.scrollY);
  }, [height]);
  console.log(height);

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      className={styles.homeCont}
    >
      
      <motion.nav
        style={
          num > 20
            ? {
                background: "white",
                boxShadow: "3px 3px 2px 2px lightgray",
                zIndex: 10,
              }
            : { background: "initial" }
        }
        className={classnames(styles.navBar)}
      >
        <div className={styles.logoCont}>
          <img
            style={
              num > 20
                ? {
                    color: "gray",
                    background: "rgb(84, 185, 224)",
                    padding: "6px",
                  }
                : { color: "white", padding: "10px" }
            }
            src={logo}
            alt=""
          />
          <span
            style={num > 20 ? { color: "gray" } : { color: "white" }}
            className={styles.span}
          >
            APPKIT
          </span>
        </div>
        <Icon
          color="black"
          inverted
          className={classnames(styles.toggelable, styles.toggel)}
          name={list ? "x" : "align left"}
          circular
          onClick={() => setList(!list)}
        />
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: list ? 200 : 0 }}
          className={classnames(
            styles.listCont,
            styles.absolute,
            list && styles.listed
          )}
        >
          <li className={styles.list}>
            <a
              className={classnames(styles.link, num > 20 && styles.link2)}
              onClick={() => setHeight(567)}
            >
              About
            </a>
          </li>
          <li className={styles.list}>
            <a
              className={classnames(styles.link, num > 20 && styles.link2)}
              onClick={() => setHeight(1267)}
            >
              Testmonials
            </a>
          </li>
          <li className={styles.list}>
            <a
              className={classnames(styles.link, num > 20 && styles.link2)}
              onClick={() => setHeight(2116)}
            >
              Features
            </a>
          </li>
          <li className={styles.list}>
            <a
              className={classnames(styles.link, num > 20 && styles.link2)}
              onClick={() => setHeight(2918)}
            >
              Pricing
            </a>
          </li>
          <li className={styles.list}>
            <a
              className={classnames(styles.link, num > 20 && styles.link2)}
              onClick={() => setHeight(3701)}
            >
              Contact
            </a>
          </li>
        </motion.ul>
      </motion.nav>
      <div className={styles.bodyCont}>
        <motion.div variants={item} className={styles.leftCont}>
          <motion.h2 variants={item} className={styles.header}>
            AppKit Landing is the perfect landing page template for your product
          </motion.h2>
          <motion.p variants={item} className={styles.para}>
            It helps you to build a beautiful and effective landing page to
            promote your product or side project!
          </motion.p>
          <Button className={styles.btn}>Download Now</Button>
        </motion.div>
        <motion.div variants={item} className={styles.rightCont}>
          <img width="84%" src={imac} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
