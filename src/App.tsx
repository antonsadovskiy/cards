import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "app/store";
import { Provider } from "react-redux";
import Login from "features/auth/Login/Login";
import Register from "features/auth/Register/Register";
import Cards from "features/cards/Cards/Cards";
import Packs from "features/packs/Packs/Packs";
import Layout from "common/layout/Layout";
import ForgotPassword from "features/auth/ForgotPassword/ForgotPassword";
import CheckEmail from "features/auth/CheckEmail/CheckEmail";
import SetNewPassword from "features/auth/SetNewPassword/SetNewPassword";

const router = createBrowserRouter([
  { path: "/cards", element: <Cards /> },
  { path: "/packs", element: <Packs /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/checkEmail", element: <CheckEmail /> },
  { path: "/#/set-new-password", element: <SetNewPassword /> },
]);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  );
}

export default App;
