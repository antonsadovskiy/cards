import React from "react";
import { useAppDispatch } from "app/hooks";
import { userThunks } from "features/auth/auth-slice";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Register.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ArgRegisterType } from "features/auth/auth-api";
import { NavLink } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import PasswordInput from "components/PasswordInput/PasswordInput";
import EmailInput from "components/EmailInput/EmailInput";

type RegisterType = ArgRegisterType & { confirmPassword: string };

const Register = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    dispatch(userThunks.register(payload));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styleForm.form}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styleForm.inputs}>
          <FormTitle title={"Sign up"} />
          <EmailInput />
          <PasswordInput label={"Password"} />
          <PasswordInput label={"Confirm password"} />
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
    </FormProvider>
  );
};

export default Register;
