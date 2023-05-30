import React from "react";
import styleForm from "common/styles/Form.module.css";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import style from "features/auth/CheckEmail/CheckEmail.module.css";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";
import { userThunks } from "features/auth/auth-slice";

const SetNewPassword = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const methods = useForm<{ password: string }>();

  const onSubmit: SubmitHandler<{ password: string }> = (data) => {
    if (params.token) {
      const payload = {
        password: data.password,
        resetPasswordToken: params.token,
      };
      dispatch(userThunks.setNewPassword(payload));
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styleForm.form}
        style={{ gap: "40px" }}
      >
        <FormTitle title={"Create new password"} />
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
