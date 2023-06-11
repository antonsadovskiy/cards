import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks";

type PropsType = {
  addPackHandler: (name: string, isPrivatePack: boolean) => void;
};

const AddPackModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const closeModalHandler = () => {
    dispatch(
      packsParamsActions.setIsModalOpen({
        type: "closeAddModal",
        close: true,
      })
    );
  };
  const addPackHandler = () => props.addPackHandler(name, isPrivatePack);

  const changePackNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const changeIsPrivateHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
          onChange={changePackNameHandler}
          variant={"standard"}
          label={"Name pack"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isPrivatePack}
              onChange={changeIsPrivateHandler}
            />
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
            onClick={addPackHandler}
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
