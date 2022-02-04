/**
 * @generated SignedSource<<9b41b8f4f6d7d2aa2feadfa904c98340>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateNameQuery$variables = {|
  repoId: string,
  repoName: string,
|};
export type UpdateNameQueryVariables = UpdateNameQuery$variables;
export type UpdateNameQuery$data = {|
  +updateRepository: ?{|
    +clientMutationId: ?string,
  |},
|};
export type UpdateNameQueryResponse = UpdateNameQuery$data;
export type UpdateNameQuery = {|
  variables: UpdateNameQueryVariables,
  response: UpdateNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repoId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repoName"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "repoName"
          },
          {
            "kind": "Variable",
            "name": "repositoryId",
            "variableName": "repoId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateRepositoryPayload",
    "kind": "LinkedField",
    "name": "updateRepository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateNameQuery",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateNameQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eeee817a9fac773b22e0844ddef38f8e",
    "id": null,
    "metadata": {},
    "name": "UpdateNameQuery",
    "operationKind": "mutation",
    "text": "mutation UpdateNameQuery(\n  $repoId: ID!\n  $repoName: String!\n) {\n  updateRepository(input: {repositoryId: $repoId, name: $repoName}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "1fc5947ded58caa5da354074d77b1210";

module.exports = ((node/*: any*/)/*: Mutation<
  UpdateNameQuery$variables,
  UpdateNameQuery$data,
>*/);
