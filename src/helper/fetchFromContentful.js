
const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export default async function fetchFromContentful(query) {
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

  export function getItemsArray(response, stuff) {
    return  response.data[stuff + "Collection"].items
    }