import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";
import style from "./LinearLoader.module.css";

const LinearLoader = () => {
  const isLoading = useAppSelector(selectorIsLoading);

  return <div className={style.loader}>{isLoading && <LinearProgress />}</div>;
};

export default LinearLoader;
