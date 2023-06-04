import { styled, tableCellClasses } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EFEFEF",
    fontWeight: "600",
  },
}));
