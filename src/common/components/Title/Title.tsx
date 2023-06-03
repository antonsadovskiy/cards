import React, { FC } from "react";
import style from "common/components/Title/Title.module.css";

const Title: FC<{ title: string }> = ({ title }) => {
  return <h1 className={style.title}>{title}</h1>;
};

export default Title;
