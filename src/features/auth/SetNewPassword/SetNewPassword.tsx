import React from "react";
import styleForm from "common/styles/Form.module.css";
import FormTitle from "features/auth/common/FormTitle/FormTitle";
import style from "features/auth/CheckEmail/CheckEmail.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const SetNewPassword = () => {
  return (
    <div className={styleForm.form} style={{ gap: "40px" }}>
      <FormTitle title={"Create new password"} />
      <TextField label={"Password"} variant={"standard"} />
      <div className={style.title}>
        Create new password and we will send you further instructions to email
      </div>
      <Button variant={"contained"}>Create new password</Button>
    </div>
  );
};

export default SetNewPassword;
