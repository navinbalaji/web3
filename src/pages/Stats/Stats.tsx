import { Typography } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import CustomTable from "../../components/Table/CustomTable";
import Widget from "../../components/Widget/Widget";
import CustomButton from "../../components/Button/CustomButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { useGetBlockHeightByApiQuery } from "../../lib/services/blockHeightApi";
import { useGetTransactionByApiQuery } from "../../lib/services/transactionApi";
import { setBlockHeight } from "../../features/blockHeightSlice/blockHeightSlice";
import { setTransaction } from "../../features/transaction/transactionSlice";
import "./Stats.css";
import { useEffect } from "react";

const Stats = () => {
  const dispatch = useAppDispatch();
  const shownStatus = useAppSelector((state) => state.metamaskSlice.show);

  const blockHeightAPIKey = process.env.REACT_APP_BLOCK_HEIGHT_API_KEY as string;

  // I am taking the public wallet address 
  const publicWalletAddress = process.env.REACT_APP_PUBLIC_WALLET_ADDRESS as string;

  const { data, isLoading } = useGetBlockHeightByApiQuery(blockHeightAPIKey, {
    pollingInterval: 3000,
  });

  const transactionalData = useGetTransactionByApiQuery(publicWalletAddress);

  useEffect(() => {
    if (data) {
      dispatch(setBlockHeight(data?.data.items[0].height));
    }
    if (transactionalData.isSuccess) {
      dispatch(setTransaction(transactionalData.data?.result));
    }
  }, [transactionalData, data, dispatch]);

  return (
    <>
      <Navbar />
      <div className="customButton">
        <CustomButton />
      </div>
      {shownStatus && (
        <>
          <div className="outerContainer">
            <Typography variant="h6" component="h6">
              Last 5 ETH Transactions
            </Typography>
            <CustomTable />
          </div>
          {!isLoading && (
            <div className="widget">
              <Widget />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Stats;
