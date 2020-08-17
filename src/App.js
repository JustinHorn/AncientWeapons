import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import DisplayStuff from "components/DisplayStuff";
//import { NavLink, Switch, Route } from "react-router-dom";

export default function App() {
  const [stuff, setStuff] = useState("sword");

  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.App}>
      {stuff === "sword" && (
        <button onClick={() => setStuff("dagger")}>Daggers</button>
      )}
      {stuff === "dagger" && (
        <button onClick={() => setStuff("sword")}>Swords</button>
      )}

      <DisplayStuff stuff={stuff} />
    </div>
  );
}
