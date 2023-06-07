import React, { FC } from "react";
import style from "common/styles/Modal.module.css";
import Button from "@mui/material/Button";

type PropsType = {
  packName: string;
  onCloseModal: () => void;
  onDeletePackHandler: () => void;
};

const DeletePackModal: FC<PropsType> = (props) => {
  const onCloseModalHandler = () => {
    props.onCloseModal();
  };

  const onDeletePackHandler = () => {
    props.onDeletePackHandler();
  };

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
            Do you really want to remove <b>{props.packName}</b>? All cards will
            be deleted.
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
