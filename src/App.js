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

  const stuff = [
    {
      name: "Swords",
      stuff: "sword",
    },
    {
      name: "Daggers",
      stuff: "dagger",
    },
    {
      name: "Shields",
      stuff: "shields",
    },

    {
      name: "Armor",
      stuff: "armor",
    },
    {
      name: "Siege Weapons",
      stuff: "siege",
    },
    {
      name: "Other",
      stuff: "other",
    },
  ];

  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.navbar}>
          {stuff.map(({ name, stuff }) => (
            <NavLink
              className={styles.navBarLink}
              activeStyle={activeStyle}
              isActive={false}
              to={"/" + stuff + "/" + name}
            >
              {name}
            </NavLink>
          ))}
        </div>
        <Switch>
          <Route path="/:stuff/:name">
            <DisplayStuff />
          </Route>
          <Route path="/">
            <Redirect to="/sword/Swords"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
