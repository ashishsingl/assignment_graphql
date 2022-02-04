/**
 * @generated SignedSource<<54895a8ae722e2c7c915bbc695e58a5f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type RepositoryDetailQuery$variables = {|
  name: string,
  repoName: string,
|};
export type RepositoryDetailQueryVariables = RepositoryDetailQuery$variables;
export type RepositoryDetailQuery$data = {|
  +repositoryOwner: ?{|
    +repository: ?{|
      +name: string,
      +id: string,
      +description: ?string,
      +collaborators: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: {|
            +name: ?string,
          |},
        |}>,
      |},
      +createdAt: any,
      +url: any,
    |},
  |},
|};
export type RepositoryDetailQueryResponse = RepositoryDetailQuery$data;
export type RepositoryDetailQuery = {|
  variables: RepositoryDetailQueryVariables,
  response: RepositoryDetailQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repoName"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "name"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "repoName"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCollaboratorConnection",
                "kind": "LinkedField",
                "name": "collaborators",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RepositoryCollaboratorEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryCollaboratorConnection",
                "kind": "LinkedField",
                "name": "collaborators",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RepositoryCollaboratorEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9e6a0d4468285635f41978c17cc2304e",
    "id": null,
    "metadata": {},
    "name": "RepositoryDetailQuery",
    "operationKind": "query",
    "text": "query RepositoryDetailQuery(\n  $name: String!\n  $repoName: String!\n) {\n  repositoryOwner(login: $name) {\n    __typename\n    repository(name: $repoName) {\n      name\n      id\n      description\n      collaborators {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n      createdAt\n      url\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "a984df92a5e761360fe7efb7e2b6ba2b";

module.exports = ((node/*: any*/)/*: Query<
  RepositoryDetailQuery$variables,
  RepositoryDetailQuery$data,
>*/);
