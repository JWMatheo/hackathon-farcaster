import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, parseEther } from 'viem';
import { base } from 'viem/chains';
import { abi, contractAddress } from '../../_contracts/Whitelist';
import { BUY_MY_COFFEE_CONTRACT_ADDR } from '../../config';
import type { FrameTransactionEthSendParams } from '@coinbase/onchainkit/frame';

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
    functionName: 'like',
    // args: [parseEther('1'), 'Coffee all day!'],
  });

  const txData: FrameTransactionEthSendParams = {
    // chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
    data: data,
    abi: abi,
    to: contractAddress,
    value: '0',
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
