import React, { ReactNode, useEffect } from "react";
import Header from "components/Header/Header";
import styleContainer from "../../common/styles/Container.module.css";
import style from "./Layout.module.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { userThunks } from "features/auth/auth-slice";
import Preloader from "common/preloader/Preloader";
import LinearProgress from "@mui/material/LinearProgress";
import { AppStatusType } from "app/app-slice";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useAppDispatch();

  const isAppInitialized = useAppSelector<boolean>(
    (state) => state.app.isAppInitialized
  );
  const status = useAppSelector<AppStatusType>((state) => state.app.status);

  useEffect(() => {
    dispatch(userThunks.me());
  }, []);

  if (!isAppInitialized) return <Preloader />;

  return (
    <div>
      <Header />
      {status === "loading" && <LinearProgress />}
      <div className={styleContainer.container}>
        <div className={style.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
