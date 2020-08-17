import React from "react";
import styles from "./Sword.module.css";

function Sword(entries) {
  return (
    <div className={styles.sword}>
      <h1>{entries.name}</h1>
      <div className={styles.horizontal}>
        <div className={styles.box}>
          <p>{entries.description}</p>
          <table className={styles.table}>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
            {Object.keys(entries.stats).map((key, index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{entries.stats[key]}</td>
              </tr>
            ))}
          </table>
        </div>

        <img className={styles.image} src={entries.url} alt="sword" />
      </div>
    </div>
  );
}

export default Sword;
