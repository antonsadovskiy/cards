import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Login.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth-api";
import { NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";

const Login = () => {
  const dispatch = useAppDispatch();

  // TODO add error handlers on email and password inputs
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ArgLoginType>();

  const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styleForm.form}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <FormTitle title={"Sign in"} />
          <TextField
            label={"Email"}
            variant={"standard"}
            {...register("email")}
          />
          <TextField
            label={"Password"}
            variant={"standard"}
            type={"password"}
            {...register("password")}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                {...register("rememberMe")}
              />
            }
            label="Remember me"
          />
          <NavLink to={"/forgotPassword"}>forgot password?</NavLink>
        </div>
        <div className={style.login}>
          <Button variant={"contained"} type={"submit"}>
            Sign In
          </Button>
          <Grid item>
            <div>{"Don't have an account?"}</div>
            <br />
            <NavLink to={"/register"}>Sign up</NavLink>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default Login;
