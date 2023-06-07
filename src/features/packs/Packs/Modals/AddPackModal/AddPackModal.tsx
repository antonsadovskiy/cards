import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";

type PropsType = {
  onCloseModal: () => void;
  onAddPackHandler: (name: string, isPrivatePack: boolean) => void;
};

const AddPackModal: FC<PropsType> = (props) => {
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const onCloseModalHandler = () => {
    props.onCloseModal();
  };
  const onAddPackHandler = () => {
    props.onAddPackHandler(name, isPrivatePack);
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
          <p className={style.title}>Add new pack</p>
        </div>
      </div>
      <div className={style.mainContainer}>
        <TextField
          value={name}
          fullWidth
          onChange={onChangePackNameHandler}
          variant={"standard"}
          label={"Name pack"}
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
            onClick={onAddPackHandler}
            variant={"contained"}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPackModal;
