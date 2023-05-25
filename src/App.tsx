import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page404 from 'components/404/Page404';
import Cards from 'features/Cards/Cards';
import Learn from 'features/Learn/Learn';
import Packs from 'features/Packs/Packs';
import Profile from 'features/Profile/Profile';
import ForgotPassword from 'features/ForgotPassword/ForgotPassword';
import SetNewPassword from 'features/SetNewPassword/SetNewPassword';
import CheckEmail from 'features/CheckEmail/CheckEmail';
import Register from 'features/Register/Register';
import Login from 'features/Login/Login';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={'*'} element={<Page404 />} />

                <Route path={'/cards'} element={<Cards />} />
                <Route path={'/learn'} element={<Learn />} />
                <Route path={'/packs'} element={<Packs />} />
                <Route path={'/packs'} element={<Profile />} />
                <Route path={'/forgot-password'} element={<ForgotPassword />} />
                <Route path={'/set-new-password'} element={<SetNewPassword />} />
                <Route path={'/check-email'} element={<CheckEmail />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
