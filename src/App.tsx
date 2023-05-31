import React from "react";
import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "app/store";
import { Provider } from "react-redux";
import Login from "features/auth/Login/Login";
import Register from "features/auth/Register/Register";
import Packs from "features/packs/Packs/Packs";
import Layout from "common/layout/Layout";
import ForgotPassword from "features/auth/ForgotPassword/ForgotPassword";
import CheckEmail from "features/auth/CheckEmail/CheckEmail";
import SetNewPassword from "features/auth/SetNewPassword/SetNewPassword";
import Profile from "features/profile/Profile/Profile";
import Page404 from "components/404/Page404";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Layout />}>
      <Route path={"*"} element={<Page404 />} />
      <Route path={"/"} element={<Navigate to={"/packs"} />} />

      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/forgot-password"} element={<ForgotPassword />} />
      <Route path={"/check-email"} element={<CheckEmail />} />
      <Route path={"/set-new-password/:token"} element={<SetNewPassword />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/packs"} element={<Packs />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
