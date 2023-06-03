import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled, tableCellClasses } from "@mui/material";
import style from "./PacksTable.module.css";
import SchoolIcon from "@mui/icons-material/School";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

const PacksTable = () => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EFEFEF",
      fontWeight: "600",
    },
    [`&.${tableCellClasses.body}`]: {
      height: "10px",
    },
  }));

  const someArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <TableContainer component={Paper}>
      <Table size="medium" sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Cards</StyledTableCell>
            <StyledTableCell>Last Updated</StyledTableCell>
            <StyledTableCell>Created by</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {someArray.map((number, index) => (
            <TableRow key={index}>
              <StyledTableCell className={style.packName}>
                Pack name
              </StyledTableCell>
              <TableCell className={style.numberOfCards}>{number}</TableCell>
              <TableCell>18.03.2004</TableCell>
              <TableCell>Anton asd;kjaodjas</TableCell>
              <TableCell>
                <IconButton>
                  <SchoolIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
                <IconButton>
                  <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ width: "20px", height: "20px" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PacksTable;
