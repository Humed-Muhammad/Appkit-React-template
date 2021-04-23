import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.allCont}>
      <h1 className={styles.header}>Contact Us</h1>
      <p className={styles.para}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        consequatur, itaque quasi et tempore.
      </p>
      <button className={styles.btn}>Get in Touch</button>
    </div>
  );
};

export default Contact;
