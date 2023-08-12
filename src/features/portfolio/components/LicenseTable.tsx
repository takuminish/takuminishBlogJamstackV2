import TableContainer from "@mui/material/TableContainer";
import { License } from "../../../pages";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import TableCell from "@mui/material/TableCell";
import { format } from "date-fns";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

type Props = {
  licenses: License[];
};

function LicenseTable(props: Props) {
  const { licenses } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>資格名</TableCell>
            <TableCell>取得年</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {licenses.map((license) => (
            <TableRow
              key={license.fieldId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {license.name}
              </TableCell>
              <TableCell align="right">
                {format(new Date(license.passedAt), "yyyy")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LicenseTable;
