import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { InputPropsType } from "components/PasswordInput/PasswordInput";

const EmailInput: FC<InputPropsType> = (props) => {
  return (
    <TextField
      label={"Email"}
      variant={"standard"}
      color={props.color}
      {...props.register}
      helperText={props.helperText}
    />
  );
};

export default EmailInput;
