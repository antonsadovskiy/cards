import React from "react";
import styleForm from "common/styles/Form.module.css";
import style from "features/profile/Profile/Profile.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { ProfileType } from "features/auth/auth-api";
import { userThunks } from "features/auth/auth-slice";
import { Navigate, NavLink } from "react-router-dom";
import EditableName from "features/profile/Profile/EditableName/EditableName";
import { UserModelToUpdateType } from "features/profile/profile-api";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";

const Profile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector<ProfileType | null>(
    (state) => state.user.profile
  );
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const updateUserHandler = (data: UserModelToUpdateType) => {
    dispatch(userThunks.updateMe(data));
  };

  const logoutHandler = () => dispatch(userThunks.logout());

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.profilePage}>
      <NavLink to={"/packs"} className={style.returnBack}>
        <IconButton>
          <KeyboardBackspaceIcon />
        </IconButton>
        <p>Back to Packs List</p>
      </NavLink>
      <div className={`${styleForm.form} ${style.profile}`}>
        <FormTitle title={"Personal information"} />
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
