import React, { FC } from "react";
import { SortByType } from "features/params/paramsSlice";
import { changeSort } from "common/utils";
import style from "./SortingItem.module.css";
import TableCell from "@mui/material/TableCell";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

type PropsType = {
  width: string;
  sort: string;
  value: SortByType;
  label: string;
  onChange: (newSort: string) => void;
};

const SortingItem: FC<PropsType> = (props) => {
  const up = "0" + props.value;
  const down = "1" + props.value;

  const onChangeCallback = () => {
    props.onChange(changeSort(props.sort, down, up));
  };

  const getIcon = () => {
    switch (props.sort) {
      case `0${props.value}`:
        return <KeyboardArrowDownIcon />;
      case `1${props.value}`:
        return <KeyboardArrowUpIcon />;
      case "":
        return <UnfoldMoreIcon />;
      default:
        return <UnfoldMoreIcon />;
    }
  };

  return (
    <TableCell
      sx={{ backgroundColor: "#EFEFEF", fontWeight: "600" }}
      width={props.width}
      onClick={onChangeCallback}
    >
      <span className={style.item}>{props.label}</span>
      <IconButton>{getIcon()}</IconButton>
    </TableCell>
  );
};

export default SortingItem;
