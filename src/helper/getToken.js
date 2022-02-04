import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET } from "../credentials";
// let client_id = process.env.REACT_APP_CLIENT_ID;
// let client_secret = process.env.REACT_APP_CLIENT_SECRET;

const BASE_URL = "/github/login/oauth/access_token";
const REDIRECT_URI = "http://localhost:3000/callback";

const getToken = (code) => {
  if (code.length !== 0) {
    console.log("This is the code", code);
    return axios
      .post(
        `${BASE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`
      )
      .then((res) => {
        console.log(res);
        let tokenIsPresent = res.data.search("access_token");
        if (tokenIsPresent !== -1) {
          let authToken = res.data.slice(13, 53);
          return authToken;
        } else {
          console.log("token is not present");
          return "false";
        }
      })
      .catch((err) => console.log(err));
  }
};

export default getToken;
