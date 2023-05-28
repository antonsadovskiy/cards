import React, { FC } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseFormRegisterReturn } from "react-hook-form";
import TextField from "@mui/material/TextField";

export type InputPropsType = {
  label?: string;
  color?: "error" | "primary" | "info" | "warning" | "success" | "secondary";
  register: UseFormRegisterReturn<string>;
  helperText?: string | undefined;
};

const PasswordInput: FC<InputPropsType> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="standard">
      <TextField
        type={showPassword ? "text" : "password"}
        variant={"standard"}
        label={props.label}
        color={props.color}
        helperText={props.helperText}
        {...props.register}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default PasswordInput;
