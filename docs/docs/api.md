---
id: api
title: API
---

## 目录

> 本文档参数更新有延迟，如有出入请以最新代码为准


- [`locks`](#locks)
  - [`:lockHash/cells/unspent`](#:lockHash/cells/unspent)
  - [`:lockHash/tokens`](#:lockHash/tokens)
  - [`:lockHash/txs`](#:lockHash/txs)
  - [`:lockHash/capacity`](#:lockHash/capacity)


## Locks

---

### `:lockHash/cells/unspent`

Returns unspentCells by search params.

#### 调用示例

- 请求方式: Get

```bash

curl -X GET "http://127.0.0.1:2333/locks/0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661/cells/unspent?typeHash=0xbbb3d5666deb0b79db4e4bc3a5c5512d5cd366a7e2f922722286257dcb20dc42&limit=10" -H "accept: */*"
```

```json
{
  "errCode": 0,
  "errMsg": "",
  "data": [
    {
      "blockHash": "0xabc19bcadd8f224a7bb97de8b5013c1983405e7ac6e974f5d4ad71bbde916356",
      "lock": {
        "codeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
        "hashType": "type",
        "args": "0xbf3e92da4911fa5f620e7b1fd27c2d0ddd0de744"
      },
      "lockHash": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661",
      "outPoint": {
        "txHash": "0x7ebe4abb35bcfc44d89c9be452b73aca052af7bae61809d65f7065214f1f2dee",
        "index": "0x1"
      },
      "outputData": "0x007e8e04f35a",
      "outputDataLen": "0x6",
      "capacity": "0x69f01ccf50",
      "type": {
        "codeHash": "0x48dbf59b4c7ee1547238021b4869bceedf4eea6b43772e5d66ef8865b6ae7212",
        "hashType": "data",
        "args": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661"
      },
      "typeHash": "0xbbb3d5666deb0b79db4e4bc3a5c5512d5cd366a7e2f922722286257dcb20dc42",
      "dataHash": "0x2f33407870965029e989dd4e3f0144bbc26c03d42009cbfc8371e43b8fd8b3cb",
      "status": "live"
    }
  ]
}
```



### `:lockHash/tokens`

Returns tokens information by lockHash and typeScripts.

#### 调用示例

- 请求方式: Get

```bash

curl -X GET "http://127.0.0.1:2333/locks/0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661/tokens?typeHashes=0xbbb3d5666deb0b79db4e4bc3a5c5512d5cd366a7e2f922722286257dcb20dc42" -H "accept: */*"

```

```json
{
  "errCode": 0,
  "errMsg": "",
  "data": {
    "udts": [
      {
        "typeHash": "0xbbb3d5666deb0b79db4e4bc3a5c5512d5cd366a7e2f922722286257dcb20dc42",
        "capacity": "454999986000",
        "outputdata": "0x007e8e04f35a",
        "type": {
          "args": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661",
          "codeHash": "0x48dbf59b4c7ee1547238021b4869bceedf4eea6b43772e5d66ef8865b6ae7212",
          "hashType": "data"
        }
      }
    ],
    "capacity": "485799999000"
  }
}
```

### `:lockHash/txs`

Returns transaction list by lockHash.

#### 调用示例

- 请求方式: Get

```bash

curl -X GET "http://127.0.0.1:2333/locks/0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661/txs" -H "accept: */*"

```

```json
{
  "errCode": 0,
  "errMsg": "",
  "data": [
    {
      "hash": "0xe020269f289203e45da6361c0cef5d35201ca8a9a7a31a18a0c2e3b1eda067cd",
      "blockNum": 82901,
      "timestamp": 1591874087620,
      "inputs": [
        {
          "capacity": 500000000000,
          "lockHash": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661",
          "lockCodeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "lockArgs": "0xbf3e92da4911fa5f620e7b1fd27c2d0ddd0de744",
          "lockHashType": "type"
        }
      ],
      "outputs": [
        {
          "capacity": 14200000000,
          "lockHash": "0x3b75bed3048ee54295b54bf5346c402be6f3fdc9fc7edcfd4b9c55c5ad9b42ab",
          "lockCodeHash": "0x86a1c6987a4acbe1a887cca4c9dd2ac9fcb07405bbeda51b861b18bbf7492c4b",
          "lockArgs": "0xbf3e92da4911fa5f620e7b1fd27c2d0ddd0de744",
          "lockHashType": "type"
        },
        {
          "capacity": 485799999000,
          "lockHash": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661",
          "lockCodeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "lockArgs": "0xbf3e92da4911fa5f620e7b1fd27c2d0ddd0de744",
          "lockHashType": "type"
        }
      ],
      "fee": 1000,
      "amount": 14200001000,
      "income": false
    },
    {
      "hash": "0x0565a0d2cfb6a57788579868d87cf5119cd2c629915cff890317c869c3e5486c",
      "blockNum": 20778,
      "timestamp": 1590564742865,
      "inputs": [
        {
          "capacity": 839598279499921900,
          "lockHash": "0x8abf38905f28fd36088ebbbfdb021c2f4a853d2c9e8809338a381561a77bb241",
          "lockCodeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "lockArgs": "0x3f1573b44218d4c12a91919a58a863be415a2bc3",
          "lockHashType": "type"
        }
      ],
      "outputs": [
        {
          "capacity": 500000000000,
          "lockHash": "0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661",
          "lockCodeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "lockArgs": "0xbf3e92da4911fa5f620e7b1fd27c2d0ddd0de744",
          "lockHashType": "type"
        },
        {
          "capacity": 839597779499921500,
          "lockHash": "0x8abf38905f28fd36088ebbbfdb021c2f4a853d2c9e8809338a381561a77bb241",
          "lockCodeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "lockArgs": "0x3f1573b44218d4c12a91919a58a863be415a2bc3",
          "lockHashType": "type"
        }
      ],
      "fee": 384,
      "amount": 500000000000,
      "income": true
    }
  ]
}
```


### `:lockHash/capacity`

Returns totalCapacity and emptyCapacity.

#### 调用示例

- 请求方式: Get

```bash

curl -X GET "http://127.0.0.1:2333/locks/0xcd64ecc1fa2570073cbe9b2dfda7974288b564f323b4cd07e9d84fef22d62661/capacity" -H "accept: */*"

```

```json
{
  "errCode": 0,
  "errMsg": "",
  "data": {
    "capacity": "3940799985000",
    "emptyCapacity": "485799999000"
  }
}
```