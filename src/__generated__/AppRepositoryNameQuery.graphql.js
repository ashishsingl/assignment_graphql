/**
 * @generated SignedSource<<4b332dff907d331531ff6fc0e01e8bf2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryNameQuery$variables = {||};
export type AppRepositoryNameQueryVariables = AppRepositoryNameQuery$variables;
export type AppRepositoryNameQuery$data = {|
  +repositoryOwner: ?{|
    +repositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +createdAt: any,
        +url: any,
      |}>,
    |},
  |},
|};
export type AppRepositoryNameQueryResponse = AppRepositoryNameQuery$data;
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "ashishsingl"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "repositoryOwner",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:5)"
          }
        ],
        "storageKey": "repositoryOwner(login:\"ashishsingl\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
            "args": (v1/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:5)"
          },
          (v5/*: any*/)
        ],
        "storageKey": "repositoryOwner(login:\"ashishsingl\")"
      }
    ]
  },
  "params": {
    "cacheID": "577eaf1334fc3f16ab1c3af0a84d5a14",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  repositoryOwner(login: \"ashishsingl\") {\n    __typename\n    repositories(first: 5) {\n      nodes {\n        name\n        createdAt\n        url\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ae76a146a617c8583e2be8b818f21ae8";

module.exports = ((node/*: any*/)/*: Query<
  AppRepositoryNameQuery$variables,
  AppRepositoryNameQuery$data,
>*/);
