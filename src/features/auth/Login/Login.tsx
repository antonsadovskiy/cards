import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { authThunks } from 'features/auth/auth-slice';

const Login = () => {

    /*const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
    const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value);
    const loginHandler = () => dispatch(authThunks.login());*/

    return (
        <div>
            {/*<input type='text' placeholder={'email'} value={email} onChange={changeEmailHandler} />
            <input type='text' placeholder={'password'} value={password} onChange={changePasswordHandler} />
            <input type='checkbox' placeholder={'remember me'} checked={false} />
            <button onClick={loginHandler}>login</button>*/}
            <button>login</button>
        </div>
    );
};

export default Login;