import React from "react";
import style from "./Header.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import { useAppSelector } from "app/hooks";
import { ProfileType } from "features/auth/auth-api";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const profile = useAppSelector<ProfileType | null>(
    (state) => state.auth.profile
  );
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);

  return (
    <div className={style.header}>
      <div className={styleContainer.container}>
        <img className={style.logo} src={logo} alt="It-Incubator" />
        {isLoggedIn ? (
          <div className={style.account}>
            <p>{profile?.name}</p>
            <Avatar
              alt={profile?.name}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 35, height: 35 }}
            />
          </div>
        ) : (
          <Button variant={"contained"}>Sign in</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
