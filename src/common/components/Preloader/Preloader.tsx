import React from "react";
import style from "common/components/Preloader/Preloader.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <CircularProgress size={30} />
    </div>
  );
};

export default Preloader;
