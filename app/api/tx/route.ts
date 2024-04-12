import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, parseEther } from 'viem';
import { base } from 'viem/chains';
import { abi, contractAddress } from '../../_contracts/Whitelist';
import { BUY_MY_COFFEE_CONTRACT_ADDR } from '../../config';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const { isValid } = await getFrameMessage(body, {
    neynarApiKey: 'C4E80F2B-57C8-4F86-9E0B-38335951259B',
  });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  const data = encodeFunctionData({
    abi: abi,
    functionName: 'whitelist',
    args: [
      ['0x77946973097e2555edAb75dC8cA75884ab7b3FB0', '0x487091A058Bf7b679908C33E3cb092D6eEA9444b'],
    ],
  });

  const txData: FrameTransactionResponse = {
    chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
    method: 'eth_sendTransaction',
    params: {
      abi: abi,
      data: data,
      to: contractAddress,
      value: '0',
    },
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
