const styles = {
  mainBox: {
    minHeight: "80vh",
    bgcolor: "transparent",
    color: "#c9d1d9",
    width: "100%",
  },
  leftContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: { xs: 5, sm: 5 },
  },
  profileBox: {
    height: { xs: "200px", sm: "300px" },
    width: { xs: "200px", sm: "300px" },
    borderRadius: "50%",
    overflow: "hidden",
  },
  name: {
    typography: "h4",
    color: "#c9d1d9",
    textAlign: "left",
    mt: 2,
  },
  username: {
    fontSize: "1rem",
    fontWeight: 300,
  },
  bio: {
    fontSize: "0.9rem",
    mt: 2,
    pt: 0.5,
    borderTop: "1px solid grey",
  },
  rightContainer: {
    width: "70%",
    paddingX: { xs: "1rem", sm: "3rem" },
    height: "auto",
    // border: "2px solid red",
  },
  repositoryHeader: {
    height: "5rem",
    borderBottom: "1px solid #595454",
    fontWeight: "600",
    display: "flex",
    paddingLeft: 2,
  },
  alignHeaderBox: {
    height: "2rem",
    // border: "2px solid red",
    display: "flex",
    alignItems: "center",
    width: "10rem",
    justifyContent: "center",
    borderBottom: "2px solid #f78166",
    paddingBottom: 1,
    marginTop: "auto",
  },
  headerHeading: {
    marginLeft: 1,
  },
  repositoryContainer: {
    height: "400px",
    // border: "2px solid red",
    overflowY: "scroll",
  },
  // using styles
  image: {
    height: "100%",
    width: "100%",
  },
};
export default styles;
