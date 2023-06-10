import React from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";
import Delete from "@mui/icons-material/Delete";

const Edit = () => {
  const isLoading = useAppSelector(selectorIsLoading);

  return (
    <TableCell>
      <IconButton disabled={isLoading}>
        <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      <IconButton>
        <Delete sx={{ width: "20px", height: "20px" }} />
      </IconButton>
    </TableCell>
  );
};

export default Edit;
