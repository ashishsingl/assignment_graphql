import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import "./styles/scroll.css";

import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import { usePreloadedQuery } from "react-relay/hooks";
import { RepositoryNameQuery } from "../../Queries/RepositoryNameQuery";
import styles from "./styles";
import { Grid } from "@mui/material";
import RepositoryBox from "./RepositoryBox";
import { AuthTokenContext } from "../../App";

import { UserNameQuery } from "../../Queries/UserNameQuery";
import Navbar from "../Navbar";

const Home = () => {
  const authToken = useContext(AuthTokenContext);

  const getUserName = loadQuery(RelayEnvironment, UserNameQuery, {
    authToken,
  });

  const data2 = usePreloadedQuery(UserNameQuery, getUserName);
  console.log("this is data in process query", data2);

  const preloadedData = loadQuery(RelayEnvironment, RepositoryNameQuery, {
    authToken,
    input: data2.viewer.login,
  });
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedData);
  console.log("this is data in home page", data);

  return (
    <>
      <Navbar />
      <Grid container sx={styles.mainBox}>
        <Grid item xs={12} lg={4} sx={styles.leftContainer}>
          <Box sx={styles.profileBox}>
            <img
              style={styles.image}
              src={data.repositoryOwner?.avatarUrl}
              alt="profile"
            />
          </Box>
          <Box sx={styles.name}>{data.repositoryOwner?.name}</Box>
          <Box sx={styles.username}>{data.repositoryOwner?.login}</Box>
          <Box sx={styles.bio}>{data.repositoryOwner?.bio}</Box>
        </Grid>
        <Grid item xs={12} lg={8} sx={styles.rightContainer}>
          <Box sx={styles.repositoryHeader}>
            <Box sx={styles.alignHeaderBox}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fill="#cdd9e5"
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              <Box sx={styles.headerHeading}>Repositories</Box>
            </Box>
          </Box>
          <Box sx={styles.repositoryContainer}>
            {data.repositoryOwner?.repositories.nodes.map((repository) => {
              return (
                <RepositoryBox
                  repoName={repository.name}
                  name={data.repositoryOwner.login}
                  createdAt={repository.createdAt}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
