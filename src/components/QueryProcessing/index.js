import React, { useContext } from "react";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import { usePreloadedQuery } from "react-relay/hooks";
import { UserNameQuery } from "../../Queries/UserNameQuery";
import { RepositoryNameQuery } from "../../Queries/RepositoryNameQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthTokenContext } from "../../App";

const QueryProcessing = ({ setPreloadedQuery }) => {
  const authToken = useContext(AuthTokenContext);
  const getUserName = loadQuery(RelayEnvironment, UserNameQuery, {
    authToken,
  });

  const data = usePreloadedQuery(UserNameQuery, getUserName);
  console.log("this is data in process query", data);

  const preloadedData = loadQuery(RelayEnvironment, RepositoryNameQuery, {
    authToken,
    input: data.viewer.login,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setPreloadedQuery(preloadedData);
    navigate("/home");
  }, []);

  return <>Hello</>;
};

export default QueryProcessing;
