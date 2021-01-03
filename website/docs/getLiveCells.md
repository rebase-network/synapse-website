---
title: Get live cells
sidebar_label: Get live cells
---

### Method

```js
ckb.getLiveCells;

interface QueryCellsParams {
    capacity: string;
    limit: string;
    hasData: string;
}

limit : transaction counts
capacity: capacity needed to be transfer
hasData: "true"|"false"| Not exist
         "true" : get cell contains outputdata not equal to "0x";
         "false": get cell contains outputdata equal to "0x";
         Not exist: get all cell

const liveCells = await ckb.getLiveCells(params: QueryCellsParams);
```

### Return value

```js
{
  message: string // "get live cells successfully"
  success: boolean  // true
  type: string  // "live_cells"
  data: Cell[]
}

interface LockScript {
  codeHash: string; // '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'
  hashType: string; // 'type'
  args: string; // '0x8eb4d75815e2207bd29a0b3651523e5a48e8fd34'
}

interface Cell {
  blockHash: string; // '0xd9027f4740c5995b17f2580ca5db9ac4ce4909e652ede2eb26d64709c26201ae',
  lock: LockScript | null;
  outPoint: {
    txHash: string; // '0xdb255da9ceb84c81e2053238d239e65a92076f3080aee13346d586746b3bc8ce'
    index: string; // '0x1'
  };
  outputData: string; // '0x'
  outputDataLen: string; // '0x0'
  capacity: string; // '0x535a743210'
  type: LockScript | null;
  dataHash: string; // '0x0000000000000000000000000000000000000000000000000000000000000000'
  status: string; // 'live'
}

```

### Example

```js
await window.ckb.getLiveCells({ limit: '10' });
await window.ckb.getLiveCells({ capacity: '200' });
await window.ckb.getLiveCells({ limit: '10', hasData: 'true' });
await window.ckb.getLiveCells({ capacity: '200', hasData: 'false' });
console.log('live cells: ', liveCells);
```

will output:

```js
{
  type: 'live_cells',
  success: true,
  message: 'get live cells successfully',
  data: [
    {
      blockHash: '0xd9027f4740c5995b17f2580ca5db9ac4ce4909e652ede2eb26d64709c26201ae',
      lock: {
        codeHash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',
        hashType: 'type',
        args: '0x8eb4d75815e2207bd29a0b3651523e5a48e8fd34',
      },
      outPoint: {
        txHash: '0xdb255da9ceb84c81e2053238d239e65a92076f3080aee13346d586746b3bc8ce',
        index: '0x1',
      },
      outputData: '0x',
      outputDataLen: '0x0',
      capacity: '0x535a743210',
      type: {
          codeHash: null,
          hashType: null,
          args: null
      },
      dataHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
      status: 'live',
    },
  ],
}

```
