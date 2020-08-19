import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import DisplayStuff from "components/DisplayStuff";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import fetchFromContentful,{getItemsArray} from "./helper/fetchFromContentful"

export default function App() {
  const activeStyle = { backgroundColor: "salmon", color: "white" }

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


  const query  =`{
    videoCollection {
      total
      items {
        name
        src
      }
    }
    }`;

    const [videos,setVideos] = useState([])


useEffect( () => {
  fetchFromContentful(query).then( response => {
    const vA = getItemsArray(response,"video").map( v => ({name:v.name,src:v.src}));
    setVideos(vA)
  
  })
},[]);



  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.navbar}>
          {stuff.map(({ name, stuff },index) => (
            <NavLink 
            key={index}
              className={styles.navBarLink}
              activeStyle={activeStyle}
              isActive={false}
              to={"/" + stuff + "/" + name}
            >
              {name}
            </NavLink>
          ))}



            <NavLink 
            key={-1}
              className={styles.navBarLink}
              activeStyle={activeStyle}
              isActive={false}
              to={"/video"}
            >
              Video
            </NavLink>
        </div>



        <Switch>
          <Route path="/video">
          <h1>Videos </h1>

          <div className={styles.videos}>
          {videos.map( v =>  (
            <div className={styles.entry}>
              <h2>{v.name}</h2>
            <iframe width="420" height="315"
            title={v.name}
            src={v.src}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
            </div>
          ))}
        </div>

          </Route>
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
