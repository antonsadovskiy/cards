import React, { FC } from "react";
import style from "common/styles/Modal.module.css";
import Button from "@mui/material/Button";
import { cutTheString } from "common/utils";
import { useAppDispatch } from "common/hooks";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";

type PropsType = {
  packName: string;
  deletePackHandler: () => void;
};

const DeletePackModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    dispatch(
      packsParamsActions.setIsModalOpen({
        type: "closeDeleteModal",
        close: true,
      })
    );
  };
  const onDeletePackHandler = () => props.deletePackHandler();

  return (
    <div className={style.modal}>
      <div className={style.titleContainer}>
        <div className={style.titleBlock}>
          <p className={style.title}>Delete pack</p>
        </div>
      </div>
      <div className={style.mainContainer}>
        <div>
          <span>
            Do you really want to remove{" "}
            <b>{cutTheString(props.packName, 15)}</b>? All cards will be
            deleted.
          </span>
        </div>
        <div className={style.buttons}>
          <Button
            className={style.button}
            onClick={onCloseModalHandler}
            variant={"outlined"}
          >
            Cancel
          </Button>
          <Button
            className={style.button}
            onClick={onDeletePackHandler}
            color={"error"}
            variant={"contained"}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DeletePackModal;
