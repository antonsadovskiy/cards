import React from "react";
import style from "./PacksNotFound.module.css";

const PacksNotFound = () => {
  return (
    <div className={style.block}>
      No card packs with name entered were found. Change query settings 🤔
    </div>
  );
};

export default PacksNotFound;
