import React, { useEffect } from "react";
import Header from "common/components/Header/Header";
import styleContainer from "common/styles/Container.module.css";
import style from "./Layout.module.css";
import { userThunks } from "features/auth/authSlice";
import Preloader from "common/components/Preloader/Preloader";
import { Outlet } from "react-router-dom";
import Toast from "common/components/Error/Toast";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectorIsAppInitialized } from "app/appSelectors";
import LinearLoader from "common/components/LinearLoader/LinearLoader";

const Layout = () => {
  const dispatch = useAppDispatch();

  const isAppInitialized = useAppSelector(selectorIsAppInitialized);

  useEffect(() => {
    dispatch(userThunks.me());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <LinearLoader />
      <div className={styleContainer.container}>
        <div className={style.main}>
          <div className={style.content}>
            {!isAppInitialized && <Preloader />}
            {isAppInitialized && <Outlet />}
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Layout;
