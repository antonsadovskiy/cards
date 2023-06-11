import React, { FC } from "react";
import style from "common/styles/Modal.module.css";
import Button from "@mui/material/Button";
import { useAppDispatch } from "common/hooks";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";

type PropsType = {
  deleteCardHandler: () => void;
};

const DeleteCardModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    dispatch(
      cardsParamsActions.setIsModalOpen({
        type: "closeDeleteModal",
        close: true,
      })
    );
  };
  const deleteCardHandler = () => props.deleteCardHandler();

  return (
    <div className={style.modal}>
      <div className={style.titleContainer}>
        <div className={style.titleBlock}>
          <p className={style.title}>Delete card</p>
        </div>
      </div>
      <div className={style.mainContainer}>
        <div>
          <span>Do you really want to remove this card?</span>
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
            onClick={deleteCardHandler}
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
export default DeleteCardModal;
