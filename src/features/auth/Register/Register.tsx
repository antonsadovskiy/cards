import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Register.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgRegisterType } from "features/auth/auth-api";
import { NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { validate } from "features/auth/Login/Login";
import EmailInput from "components/EmailInput/EmailInput";

type RegisterType = ArgRegisterType & { confirmPassword: string };

const Login = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
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
        <PasswordInput
          label={"Confirm password"}
          color={errors.confirmPassword ? "error" : "primary"}
          register={register("confirmPassword", {
            required: "password is required",
          })}
          helperText={errors.confirmPassword && errors.confirmPassword?.message}
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
