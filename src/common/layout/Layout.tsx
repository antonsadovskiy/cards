import React, { ReactNode } from "react";
import Header from "components/Header/Header";
import styleContainer from "../../common/styles/Container.module.css";
import style from "./Layout.module.css";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <br />
      <div className={styleContainer.container}>
        <div className={style.main}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
