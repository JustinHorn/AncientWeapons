import React, { useState, useEffect } from "react";

import Sword from "components/Sword";
import styles from "./displaystuff.module.css";

const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export default function DisplayStuff({ stuff }) {
  const { entries } = useStuff(stuff);
  return (
    <>
      <h1>Ancient {stuff[0].toUpperCase() + stuff.slice(1) + "s"}</h1>

      <div className={styles.swords}>
        {entries && entries.map((entry) => <Sword {...entry} />)}
      </div>
    </>
  );
}

function useStuff(stuff) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const query = getStuffQuery(stuff);

    fetchFromContentful(query).then((response) => {
      const items = response.data[stuff + "Collection"].items.map((item) => {
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

async function fetchFromContentful(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query,
      }),
    }
  ).then((res) => res.json());
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
