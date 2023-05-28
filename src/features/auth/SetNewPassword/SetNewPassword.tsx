import React from "react";
import styleForm from "common/styles/Form.module.css";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import style from "features/auth/CheckEmail/CheckEmail.module.css";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";

type FormType = {
  password: string;
};

const SetNewPassword = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const payload = {
      password: data.password,
      token: params.token,
    };
    console.log(payload);
    //dispatch(authThunks.register(payload));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styleForm.form}
      style={{ gap: "40px" }}
    >
      <FormTitle title={"Create new password"} />
      <PasswordInput label={"Password"} register={register("password")} />
      <div className={style.title}>
        Create new password and we will send you further instructions to email
      </div>
      <Button type={"submit"} variant={"contained"}>
        Create new password
      </Button>
    </form>
  );
};

export default SetNewPassword;
