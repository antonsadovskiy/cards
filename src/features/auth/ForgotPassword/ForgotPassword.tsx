import React from "react";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./ForgotPassword.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth-api";
import { authThunks } from "features/auth/auth-slice";
import { useAppDispatch } from "app/hooks";
import { NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";

type ForgotPasswordType = {
  email: string;
  from?: string;
  message: string;
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordType>();

  const onSubmit: SubmitHandler<ForgotPasswordType> = (data) => {
    const payload = {
      email: data.email,
      from: "anton sadovskiy front dev",
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href="http://localhost:3000/#/set-new-password/$token$">
link</a>
</div>`,
    };
    dispatch(authThunks.forgot(payload));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styleForm.form}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <FormTitle title={"Forgot your password?"} />
          <TextField
            label={"Email"}
            variant={"standard"}
            {...register("email")}
          />
          <div style={{ color: "gray", marginTop: "10px" }}>
            Enter your email address and we will send you further instructions
          </div>
        </div>
        <div className={style.forgotPassword}>
          <Button variant={"contained"} type={"submit"}>
            Send Instructions
          </Button>
          <Grid item>
            <div>{"Did you remember your password?"}</div>
            <br />
            <NavLink to={"/login"}>Try logging in</NavLink>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
