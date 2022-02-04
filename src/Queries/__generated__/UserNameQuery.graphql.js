/**
 * @generated SignedSource<<c25454972576d2e2df30b4864afa9889>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type UserNameQuery$variables = {||};
export type UserNameQueryVariables = UserNameQuery$variables;
export type UserNameQuery$data = {|
  +viewer: {|
    +login: string,
  |},
|};
export type UserNameQueryResponse = UserNameQuery$data;
export type UserNameQuery = {|
  variables: UserNameQueryVariables,
  response: UserNameQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserNameQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "071a5832cc1f5f7733126dfbcd45ec07",
    "id": null,
    "metadata": {},
    "name": "UserNameQuery",
    "operationKind": "query",
    "text": "query UserNameQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "6583506ad6cdc50f1fff154d20aa3ac0";

module.exports = ((node/*: any*/)/*: Query<
  UserNameQuery$variables,
  UserNameQuery$data,
>*/);
