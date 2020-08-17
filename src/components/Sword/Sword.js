import React from "react";
import styles from "./Sword.module.css";

function Sword(entries) {
  return (
    <div className={styles.sword}>
      <h1>{entries.name}</h1>
      <img src={entries.url} alt="sword" />
      <table>
        <tr>
          <th>attribute</th>
          <th>value</th>
        </tr>
        {Object.keys(entries.stats).map((key, index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>{entries.stats[key]}</td>
          </tr>
        ))}
      </table>
      <p>{entries.description}</p>
    </div>
  );
}

export default Sword;
