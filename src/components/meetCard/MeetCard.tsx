import { Card, CardContent, Link, Typography } from "@mui/material";
import { FC } from "react";
import "./MeetCard.css";

type MeetProps = {
  meetTopic: string;
  meetId: string;
  time: string;
};

const MeetCard: FC<MeetProps> = ({ meetTopic, meetId, time }): JSX.Element => {
  return (
    <div className="meetstyle">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {meetTopic} on {time}{" "}
            <Link href={meetId} target="_blank">
              link
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetCard;
