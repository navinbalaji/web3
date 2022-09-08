import { SyntheticEvent, useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import Navbar from "../../components/Navbar/Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import "./Dashboard.css";
import MeetCard from "../../components/meetCard/MeetCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setEvents } from "../../features/googleCalenderSlice/googleCalenderSlice";
import { GOOGLE_API_DISCOVERY_DOCS, GOOGLE_API_SCOPE } from "../../lib/utils/constant";
import { googleCalenderConfig } from "./type";

const Dashboard = () => {
  const [show, setShow] = useState<boolean>(false);
  const [handleListButton, setHandleListButton] = useState<boolean>(false);

  const config: googleCalenderConfig = {
    clientId: process.env.REACT_APP_GOOGLE_CALENDER_CLIENT_ID as string,
    apiKey: process.env.REACT_APP_GOOGLE_CALENDER_API_KE as string,
    scope: GOOGLE_API_SCOPE,
    discoveryDocs: [GOOGLE_API_DISCOVERY_DOCS],
  };

  const dispatch = useAppDispatch();

  const apiCalendar = new ApiCalendar(config);
  const handleItemClick = (event: SyntheticEvent<any>, name: string): void => {
    try {
      if (name === "sign-in") {
        apiCalendar.handleAuthClick();
        setHandleListButton(true);
      } else if (name === "sign-out") {
        apiCalendar.handleSignoutClick();
        dispatch(setEvents([]));
        setHandleListButton(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCalenderEvents = () => {
    apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
      const calenderData = result?.items.map((meet: any) => {
        return {
          summary: meet.summary,
          dateTime: new Date(meet.start.dateTime).toDateString(),
          hangoutLink: meet.hangoutLink,
        };
      });

      dispatch(setEvents(calenderData));
      setShow(true);
    });
    return;
  };
  const calenderEvents = useAppSelector((state) => state.googleCalenderSlice.details);

  return (
    <>
      <Navbar />
      <div className="SigninWithGoogle">
        <Stack direction="row" spacing={2} mt={15}>
          {!handleListButton && (
            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={(e) => handleItemClick(e, "sign-in")}>
              Signin with google
            </Button>
          )}
          {handleListButton && (
            <>
              <Button variant="outlined" startIcon={<GoogleIcon />} onClick={(e) => handleItemClick(e, "sign-out")}>
                Sign out
              </Button>
              <Button variant="outlined" onClick={getAllCalenderEvents}>
                List my Events
              </Button>
            </>
          )}
        </Stack>
      </div>
      <div className="meetStyleOuterContainer">
        {show &&
          calenderEvents.map((eachEvent) => <MeetCard meetTopic={eachEvent.summary} meetId={eachEvent.hangoutLink} time={eachEvent.dateTime} />)}
      </div>
    </>
  );
};

export default Dashboard;
