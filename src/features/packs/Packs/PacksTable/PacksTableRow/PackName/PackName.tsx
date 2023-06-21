import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { cutTheString } from "common/utils";
import style from "common/components/Table/Table.module.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";
import emptyCover from "assets/images/empty-image.png";

type PropsType = {
  packId: string;
  name: string;
  deckCover: string;
};

const WRONG_COVER = "url or base64";

const PackName: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);
  return (
    <TableCell className={isLoading ? style.disable : style.packName}>
      <NavLink to={"/packs/" + props.packId}>
        <div className={style.packNameContainer}>
          <img
            src={
              props.deckCover
                ? props.deckCover === WRONG_COVER
                  ? emptyCover
                  : props.deckCover
                : emptyCover
            }
            width={"80"}
            height={"50"}
            alt={"cover"}
          />
          {cutTheString(props.name, 35)}
        </div>
      </NavLink>
    </TableCell>
  );
};

export default PackName;
