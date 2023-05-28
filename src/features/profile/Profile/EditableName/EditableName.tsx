import React, { ChangeEvent, KeyboardEvent, FC, useState } from "react";
import IconButton from "@mui/material/IconButton";
import style from "features/profile/Profile/EditableName/EditableName.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import { UserModelToUpdateType } from "features/profile/profile-api";

type PropsType = {
  name: string;
  updateUserHandler: (data: UserModelToUpdateType) => void;
};

const EditableName: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(props.name);
  const setOnEditModeHandler = () => setEditMode(true);
  const setOffEditModeHandler = () => {
    props.updateUserHandler({ name });
    setEditMode(false);
  };
  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOffEditModeHandler();
    }
  };

  return (
    <div className={style.editableName}>
      {editMode ? (
        <TextField
          value={name}
          onChange={changeNameHandler}
          onKeyDown={onKeyDownHandler}
          label={"Nickname"}
          variant={"standard"}
          autoFocus
          sx={{ width: "35ch" }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={setOffEditModeHandler}>
                <CheckIcon />
              </IconButton>
            ),
          }}
        />
      ) : (
        <>
          <p>{props.name}</p>
          <IconButton onClick={setOnEditModeHandler}>
            <BorderColorIcon fontSize={"small"} />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default EditableName;
