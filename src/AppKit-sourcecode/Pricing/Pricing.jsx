import React from "react";
import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.prCont}>
      <div className={styles.upCont}>
        <h2 className={styles.header}>Pricing</h2>
        <p className={styles.para}>
          AppKit Landing's future updates are 100% FREE for existing customers
        </p>
      </div>
      <div className={styles.dowCont}>
        <div
          style={{ background: "rgba(32, 151, 32, 0.685)" }}
          className={styles.card}
        >
          <h4 className={styles.top}>Free</h4>
          <p className={styles.brak}>(CC BY 3.0)</p>
          <p className={styles.dollar}>$0</p>
          <p className={styles.desc}>
            Single installation Multiple installations Use without attribution
            link
          </p>
          <a className={styles.link}>License Details</a>
          <button className={styles.btn}>Get it now</button>
        </div>
        <div
          style={{ background: "rgb(61, 129, 207)" }}
          className={styles.card}
        >
          <h4 className={styles.top}>Single Application</h4>
          <p className={styles.brak}>(Commercial License)</p>
          <p className={styles.dollar}>$29</p>
          <p className={styles.desc}>
            Single installation Multiple installations Use without attribution
            link
          </p>
          <a className={styles.link}>License Details</a>
          <button className={styles.btn}>Get it now</button>
        </div>
        <div style={{ background: "rgb(230, 79, 20)" }} className={styles.card}>
          <h4 className={styles.top}>Multiple Applications</h4>
          <p className={styles.brak}>(Commercial License)</p>
          <p className={styles.dollar}>$99</p>
          <p className={styles.desc}>
            Single installation Multiple installations Use without attribution
            link
          </p>
          <a className={styles.link}>License Details</a>
          <button className={styles.btn}>Get it now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
