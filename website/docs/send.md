---
title: Send transaction
sidebar_label: Send transaction
---


## Send tx

Dapp could use `send` method to send signed tx, it will bring up a notification window with the password form. After user enter correct password, tx will be sent and return the tx hash if succeed.

### Method:

```js
ckb.send;

const result = await ckb.send(params);
```

`params` has the following structure：

```js
params: {
  tx: SIGNED_TX_IN_JSON_FORMAT; // required
}
```

### Return value:

```js
{
  type: string; // the value is "send"
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
  tx: SIGNED_TX_IN_JSON_FORMAT, // please refer to sign method to see the data format
};

const result = await ckb.send(rawTxWithMeta);
```

**TX is sent successfully:**

```js
{
  type: "send",
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
  type: "send",
  success: false,
  message: 'tx failed to sent',
  data: {
    hash: null
  },
};
```
