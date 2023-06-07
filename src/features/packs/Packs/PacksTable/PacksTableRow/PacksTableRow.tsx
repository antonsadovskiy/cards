import React, { FC } from "react";
import TableRow from "@mui/material/TableRow";
import style from "features/packs/Packs/PacksTable/PacksTable.module.css";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/packs/packsSlice";
import { convertDate } from "common/utils";

type PropsType = {
  packId: string;
  name: string;
  cardsCount: number;
  updated: string;
  user_name: string;
  user_id: string | null;
  packs_user_id: string;
};

const PacksTableRow: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  const onUpdatePackHandler = () => {
    dispatch(
      packsThunks.updatePack({
        cardsPack: { _id: props.packId, name: "summertime sadness" },
      })
    );
  };
  const onDeletePackHandler = () => {
    dispatch(packsThunks.deletePack({ id: props.packId }));
  };

  return (
    <TableRow>
      <TableCell className={style.packName}>
        {props.name.slice(0, 30)}
        {props.name.length > 35 ? "..." : ""}
      </TableCell>
      <TableCell className={style.numberOfCards}>{props.cardsCount}</TableCell>
      <TableCell>{convertDate(props.updated)}</TableCell>
      <TableCell>
        {props.user_name.slice(0, 20)}
        {props.user_name.length > 20 ? "..." : ""}
      </TableCell>
      <TableCell>
        <IconButton disabled={props.cardsCount === 0 || isLoading}>
          <SchoolIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
        {props.packs_user_id === props.user_id && (
          <IconButton
            onClick={onUpdatePackHandler}
            disabled={isLoading || props.user_id !== props.packs_user_id}
          >
            <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
          </IconButton>
        )}
        {props.packs_user_id === props.user_id && (
          <IconButton
            onClick={onDeletePackHandler}
            disabled={isLoading || props.user_id !== props.packs_user_id}
          >
            <DeleteIcon sx={{ width: "20px", height: "20px" }} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};

export default PacksTableRow;
