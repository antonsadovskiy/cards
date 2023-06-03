import React from "react";
import { useAppDispatch } from "common/hooks";
import { userThunks } from "features/auth/authSlice";
import styleForm from "../../../common/styles/Form.module.css";
import style from "./Register.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Title from "common/components/Title/Title";
import PasswordInput from "common/components/PasswordInput/PasswordInput";
import EmailInput from "common/components/EmailInput/EmailInput";
import { toast } from "react-toastify";

type RegisterType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    dispatch(userThunks.register(payload))
      .unwrap()
      .then((res) => {
        toast.success("you have successfully registered");
        navigate("/login");
      })
      .catch((e) => {
        toast.error(e.response ? e.response.data.error : e.message);
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styleForm.form}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styleForm.inputs}>
          <Title title={"Sign up"} />
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
