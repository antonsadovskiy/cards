import React from "react";
import style from "./Preloader.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
