import React, { ReactNode, useEffect } from "react";
import Header from "components/Header/Header";
import styleContainer from "../../common/styles/Container.module.css";
import style from "./Layout.module.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth-slice";

const Layout = (props: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const isAppInitialized = useAppSelector<boolean>(
    (state) => state.app.isAppInitialized
  );

  useEffect(() => {
    dispatch(authThunks.me());
  }, []);

  //if (!isAppInitialized) return <Preloader />;

  return (
    <div>
      <Header />
      <div className={styleContainer.container}>
        <div className={style.main}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
