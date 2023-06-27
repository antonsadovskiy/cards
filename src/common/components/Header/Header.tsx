import React from "react";
import style from "common/components/Header/Header.module.css";
import styleContainer from "common/styles/Container.module.css";
import Button from "@mui/material/Button";
import logo from "assets/images/logo.png";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "common/hooks/useAppSelector";
import {
  selectorIsLoggedIn,
  selectorProfile,
} from "features/auth/authSelectors";
import { cutTheString } from "common/utils";

const Header = () => {
  const navigate = useNavigate();
  const profile = useAppSelector(selectorProfile);
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  const goToProfileHandler = () => navigate("/profile");
  const goToLoginHandler = () => navigate("/login");

  return (
    <div className={style.header}>
      <div className={styleContainer.container}>
        <img className={style.logo} src={logo} alt="It-Incubator" />
        {isLoggedIn ? (
          <div className={style.account} onClick={goToProfileHandler}>
            <p>{cutTheString(profile?.name ? profile.name : "", 35)}</p>
            <Avatar
              alt={profile?.name}
              src={profile?.avatar}
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
