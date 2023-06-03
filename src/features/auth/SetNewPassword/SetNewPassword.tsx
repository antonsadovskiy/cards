import React from "react";
import styleForm from "common/styles/Form.module.css";
import Title from "common/components/Title/Title";
import style from "features/auth/CheckEmail/CheckEmail.module.css";
import Button from "@mui/material/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PasswordInput from "common/components/PasswordInput/PasswordInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { userThunks } from "features/auth/authSlice";

const SetNewPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const methods = useForm<{ password: string }>();

  const onSubmit: SubmitHandler<{ password: string }> = (data) => {
    if (params.token) {
      const payload = {
        password: data.password,
        resetPasswordToken: params.token,
      };
      dispatch(userThunks.setNewPassword(payload)).then((res) => {
        navigate("/login");
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styleForm.form}
        style={{ gap: "40px" }}
      >
        <Title title={"Create new password"} />
        <PasswordInput label={"Password"} />
        <div className={style.title}>
          Create new password and we will send you further instructions to email
        </div>
        <Button type={"submit"} variant={"contained"}>
          Create new password
        </Button>
      </form>
    </FormProvider>
  );
};

export default SetNewPassword;
