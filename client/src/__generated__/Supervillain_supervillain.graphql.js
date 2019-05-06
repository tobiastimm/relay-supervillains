/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Supervillain_supervillain$ref: FragmentReference;
declare export opaque type Supervillain_supervillain$fragmentType: Supervillain_supervillain$ref;
export type Supervillain_supervillain = {|
  +id: ?string,
  +name: ?string,
  +$refType: Supervillain_supervillain$ref,
|};
export type Supervillain_supervillain$data = Supervillain_supervillain;
export type Supervillain_supervillain$key = {
  +$data?: Supervillain_supervillain$data,
  +$fragmentRefs: Supervillain_supervillain$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Supervillain_supervillain",
  "type": "Supervillain",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '3e9caaa5df80e074f36f2df58fc9330e';
module.exports = node;
