import React from "react";
import styleForm from "common/styles/Form.module.css";
import style from "features/profile/Profile/Profile.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Title from "common/components/Title/Title";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { userThunks } from "features/auth/authSlice";
import { NavLink } from "react-router-dom";
import EditableName from "features/profile/Profile/EditableName/EditableName";
import { UserModelToUpdateType } from "features/profile/profileAPI";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectorProfile } from "features/auth/authSelectors";
import Badge from "@mui/material/Badge";
import FileInput from "common/components/FileInput/FileInput";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Profile = () => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectorProfile);

  const updateUserHandler = (data: UserModelToUpdateType) => {
    dispatch(userThunks.updateMe(data));
  };

  const logoutHandler = () => dispatch(userThunks.logout());
  const changeAvatarHandler = (avatar: string) => updateUserHandler({ avatar });
  const changeNameHandler = (name: string) => updateUserHandler({ name });

  return (
    <div className={style.profilePage}>
      <NavLink to={"/packs"} className={style.returnBack}>
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <p>Back to Packs List</p>
      </NavLink>
      <div className={`${styleForm.form} ${style.profile}`}>
        <Title title={"Personal information"} />
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <FileInput changeFileHandler={changeAvatarHandler}>
              <PhotoCameraIcon />
            </FileInput>
          }
        >
          <Avatar
            alt={profile?.name}
            src={profile?.avatar}
            sx={{ width: 100, height: 100 }}
          />
        </Badge>
        <EditableName
          name={profile?.name ? profile.name : "no name"}
          changeNameHandler={changeNameHandler}
        />
        <p className={style.email}>{profile?.email}</p>
        <Button
          className={style.logoutBtn}
          startIcon={<LogoutIcon />}
          variant={"outlined"}
          onClick={logoutHandler}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
