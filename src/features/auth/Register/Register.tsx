import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";
import TextField from "@mui/material/TextField";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Register.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgRegisterType } from "features/auth/auth-api";
import { NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import PasswordInput from "components/PasswordInput/PasswordInput";

type RegisterType = ArgRegisterType & { confirmPassword: string };

const Login = () => {
  const dispatch = useAppDispatch();

  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <form className={styleForm.form} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <FormTitle title={"Sign up"} />
        <TextField
          label={"Email"}
          variant={"standard"}
          {...register("email")}
        />
        <PasswordInput label={"Password"} register={register("password")} />
        <PasswordInput
          label={"Confirm password"}
          register={register("confirmPassword")}
        />
      </div>
      <div className={style.register}>
        <Button variant={"contained"} type={"submit"}>
          Sign Up
        </Button>
        <Grid item>
          <div>{"Already have an account?"}</div>
          <br />
          <NavLink to={"/login"}>Sign in</NavLink>
        </Grid>
      </div>
    </form>
  );
};

export default Login;
