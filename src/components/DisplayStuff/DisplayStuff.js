import React, { useState, useEffect } from "react";

import Entry from "components/Enrtry";
import styles from "./displaystuff.module.css";

import { useParams } from "react-router-dom";

import fetchFromContentful, {getItemsArray} from "helper/fetchFromContentful"




export default function DisplayStuff() {
  const { stuff, name } = useParams();
  const { entries } = useStuff(stuff);
  return (
    <>
      <h1>Ancient {name}</h1>

      <div className={styles.entries}>
        {entries && entries.map((entry,index) => <Entry key={index} {...entry} />)}
      </div>
    </>
  );
}

function useStuff(stuff) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const query = getStuffQuery(stuff);

    fetchFromContentful(query).then((response) => {
      const items =getItemsArray(response,stuff).map((item) => {
        return {
          name: item.name,
          description: item.description,
          stats: item.stats,
          url: item.image.url,
        };
      });

      setEntries(items);
    });
  }, [stuff]);

  return { entries, setEntries };
}



function getStuffQuery(stuff) {
  return `
    {
      ${stuff}Collection {
        total
        items {
          name
          image {
            url
          }
          stats 
          description
        }
      }
    }`;
}


