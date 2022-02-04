import graphql from "babel-plugin-relay/macro";

export const RepositoryNameQuery = graphql`
  query RepositoryNameQuery($input: String!) {
    repositoryOwner(login: $input) {
      avatarUrl
      login
      ... on User {
        name
        bio
      }
      repositories(first: 100) {
        nodes {
          name
          createdAt
          url
        }
      }
    }
  }
`;
