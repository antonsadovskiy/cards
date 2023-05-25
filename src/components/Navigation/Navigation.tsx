import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/login'}>
                login
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/register'}>
                register
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/recoveryPassword'}>
                forgot password?
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/recoveryPassword/newPassword'}>
                new password
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/profile'}>
                profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? style.active : '')} to={'/superComponents'}>
                super components
            </NavLink>
        </div>
    );
};

export default Navigation;
