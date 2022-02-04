const styles = {
  mainBox: {
    minHeight: "80vh",
    color: "#c9d1d9",
    pt: 5,
  },
  mainHeading: {
    typography: { xs: "h4", md: "h2" },
  },
  detailsBox: {
    padding: { xs: 4, md: 5 },
    maxWidth: "800px",
    width: { xs: "90%", sm: "80%" },
    height: "auto",
    margin: "auto",
    mt: { xs: 4, sm: 5 },
    bgcolor: "#39333385",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    borderRadius: "2rem",
  },
  innerText: {
    fontSize: { xs: "18px", md: "20px" },
    mb: 1,
    display: "flex",
  },
  issueBtn: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    textTransform: "uppercase",
    backgroundColor: "#347d39",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderRadius: "0.3rem",
    marginTop: "1rem",
  },
  innerBox: {
    width: "fit-content",
    margin: "auto",
  },
  secondaryData: {
    fontWeight: 300,
    marginLeft: "0.5rem",
    fontSize: "16px",
  },
};
export default styles;
