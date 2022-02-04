import graphql from "babel-plugin-relay/macro";

export const UpdateNameQuery = graphql`
  mutation UpdateNameQuery($repoId: ID!, $repoName: String!) {
    updateRepository(input: { repositoryId: $repoId, name: $repoName }) {
      clientMutationId
    }
  }
`;
