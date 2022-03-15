[jsrsasign](https://github.com/kjur/jsrsasign/) | [npm](https://www.npmjs.com/package/jsrsasign-oid-eidas) | [OIDs](https://github.com/kjur/jsrsasign-oid-eidas/blob/main/lib/index.js) | [Other AddOn](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On)

# jsrsasign-oid-eidas
jsrsasign add-on to add object identifier definitions for EU eIDAS and qualified certificate.

## How to use add-on
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-eidas").addon(jsrsasign);
```

## OID definitions
You can see them in [the source code](https://github.com/kjur/jsrsasign-oid-psd2/blob/main/lib/index.js).

## Example
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-eidas").addon(jsrsasign);

...snip...

h = "<<<eIDAS certificate hexadecimal data>>>";
console.log(JSON.stringify(jsrsasign.ASN1HEX.parse(h), null, " "));
```

## Reference
none

