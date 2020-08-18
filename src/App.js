import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import DisplayStuff from "components/DisplayStuff";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  const activeStyle = { backgroundColor: "salmon", color: "white" };
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.navbar}>
          {["sword", "dagger", "shield"].map((value) => (
            <NavLink
              className={styles.navBarLink}
              activeStyle={activeStyle}
              isActive={false}
              to={"/" + value}
            >
              {value[0].toUpperCase() + value.slice(1) + "s"}
            </NavLink>
          ))}
        </div>
        <Switch>
          <Route path="/:stuff">
            <DisplayStuff />
          </Route>
          <Route path="/">
            <Redirect to="/sword"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
