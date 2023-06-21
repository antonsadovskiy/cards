import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import style from "common/styles/Modal.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";
import { useAppDispatch } from "common/hooks";
import FileInput from "common/components/FileInput/FileInput";
import UploadIcon from "@mui/icons-material/Upload";
import imageStyle from "common/styles/ImageInModal.module.css";
import emptyImage from "assets/images/empty-image.png";

type PropsType = {
  packName: string;
  deckCover: string;
  private: boolean;
  editPackHandler: (
    name: string,
    isPrivatePack: boolean,
    deckCover: string
  ) => void;
};

const EditPackModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.private);
  const [name, setName] = useState<string>(props.packName);
  const [deckCover, setDeckCover] = useState<string>(props.deckCover);

  const closeModalHandler = () => {
    dispatch(
      packsParamsActions.setIsModalOpen({
        type: "closeEditModal",
        close: true,
      })
    );
  };
  const editPackHandler = () => {
    props.editPackHandler(name, isPrivatePack, deckCover);
  };

  const changeCoverHandler = (cover: string) => setDeckCover(cover);

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
        <div className={style.imgAndBtn}>
          <img
            src={deckCover ? deckCover : emptyImage}
            className={imageStyle.image}
            alt={"cover"}
          />
          <FileInput changeFileHandler={changeCoverHandler}>
            <>
              <UploadIcon />
              <span className={style.btnStyle}>change deck cover</span>
            </>
          </FileInput>
        </div>
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
