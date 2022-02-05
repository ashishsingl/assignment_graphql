import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET } from "../credentials";
// let client_id = process.env.REACT_APP_CLIENT_ID;
// let client_secret = process.env.REACT_APP_CLIENT_SECRET;

// const BASE_URL = process.env.REACT_APP_GITHUB_URL;
const BASE_URL = "/github/login/oauth/access_token";
const REDIRECT_URI = `${window.location.origin}/callback`;

const getToken = (code) => {
  console.log("This is the code", code);
  return axios
    .post(
      `${BASE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}`
    )
    .then((res) => {
      console.log("access response token = ", res.data);
      const query = new URLSearchParams(res.data);
      return query.get("access_token");
    })
    .catch((err) => {
      console.log(err);
      return "";
    });
};

export default getToken;
