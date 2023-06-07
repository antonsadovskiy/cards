import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";

type PropsType = {
  packName: string;
  private: boolean;
  onCloseModal: () => void;
  onEditPackHandler: (name: string, isPrivatePack: boolean) => void;
};

const EditPackModal: FC<PropsType> = (props) => {
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.private);
  const [name, setName] = useState<string>(props.packName);

  const onCloseModalHandler = () => props.onCloseModal();

  const onEditPackHandler = () => {
    props.onEditPackHandler(name, isPrivatePack);
  };

  const onChangePackNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={onChangePackNameHandler}
          variant={"standard"}
          label={"Name pack"}
          autoFocus
        />
        <FormControlLabel
          control={
            <Checkbox checked={isPrivatePack} onChange={onChangeHandler} />
          }
          label="Private pack"
        />
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
            onClick={onEditPackHandler}
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
