import React, { ReactNode } from "react";
import Header from "components/Header/Header";
import style from "./Layout.module.css";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <br />
      <div className={style.main}>{props.children}</div>
    </div>
  );
};

export default Layout;
