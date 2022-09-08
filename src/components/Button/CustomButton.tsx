import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import metamask from "../../assets/metamask.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setShownState } from "../../features/metamask/metamaskSlice";
import { setWalletAddress } from "../../features/metamask/metamaskSlice";
import { useAddSignUpMutation } from "../../lib/services/signinUrlApi";
import Alert from "@mui/material/Alert";

const MetamaskIcon = () => {
  return <img src={metamask} alt="metamask" />;
};

function CustomAlert() {
  return (
    <Alert variant="filled" severity="error" style={{ marginTop: "0.4rem" }}>
      Connected, API call to https://dev-gcn.samudai.xyz/api/member/signup failed
    </Alert>
  );
}

export default function CustomButton() {
  const [errorhandler, setErrorHandler] = useState<boolean>(false);
  const walletAddress = useAppSelector((state) => state.metamaskSlice.address);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!window.ethereum) {
      alert("Please install metamask extension!!");
    }
  }, []);

  const [addSignUp] = useAddSignUpMutation();

  const data = {
    walletAddress: "test",
    chainId: 10,
    member: {
      did: "",
    },
  };


  const sendDataToServer = async () => {
    try {
      await addSignUp(data).unwrap();
    } catch (err) {
      setErrorHandler(true);
      console.error("Failed to save the post: ", err);
    }
  };

  const setAddress = () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res: any) => {
      dispatch(setWalletAddress(res[0]));
    });
    dispatch(setShownState(true));
    sendDataToServer();
    return;
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" endIcon={<MetamaskIcon />} onClick={() => setAddress()} disabled={!!walletAddress}>
          {walletAddress ? "Connected with Metamask" : "Connect with Metamask"}
        </Button>
      </Stack>
      {errorhandler && <CustomAlert />}
    </>
  );
}
