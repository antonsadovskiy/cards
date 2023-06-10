import React, { FC } from "react";
import style from "common/components/NotFount/NotFound.module.css";

type PropsType = {
  ifNotFound: string;
};

const NotFound: FC<PropsType> = (props) => {
  return (
    <div className={style.block}>
      No {props.ifNotFound} with name entered were found. Change query settings
      🤔
    </div>
  );
};

export default NotFound;
