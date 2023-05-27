import React from "react";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import style from "./CheckEmail.module.css";
import styleForm from "../../../common/styles/Form.module.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import email from "../../../assets/images/email-icon.png";

const CheckEmail = () => {
  return (
    <div className={styleForm.form} style={{ gap: "40px" }}>
      <FormTitle title={"Check Email"} />
      <div style={{ textAlign: "center" }}>
        <img src={email} width={100} alt="some img" />
      </div>
      <div className={style.title}>
        We’ve sent an Email with instructions to example@mail.com
      </div>
      <Button variant={"contained"}>
        <NavLink to={"/login"} className={style.button}>
          Back to login
        </NavLink>
      </Button>
    </div>
  );
};

export default CheckEmail;
