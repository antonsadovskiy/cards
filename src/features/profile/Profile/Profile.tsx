import React from "react";
import styleForm from "common/styles/Form.module.css";
import style from "features/profile/Profile/Profile.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Title from "common/components/Title/Title";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ProfileType } from "features/auth/authAPI";
import { userThunks } from "features/auth/authSlice";
import { NavLink } from "react-router-dom";
import EditableName from "features/profile/Profile/EditableName/EditableName";
import { UserModelToUpdateType } from "features/profile/profileAPI";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch, useAppSelector } from "common/hooks";

const Profile = () => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector<ProfileType | null>(
    (state) => state.user.profile
  );

  const updateUserHandler = (data: UserModelToUpdateType) => {
    dispatch(userThunks.updateMe(data));
  };

  const logoutHandler = () => dispatch(userThunks.logout());

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
        <Avatar
          alt={profile?.name}
          src={profile?.avatar}
          sx={{ width: 100, height: 100 }}
        />
        <EditableName
          name={profile?.name ? profile.name : "no name"}
          updateUserHandler={updateUserHandler}
        />
        <p className={style.email}>{profile?.email}</p>
        <Button
          style={{ boxShadow: "1px 2px 4px gray" }}
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
