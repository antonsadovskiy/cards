import React from "react";
import { useAppSelector } from "common/hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
