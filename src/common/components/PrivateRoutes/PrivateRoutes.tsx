import React from "react";
import { useAppSelector } from "common/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { selectorIsLoggedIn } from "features/auth/authSelectors";

const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
