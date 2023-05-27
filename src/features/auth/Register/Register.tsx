import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";

const Register = () => {
  const dispatch = useAppDispatch();

  const registerHandler = () => {
    const payload = {
      email: "antonsadovskiy6@gmail.com",
      password: "123987456",
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};

export default Register;
