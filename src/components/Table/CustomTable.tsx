import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../app/hooks";

export default function CustomTable() {
  const transaction = useAppSelector((state) => state.transactionSlice.result);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Block Number</TableCell>
            <TableCell align="right">TimeStamp</TableCell>
            <TableCell align="right">Gas Price</TableCell>
            <TableCell align="left">Transaction Hash</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction?.map((tran: any, index: number) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {tran.address}
              </TableCell>
              <TableCell align="right">{tran.blockNumber}</TableCell>
              <TableCell align="right">{tran.timeStamp}</TableCell>
              <TableCell align="right">{tran.gasPrice}</TableCell>
              <TableCell align="right">{tran.transactionHash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
