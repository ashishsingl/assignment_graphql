import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../helper/getToken";
import setTokenToStorage from "../../helper/setTokenToStorage";

const Callback = ({ setAuthToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let _code = url.searchParams.get("code");

    // checking if _code is available
    if (_code) {
      getToken(_code)
        .then((res) => {
          setAuthToken(res);
          setTokenToStorage(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("_code is not valid");
    }
  }, []);

  return <Box>Loading...</Box>;
};
export default Callback;
