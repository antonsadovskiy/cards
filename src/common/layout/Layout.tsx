import React, { useEffect } from "react";
import Header from "common/components/Header/Header";
import styleContainer from "common/styles/Container.module.css";
import style from "./Layout.module.css";
import { userThunks } from "features/auth/authSlice";
import Preloader from "common/components/Preloader/Preloader";
import LinearProgress from "@mui/material/LinearProgress";
import { Outlet } from "react-router-dom";
import Toast from "common/components/Error/Toast";
import { useAppDispatch, useAppSelector } from "common/hooks";

const Layout = () => {
  const dispatch = useAppDispatch();

  const isAppInitialized = useAppSelector<boolean>(
    (state) => state.app.isAppInitialized
  );
  const isLoading = useAppSelector<boolean>((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(userThunks.me());
  }, []);

  if (!isAppInitialized) return <Preloader />;

  return (
    <div>
      <Header />
      {isLoading && <LinearProgress />}
      <div className={styleContainer.container}>
        <div className={style.main}>
          <Outlet />
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Layout;
