import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";

const Login = () => {
    const dispatch = useAppDispatch();

    const loginHandler = () => {
        const payload = {
            email: "antonsadovskiy6@gmail.com",
            password: "123987456",
            rememberMe: false,
        };
        dispatch(authThunks.login(payload));
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={loginHandler}>login</button>
        </div>
    );
};

export default Login;
