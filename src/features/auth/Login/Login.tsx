import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Login.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth-api";
import { Navigate, NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import PasswordInput from "components/PasswordInput/PasswordInput";
import EmailInput from "components/EmailInput/EmailInput";

export const validate = {
  matchPattern: (v: string) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
    "Invalid email address",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);

  const {
    register,
    handleSubmit,

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

  if (isLoggedIn) return <Navigate to={"/profile"} />;

  return (
    <form className={styleForm.form} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <FormTitle title={"Sign in"} />
        <EmailInput
          color={errors.email ? "error" : "primary"}
          register={register("email", {
            required: "email is required",
            validate: validate,
          })}
          helperText={errors?.email?.message && errors.email.message}
        />
        <PasswordInput
          label={"Password"}
          color={errors.password ? "error" : "primary"}
          register={register("password", { required: "password is required" })}
          helperText={errors.password && errors.password?.message}
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
        <NavLink to={"/forgot-password"}>forgot password?</NavLink>
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
    </form>
  );
};

export default Login;
