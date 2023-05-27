import React, { FC } from "react";
import style from "./FormTitle.module.css";

const FormTitle: FC<{ title: string }> = ({ title }) => {
  return <h1 className={style.title}>{title}</h1>;
};

export default FormTitle;
