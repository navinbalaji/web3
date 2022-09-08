export type TransactionResponse = {
  status: "1" | "2";
  message: "OK" | "No records found";
  result?: Array<TransactionResponseResult>;
};

export type TransactionResponseResult={
    address: string;
    topics: string[];
    data: string;
    blockNumber: string;
    blockHash: string;
    timeStamp: string;
    transactionHash: string;
    gasPrice: string;
    gasUsed: string;
    logIndex: string;
    transactionIndex: string;
}

export type BlockHeightResponse = {
  data: {
    items: {
      height: number;
    }[];
  };
  error: boolean;
  error_message: string | null;
};

export type Signin = {
  walletAddress: string;
  chainId: number;
  member: {
    did: string;
  };
};
