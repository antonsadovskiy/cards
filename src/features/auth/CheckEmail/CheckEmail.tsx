import React from "react";
import Title from "common/components/Title/Title";
import style from "./CheckEmail.module.css";
import styleForm from "../../../common/styles/Form.module.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import emailIcon from "../../../assets/images/mail-icon.svg";
import { useAppSelector } from "common/hooks";
import { selectorEmail } from "features/auth/authSelectors";

const CheckEmail = () => {
  const email = useAppSelector(selectorEmail);

  return (
    <div className={styleForm.form} style={{ gap: "40px" }}>
      <Title title={"Check Email"} />
      <div style={{ textAlign: "center" }}>
        <img src={emailIcon} width={100} alt="some img" />
      </div>
      <div className={style.title}>
        We’ve sent an Email with instructions to {email}
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
