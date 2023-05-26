import { NextResponse, NextRequest } from "next/server";

/* ======================================

======================================= */
export const GET = async (req: NextRequest, res: NextResponse) => {
  
  const realPosts = [
    {
      title: "How to Create and Update NFTs Programmatically Using the Paper API",
      description:
        "If you're looking to create and update an NFT contract programmatically, you're in the right place.",
    },
    {
      title: "New: Optimism Support for Checkouts & Embedded Wallets",
      description:
        "Hey folks! We're super excited to announce that we're integrating Optimism into our Checkouts and Wallets products.",
    },
    {
      title: "How to Create an NFT Collection With The Same Asset (Without Code)",
      description:
        "In this tutorial, we will walk you through the process of creating an NFT contract with a Paper, where all holders of the NFT will have the same image or asset",
    },
    {
      title: "Create a Simple App to Airdrop NFTs to Email or Wallet Addresses Using Paper",
      description:
        "This guide will show you create a simple app to airdrop NFTs, without setting up your own infrastructure",
    },
  ];

  try {
    return NextResponse.json({ data: realPosts }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(`First Error: ${error}`, { status: 500 });
  }

};
