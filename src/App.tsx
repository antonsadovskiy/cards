import React from "react";
import "./App.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { store } from "app/store";
import { Provider } from "react-redux";
import Login from "features/auth/Login/Login";
import Register from "features/auth/Register/Register";
import Cards from "features/cards/Cards/Cards";
import Packs from "features/packs/Packs/Packs";

const router = createBrowserRouter([
    {
        path: "/cards",
        element: <Cards />,
    },
    {
        path: "/packs",
        element: <Packs />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
