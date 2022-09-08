import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../app/hooks";

export default function Widget({ Height }: any) {
  const blockHeight = useAppSelector((state) => state.blockHeightSlice.height);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Etherium block Height
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {blockHeight}
        </Typography>
      </CardContent>
    </Card>
  );
}
