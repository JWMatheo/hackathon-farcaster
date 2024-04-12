/**
 * This ABI is trimmed down to just the functions we expect to call for the
 * sake of minimizing bytes downloaded.
 */
export const abi = [
  { inputs: [], name: 'AlreadyCommented', type: 'error' },
  { inputs: [], name: 'AlreadyLiked', type: 'error' },
  { inputs: [], name: 'MaxWhitelistedReached', type: 'error' },
  { inputs: [], name: 'comment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'isWhitelisted',
    outputs: [
      { internalType: 'bool', name: 'isLike', type: 'bool' },
      { internalType: 'bool', name: 'isComment', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'like', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'whitelistCounter',
    outputs: [{ internalType: 'int8', name: '', type: 'int8' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export const contractAddress = '0x4fa88c01F2065c6F509E1aD0B653dd49Dd9d90A9';
