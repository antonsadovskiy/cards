import React, { FC, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { BasicModal } from "common/components/Modal/Modal";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditPackModal from "features/packs/Packs/Modals/EditPackModal/EditPackModal";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import { useAppDispatch, useAppSelector, useLoading } from "common/hooks";
import { packsThunks } from "features/packs/packsSlice";
import DeletePackModal from "features/packs/Packs/Modals/DeletePackModal/DeletePackModal";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  packId: string;
  name: string;
  private: boolean;
  cardsCount: number;
  user_id: string | null;
  packs_user_id: string;
};

const Actions: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectorIsLoading);

  const [editOpen, setEditOpen] = useState<boolean>(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const onEditPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.updatePack({
        cardsPack: { _id: props.packId, name, private: isPrivatePack },
      })
    )
      .unwrap()
      .then(() => {
        setEditOpen(false);
      });
  };

  const onDeletePackHandler = () => {
    dispatch(packsThunks.deletePack({ id: props.packId }))
      .unwrap()
      .then(() => {
        setDeleteOpen(false);
      });
  };

  return (
    <TableCell style={{ display: "flex" }}>
      <IconButton disabled={props.cardsCount === 0 || isLoading}>
        <SchoolIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      {props.packs_user_id === props.user_id && (
        <BasicModal
          onClose={handleEditClose}
          open={editOpen}
          button={
            <IconButton onClick={handleEditOpen} disabled={isLoading}>
              <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
            </IconButton>
          }
        >
          <EditPackModal
            packName={props.name}
            private={props.private}
            onCloseModal={handleEditClose}
            onEditPackHandler={onEditPackHandler}
          />
        </BasicModal>
      )}
      {props.packs_user_id === props.user_id && (
        <BasicModal
          onClose={handleDeleteClose}
          open={deleteOpen}
          button={
            <IconButton onClick={handleDeleteOpen} disabled={isLoading}>
              <DeleteIcon sx={{ width: "20px", height: "20px" }} />
            </IconButton>
          }
        >
          <DeletePackModal
            packName={props.name}
            onCloseModal={handleDeleteClose}
            onDeletePackHandler={onDeletePackHandler}
          />
        </BasicModal>
      )}
    </TableCell>
  );
};

export default Actions;
