import React, { FC } from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

const PasswordInput: FC<{ label: string }> = ({ label }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    formState: { errors },
  } = useFormContext<{ password: string }>();

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
        label={label}
        color={errors.password ? "error" : "primary"}
        {...register("password", {
          required: "password is required",
        })}
        helperText={errors.password && errors.password?.message}
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
