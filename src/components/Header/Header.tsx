import React from "react";
import style from "./Header.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={styleContainer.container}>
        <img className={style.logo} src={logo} alt="" />
        <Button variant={"contained"}>Sign in</Button>
      </div>
    </div>
  );
};

export default Header;
