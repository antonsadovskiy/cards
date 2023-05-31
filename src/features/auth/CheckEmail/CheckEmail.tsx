import React, { useEffect } from "react";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import style from "./CheckEmail.module.css";
import styleForm from "../../../common/styles/Form.module.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import emailIcon from "../../../assets/images/email-icon.png";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { userActions } from "features/auth/auth-slice";

const CheckEmail = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector<string>((state) => state.user.tempEmail);

  useEffect(() => {
    dispatch(userActions.setIsMessageSent({ isMessageSent: false }));
  }, []);

  return (
    <div className={styleForm.form} style={{ gap: "40px" }}>
      <FormTitle title={"Check Email"} />
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
