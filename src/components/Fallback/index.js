import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles";

const Fallback = () => {
  return (
    <Box sx={styles.mainBox}>
      <CircularProgress sx={styles.loader} />
    </Box>
  );
};

export default Fallback;
