import React, { useEffect, useState } from "react";
import "./App.css";

import { client } from "./Client";

function App() {
  const [entries, setEntries] = useState({});

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        // items
        // 0
        // fields
        // name , image {}, description: "...."
        //image: fields:  file url
        const value = {
          name: response.items[0].fields.name,
          description: response.items[0].fields.description,
          url: response.items[0].fields.image.fields.file.url,
        };
        setEntries(value);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <Sword {...entries} />
    </div>
  );
}

//...
function Sword(entries) {
  return (
    <>
      <h1>{entries.name}</h1>
      <img src={entries.url} alt="sword" />
      <p>{entries.description}</p>
    </>
  );
}

export default App;
