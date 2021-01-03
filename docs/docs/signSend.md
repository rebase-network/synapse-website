---
title: Sign and send transaction
sidebar_label: Sign and send transaction
---


## Sign and send transaction

Dapp could use `signSend` method to sign and send tx, it will bring up a notification window with the password form. After user enter correct password, `signSend` method will signed tx, then send it and return the result.

### Method:

```js
ckb.signSend;

const result = await signSend(params);
```

`params` has the following structure：

```js
params: {
  tx: TX_IN_JSON_FORMAT // required, refer to sign method for data sample
  meta?: { // optional
    config: { // This is telling which inputs you want to sign
      index: 0, // index value in inputs array. Default: 0
      length: -1  // length from index
    }
  }
}
```

### Return value:

```js
{
  type: string; // the value is "signSend"
  success: boolean;
  message: string;  // now is a fixed value: 'tx is sent'
  data: {
    hash: string | null; // tx hash, will be `null` if fail to send tx
  },
};
```

### Example:

```js
const rawTxWithMeta = {
  tx: SIGNED_TX_IN_JSON_FORMAT // required. please refer to sign method to see the data format
  meta: { // optional
    config: { index: 3, length: 2 } // sign the 4th and 5th of inputs array
  },
}

const result = await ckb.signSend(rawTxWithMeta);
```

**TX is sent successfully:**

```js
{
  type: "signSend",
  success: true,
  message: 'tx is sent',
  data: {
    hash: '0x02805e5a97a09ab9e8634fb0d3c75ed2ee4669f7e2ef67dcc33dc6d7f931821d',
  },
};
```

**TX fail to send:**
`success` value will be `false`, `hash` will be `null`.

```js
{
  type: "signSend",
  success: false,
  message: 'tx failed to sent',
  data: {
    hash: null
    },
  },
};
```
