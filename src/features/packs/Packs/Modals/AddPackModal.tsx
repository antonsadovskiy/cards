import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks";
import imageStyle from "common/styles/ImageInModal.module.css";
import FileInput from "common/components/FileInput/FileInput";
import UploadIcon from "@mui/icons-material/Upload";

type PropsType = {
  addPackHandler: (
    name: string,
    isPrivatePack: boolean,
    deckCover?: string
  ) => void;
};

const AddPackModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [deckCover, setDeckCover] = useState<string>("");

  const closeModalHandler = () => {
    dispatch(
      packsParamsActions.setIsModalOpen({
        type: "closeAddModal",
        close: true,
      })
    );
  };
  const addPackHandler = () => {
    props.addPackHandler(name, isPrivatePack, deckCover);
  };

  const changeCoverHandler = (cover: string) => setDeckCover(cover);

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
        <div className={style.uploadCover}>
          {deckCover && (
            <img src={deckCover} className={imageStyle.image} alt={"cover"} />
          )}
          <FileInput changeFileHandler={changeCoverHandler}>
            <>
              <UploadIcon />
              <span className={style.btnStyle}>upload deck cover</span>
            </>
          </FileInput>
        </div>
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
