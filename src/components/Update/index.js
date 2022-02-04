import React, { useContext, useEffect } from "react";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import { AuthTokenContext } from "../../App";
import { UpdateNameQuery } from "../../Queries/UpdateNameQuery";
import { usePreloadedQuery } from "react-relay/hooks";
import { useLocation } from "react-router-dom";
import useMutation from "react-relay/lib/relay-hooks/useMutation";
import { Button } from "@mui/material";

const Update = () => {
  const authToken = useContext(AuthTokenContext);
  const { state } = useLocation();
  const { repoId, repoName } = state;
  console.log({ state });
  console.log("this component reloads");

  // const preloadedUpdateName = loadQuery(RelayEnvironment, UpdateNameQuery, {
  //   repoId,
  //   repoName,
  //   authToken,
  // });
  // console.log(preloadedUpdateName);

  // if(true){

  //   // const data = usePreloadedQuery(UpdateNameQuery, preloadedUpdateName);
  // }
  const [commit, isInFlight] = useMutation(UpdateNameQuery);
  console.log(commit);
  const clickHandler = () => {
    commit({
      variables: {
        repoId,
        repoName,
      },
      onCompleted(data) {
        console.log(data);
      },
    });
  };
  // console.log("updating data", data);
  return (
    <div>
      Updating...
      <Button onClick={clickHandler}>Hello</Button>
    </div>
  );
};
export default Update;
