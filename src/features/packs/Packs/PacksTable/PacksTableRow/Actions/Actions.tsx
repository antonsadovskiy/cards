import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { BasicModal } from "common/components/Modal/Modal";
import EditPackModal from "features/packs/Packs/Modals/EditPackModal/EditPackModal";
import TableCell from "@mui/material/TableCell";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/packs/packsSlice";
import DeletePackModal from "features/packs/Packs/Modals/DeletePackModal/DeletePackModal";
import { selectorIsLoading } from "app/appSelectors";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";

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

  const editPackHandler = (name: string, isPrivatePack: boolean) => {
    dispatch(
      packsThunks.updatePack({
        cardsPack: { _id: props.packId, name, private: isPrivatePack },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          packsParamsActions.setIsModalOpen({
            type: "closeEditModal",
            close: true,
          })
        );
      });
  };

  const deletePackHandler = () => {
    dispatch(packsThunks.deletePack({ id: props.packId }))
      .unwrap()
      .then(() => {
        dispatch(
          packsParamsActions.setIsModalOpen({
            type: "closeDeleteModal",
            close: true,
          })
        );
      });
  };

  return (
    <TableCell style={{ display: "flex" }}>
      <IconButton disabled={props.cardsCount === 0 || isLoading}>
        <SchoolIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      {props.packs_user_id === props.user_id && (
        <BasicModal type={"editModal"}>
          <EditPackModal
            packName={props.name}
            private={props.private}
            editPackHandler={editPackHandler}
          />
        </BasicModal>
      )}
      {props.packs_user_id === props.user_id && (
        <BasicModal type={"deleteModal"}>
          <DeletePackModal
            packName={props.name}
            deletePackHandler={deletePackHandler}
          />
        </BasicModal>
      )}
    </TableCell>
  );
};

export default Actions;
