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
import { selectorIsAppInitialized, selectorIsLoading } from "app/appSelectors";

const Layout = () => {
  const dispatch = useAppDispatch();

  const isAppInitialized = useAppSelector(selectorIsAppInitialized);
  const isLoading = useAppSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(userThunks.me());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {isLoading && <LinearProgress />}
      <div className={styleContainer.container}>
        <div className={style.main}>
          {!isAppInitialized && <Preloader />}
          <div
            className={style.content}
            style={isAppInitialized ? {} : { display: "none" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Layout;
