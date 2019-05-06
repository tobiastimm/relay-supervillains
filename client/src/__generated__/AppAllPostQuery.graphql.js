/**
 * @flow
 * @relayHash c0c1fff7f05599919a5350c92c1e9005
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Supervillain_supervillain$ref = any;
export type AppAllPostQueryVariables = {||};
export type AppAllPostQueryResponse = {|
  +allSupervillains: $ReadOnlyArray<?{|
    +$fragmentRefs: Supervillain_supervillain$ref
  |}>
|};
export type AppAllPostQuery = {|
  variables: AppAllPostQueryVariables,
  response: AppAllPostQueryResponse,
|};
*/


/*
query AppAllPostQuery {
  allSupervillains {
    ...Supervillain_supervillain
    id
  }
}

fragment Supervillain_supervillain on Supervillain {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppAllPostQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allSupervillains",
        "storageKey": null,
        "args": null,
        "concreteType": "Supervillain",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Supervillain_supervillain",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppAllPostQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allSupervillains",
        "storageKey": null,
        "args": null,
        "concreteType": "Supervillain",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppAllPostQuery",
    "id": null,
    "text": "query AppAllPostQuery {\n  allSupervillains {\n    ...Supervillain_supervillain\n    id\n  }\n}\n\nfragment Supervillain_supervillain on Supervillain {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '8b3a7bef55f621ce359705ca1d1906a0';
module.exports = node;
