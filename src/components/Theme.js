import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#347d39",
    },
    secondary: {
      main: "#c9d1d9",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1000,
    },
  },
});
export default theme;
