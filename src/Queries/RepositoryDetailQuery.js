import graphql from "babel-plugin-relay/macro";

export const RepositoryDetailQuery = graphql`
  query RepositoryDetailQuery($name: String!, $repoName: String!) {
    repositoryOwner(login: $name) {
      repository(name: $repoName) {
        name
        id
        description
        collaborators {
          edges {
            node {
              name
            }
          }
        }
        createdAt
        url
      }
    }
  }
`;
