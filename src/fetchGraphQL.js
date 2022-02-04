import axios from "axios";

async function fetchGraphQL(text, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${variables.authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  // return axios
  //   .post(
  //     "https://api.github.com/graphql",
  //     JSON.stringify({
  //       query: text,
  //       variables,
  //     })
  //   )
  //   .then((res) => res.data);

  return await response.json();
}

export default fetchGraphQL;
