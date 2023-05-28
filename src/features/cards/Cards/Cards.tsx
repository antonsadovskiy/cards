import React from "react";
import { useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";

const Cards = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return <div>cards</div>;
};

export default Cards;
