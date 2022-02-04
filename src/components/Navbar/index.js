import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <Box sx={styles.mainBox}>
      <Button color="secondary" onClick={goToHome}>
        <HomeIcon sx={styles.homeBtn} />
      </Button>
      <Button
        sx={styles.button}
        color="secondary"
        variant="outlined"
        onClick={clickHandler}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;
