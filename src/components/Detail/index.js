import React, { useContext } from "react";
import { RepositoryDetailQuery } from "../../Queries/RepositoryDetailQuery";
import { usePreloadedQuery } from "react-relay/hooks";
import { Box, Button } from "@mui/material";
import styles from "./styles";

import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import { AuthTokenContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Detail = () => {
  const authToken = useContext(AuthTokenContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, repoName } = state;

  const preloadedRepositoryDetails = loadQuery(
    RelayEnvironment,
    RepositoryDetailQuery,
    { name, repoName, authToken }
  );
  const data = usePreloadedQuery(
    RepositoryDetailQuery,
    preloadedRepositoryDetails
  );
  console.log("this is inside details", data);
  const clickHandler = () => {
    navigate("/update", {
      state: {
        repoId: data.repositoryOwner.repository.id,
        repoName: "Nice One",
      },
    });
  };
  return (
    <>
      <Navbar />
      <Box sx={styles.mainBox}>
        <Box sx={styles.mainHeading}>Repository Details</Box>
        <Box sx={styles.detailsBox}>
          <Box sx={styles.innerBox}>
            <Box sx={styles.innerText}>
              <span>
                Name :
                <span style={styles.secondaryData}>
                  {data.repositoryOwner.repository.name}
                </span>
              </span>
            </Box>
            <Box sx={styles.innerText}>
              <span>
                Description :
                <span style={styles.secondaryData}>
                  {data.repositoryOwner.repository.description}
                </span>
              </span>
            </Box>
            <Box sx={styles.innerText}>
              <span>
                Collaborators :
                <span style={styles.secondaryData}>
                  {data.repositoryOwner.repository.collaborators === null
                    ? "No Collaborators"
                    : data.repositoryOwner.repository.collaborators}
                </span>
              </span>
            </Box>
            <Box sx={styles.innerText}>
              <span>
                Created At :
                <span style={styles.secondaryData}>
                  {data.repositoryOwner.repository.createdAt}
                </span>
              </span>
            </Box>
            <Box sx={styles.innerText}>
              <a
                style={styles.issueBtn}
                href={data.repositoryOwner.repository.url + "/issues"}
              >
                Go To Issue Page
              </a>
            </Box>
            {/* <Button onClick={clickHandler}>UpdateData</Button> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Detail;
