import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks";

type PropsType = {
  packName: string;
  private: boolean;
  editPackHandler: (name: string, isPrivatePack: boolean) => void;
};

const EditPackModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.private);
  const [name, setName] = useState<string>(props.packName);

  const closeModalHandler = () => {
    dispatch(
      packsParamsActions.setIsModalOpen({
        type: "closeEditModal",
        close: true,
      })
    );
  };
  const editPackHandler = () => {
    props.editPackHandler(name, isPrivatePack);
  };

  const changePackNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const changePrivateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPrivatePack(e.currentTarget.checked);
  };

  return (
    <div className={style.modal}>
      <div className={style.titleContainer}>
        <div className={style.titleBlock}>
          <p className={style.title}>Edit pack</p>
        </div>
      </div>
      <div className={style.mainContainer}>
        <TextField
          value={name}
          fullWidth
          onChange={changePackNameHandler}
          variant={"standard"}
          label={"Name pack"}
          autoFocus
        />
        <FormControlLabel
          control={
            <Checkbox checked={isPrivatePack} onChange={changePrivateHandler} />
          }
          label="Private pack"
        />
        <div className={style.buttons}>
          <Button
            className={style.button}
            onClick={closeModalHandler}
            variant={"outlined"}
          >
            Cancel
          </Button>
          <Button
            className={style.button}
            onClick={editPackHandler}
            variant={"contained"}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPackModal;
