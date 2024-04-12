/**
 * This ABI is trimmed down to just the functions we expect to call for the
 * sake of minimizing bytes downloaded.
 */
export const abi = [
  { inputs: [], name: 'CannotWhitelistMoreThan25Addresses', type: 'error' },
  {
    inputs: [{ internalType: 'address[]', name: '_toWhitelist', type: 'address[]' }],
    name: 'whitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'whitelistArray',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export const contractAddress = '0xBb9a39C8C100d36055EC237dc04B3C613ee0B028';
