import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./styles/repositoryBox";
import { useNavigate } from "react-router-dom";

const RepositoryBox = ({ name, repoName, createdAt }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/detail", { state: { name, repoName } });
  };

  return (
    <Box sx={styles.mainBox}>
      <Button sx={styles.repositoryName} onClick={clickHandler}>
        {repoName}
      </Button>
      <Box sx={styles.createdAt}>Created At : {createdAt}</Box>
    </Box>
  );
};

export default RepositoryBox;
