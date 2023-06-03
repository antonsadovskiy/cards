import React from "react";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import { validateEmail } from "common/utils";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ email: string }>();

  return (
    <TextField
      label={"Email"}
      variant={"standard"}
      color={errors.email ? "error" : "primary"}
      {...register("email", {
        required: "email is required",
        validate: validateEmail,
      })}
      helperText={errors.email && errors.email?.message}
    />
  );
};

export default EmailInput;
