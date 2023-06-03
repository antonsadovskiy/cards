import React from "react";
import style from "common/components/Header/Header.module.css";
import styleContainer from "common/styles/Container.module.css";
import Button from "@mui/material/Button";
import logo from "assets/images/logo.svg";
import { ProfileType } from "features/auth/authAPI";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "common/hooks/useAppSelector";

const Header = () => {
  const navigate = useNavigate();
  const profile = useAppSelector<ProfileType | null>(
    (state) => state.user.profile
  );
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const goToProfileHandler = () => navigate("/profile");
  const goToLoginHandler = () => navigate("/login");

  return (
    <div className={style.header}>
      <div className={styleContainer.container}>
        <img className={style.logo} src={logo} alt="It-Incubator" />
        {isLoggedIn ? (
          <div className={style.account} onClick={goToProfileHandler}>
            <p>{profile?.name}</p>
            <Avatar
              alt={profile?.name}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 35, height: 35 }}
            />
          </div>
        ) : (
          <Button variant={"contained"} onClick={goToLoginHandler}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
