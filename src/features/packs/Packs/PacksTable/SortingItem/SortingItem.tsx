import React, { FC } from "react";
import { SortByType } from "features/packsParams/packsParamsSlice";
import { changeSort } from "common/utils";
import style from "features/packs/Packs/PacksTable/SortingItem/SortingItem.module.css";
import TableCell from "@mui/material/TableCell";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  width: string;
  sort: string;
  value: SortByType;
  label: string;
  onChange: (newSort: string) => void;
};

const SortingItem: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);

  const up = "0" + props.value;
  const down = "1" + props.value;

  const onChangeCallback = () => {
    props.onChange(changeSort(props.sort, down, up));
  };

  return (
    <TableCell
      sx={{ backgroundColor: "#EFEFEF", fontWeight: "600" }}
      width={props.width}
      onClick={onChangeCallback}
      className={isLoading ? style.disable : style.item}
    >
      <span>{props.label}</span>
      <IconButton>
        {props.sort === `0${props.value}` && <KeyboardArrowDownIcon />}
        {props.sort === `1${props.value}` && <KeyboardArrowUpIcon />}
        {props.sort === "" && <UnfoldMoreIcon />}
      </IconButton>
    </TableCell>
  );
};

export default SortingItem;
