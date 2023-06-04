import React, { FC } from "react";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import IconButton from "@mui/material/IconButton";
import style from "features/packs/Packs/ClearFilter/ClearFilter.module.css";
import { cardsThunks } from "features/cards/cardsSlice";
import { useAppDispatch } from "common/hooks";

type PropsType = {
  onClickClearFilterHandler: () => void;
};

const ClearFilter: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    props.onClickClearFilterHandler();
    dispatch(cardsThunks.getCards({}));
  };

  return (
    <div className={style.filter}>
      <IconButton onClick={onClickHandler}>
        <FilterAltOffIcon />
      </IconButton>
    </div>
  );
};

export default ClearFilter;
