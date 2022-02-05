import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET } from "../credentials";
// let client_id = process.env.REACT_APP_CLIENT_ID;
// let client_secret = process.env.REACT_APP_CLIENT_SECRET;

const BASE_URL = process.env.REACT_APP_GITHUB_URL;
const REDIRECT_URI = `${window.location.origin}/callback`;

const getToken = (code) => {
  if (code.length !== 0) {
    console.log("This is the code", code);
    return (
      axios
        // .post(
        //   `${BASE_URL}?client_id=52640d70a2464cb8a4db&client_secret= 0270f1030f9eefa2a195c5e2db274826216112b2&code=${code}&redirect_uri=${REDIRECT_URI}`
        // )
        .post(
          `${BASE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`
        )
        .then((res) => {
          console.log(res.data, "isme aaye ga access token");
          let tokenIsPresent = res.data.search("access_token");
          if (tokenIsPresent !== -1) {
            console.log(res.data);
            // let authToken = res.data.slice(13, 53);
            const newText = res.data.replace("access_token=", "");
            const authToken = newText.replace("&scope=&token_type=bearer", "");
            console.log(authToken);
            return authToken;
          } else {
            console.log("token is not present");
            return "false";
          }
        })
        .catch((err) => console.log(err))
    );
  }
};

export default getToken;
