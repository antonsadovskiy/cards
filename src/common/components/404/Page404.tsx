import React from "react";
import image from "assets/images/page-not-found.jpg";
import style from "./Page404.module.css";

const Page404 = () => {
  return <img className={style.notFound} src={image} alt="" />;
};

export default Page404;
