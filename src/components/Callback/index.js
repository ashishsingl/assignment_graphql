import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../helper/getToken";
import setTokenToStorage from "../../helper/setTokenToStorage";
import Fallback from "../Fallback";

const Callback = ({ setAuthToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let _code = url.searchParams.get("code");

    if (!_code) {
      window.alert("Failed to Login");
      navigate("/login");
      return;
    }
    getToken(_code)
      .then((res) => {
        setAuthToken(res);
        setTokenToStorage(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to Login");
        navigate("/login");
        return;
      });
  }, []);

  return <Fallback />;
};
export default Callback;
