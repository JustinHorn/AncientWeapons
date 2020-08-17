import React, { useEffect, useState } from "react";
import "./App.css";
import Sword from "components/Sword";

const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const query = `
{
  swordCollection {
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
}
`;

export default function App() {
  const [entries, setEntries] = useState();

  useEffect(() => {
    fetch(
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
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        const item = response.data.swordCollection.items[0];
        const value = {
          name: item.name,
          description: item.description,
          stats: item.stats,
          url: item.image.url,
        };
        setEntries(value);
      });
  }, []);
  return <div className="App">{entries && <Sword {...entries} />}</div>;
}
