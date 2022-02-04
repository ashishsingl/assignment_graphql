import graphql from "babel-plugin-relay/macro";

// export const RepositoryNameQuery = graphql`
//   query AppRepositoryNameQuery {
//     repositoryOwner(login: "ashishsingl") {
//       repositories(first: 5) {
//         nodes {
//           name
//           createdAt
//           url
//         }
//       }
//     }
//   }
// `;

// upto here

// {
//     repositoryOwner(login :"ashishsingl"){
//      repositories(first :5){
//       nodes{
//         name,
//         createdAt,
//         url
//       }
//     }
//     }
//   }

// for particular repository
//   {
//     repositoryOwner(login :"ashishsingl"){
//     repository(name :"Github-learning"){
//       name,
//       description,
//       collaborators {
//         edges {
//           node {
//             name
//           }
//         }
//       },
//       createdAt,
//       url,
//     }
//     }
//   }

// mutation {
//     updateRepository(
//       input: {repositoryId: "MDEwOlJlcG9zaXRvcnkzNjUwOTcwNTM=", name: "Changing name"}
//     ) {
//       clientMutationId
//     }
//   }
