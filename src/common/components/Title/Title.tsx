import React, { FC } from "react";
import style from "common/components/Title/Title.module.css";
import { cutTheString } from "common/utils";

const Title: FC<{ title: string }> = ({ title }) => {
  return <h1 className={style.title}>{cutTheString(title, 35)}</h1>;
};

export default Title;
