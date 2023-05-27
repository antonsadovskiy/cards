import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import style from "./Login.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginData = {
  email: string;
  password: string;
  remebmerMe: boolean;
};

const Login = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
      rememberMe: data.remebmerMe,
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.login}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1>Sign in</h1>
          <TextField label={"email"} variant={"standard"} type={"email"} />
          <TextField
            label={"password"}
            variant={"standard"}
            type={"password"}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Button variant={"contained"} type={"submit"}>
            Sign In
          </Button>
          <Grid item>
            <div>{"Don't have an account?"}</div>
            <br />
            <Link href="#" variant="body2">
              <div>{"Sign Up"}</div>
            </Link>
          </Grid>
        </div>
      </div>
    </form>
  );
};

export default Login;
