import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { client } from "./Client";

function App() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setEntries(response.items);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      {entries.map((x) => (
        <div>
          <h1>{x.name}</h1> <h3>{x.description}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
