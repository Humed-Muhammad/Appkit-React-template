import React from "react";
import styles from "./Testmonials.module.css";
import profile1 from "../images/profile-1.png";
import profile2 from "../images/profile-2.png";
import profile3 from "../images/profile-3.png";
import profile4 from "../images/profile-4.png";

const Testmonials = () => {
  return (
    <div className={styles.TsCont}>
      <h1 className={styles.header}>Happy Customers</h1>
      <div className={styles.cont}>
        <img src={profile1} />
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas
          dolore quam similique velit
        </p>
      </div>
      <div className={styles.cont}>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas
          dolore quam similique velit
        </p>
        <img src={profile2} />
      </div>
      <div className={styles.cont}>
        <img src={profile3} />
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas
          dolore quam similique velit
        </p>
      </div>
      <div className={styles.cont}>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas
          dolore quam similique velit 
        </p>
        <img src={profile4} />
      </div>
    </div>
  );
};

export default Testmonials;
