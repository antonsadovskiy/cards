import React from "react";
import { userThunks } from "features/auth/authSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styleForm from "common/styles/Form.module.css";
import style from "./Login.module.css";
import styleLink from "common/styles/Link.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/authAPI";
import { Navigate, NavLink } from "react-router-dom";
import Title from "common/components/Title/Title";
import PasswordInput from "common/components/PasswordInput/PasswordInput";
import EmailInput from "common/components/EmailInput/EmailInput";
import { useAppDispatch, useAppSelector } from "common/hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const methods = useForm<ArgLoginType>();

  const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    dispatch(userThunks.login(payload));
  };

  if (isLoggedIn) return <Navigate to={"/packs"} />;

  return (
    <FormProvider {...methods}>
      <form
        className={styleForm.form}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styleForm.inputs}>
          <Title title={"Sign in"} />
          <EmailInput />
          <PasswordInput label={"Password"} />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                {...methods.register("rememberMe")}
              />
            }
            label="Remember me"
          />
          <NavLink className={styleLink.link} to={"/forgot-password"}>
            forgot password?
          </NavLink>
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
    </FormProvider>
  );
};

export default Login;
