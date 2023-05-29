import React from "react";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./ForgotPassword.module.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { authThunks } from "features/auth/auth-slice";
import { useAppDispatch } from "app/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import EmailInput from "components/EmailInput/EmailInput";
import { MESSAGE } from "common/utils/Message";

type ForgotPasswordType = {
  email: string;
  from?: string;
  message: string;
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const methods = useForm<ForgotPasswordType>();

  const onSubmit: SubmitHandler<ForgotPasswordType> = (data) => {
    const payload = {
      email: data.email,
      from: "anton sadovskiy front dev",
      message: MESSAGE,
    };
    dispatch(authThunks.forgot(payload));
    navigate("/check-email");
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styleForm.form}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styleForm.inputs}>
          <FormTitle title={"Forgot your password?"} />
          <EmailInput />
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
      </form>
    </FormProvider>
  );
};

export default ForgotPassword;
