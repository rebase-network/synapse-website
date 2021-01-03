---
id: getAddressInfo
title: Get address info
sidebar_label: Get address info
---

## Get address info

### Method

```js
ckb.getAddressInfo;

const addressInfo = await ckb.getAddressInfo();
```

### Return value

```js
{
  message: string // "get address info successfully"
  success: boolean  // true
  type: string  // "address_info"
  data: {
    address: string; // current address(secp256k1)
    lock: string; // lock script hash value
    publicKey: stirng;  // public key
    type: string, // currently a fixed value: Secp256k1
    capacity: string; // capacity in string format, such as "516899970000"
  }
}
```

### Example

```js
const addressInfo = await ckb.getAddressInfo();
console.log('addressInfo: ', addressInfo);
```

will output:

```js
{
  message: "get address info successfully",
  success: true,
  type: "address_info",
  data: {
    "address":"ckt1qyqgadxhtq27ygrm62dqkdj32gl95j8gl56qum0yyn",
    "lock":"0x111823010653d32d36b18c9a257fe13158ca012e22b9b82f0640be187f10904b",
    "publicKey":"0x021b30b3047a645d8b6c10c513b767a3e08efa1a53df5f81bcb37af3c8c8358ae9",
    "type":"Secp256k1",
    "capacity":"516899970000"
  }
}
```
