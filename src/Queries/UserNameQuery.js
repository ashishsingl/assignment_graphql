import graphql from "babel-plugin-relay/macro";

export const UserNameQuery = graphql`
  query UserNameQuery {
    viewer {
      login
    }
  }
`;
