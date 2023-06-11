import React, { FC, ReactNode } from "react";
import { useAppSelector } from "common/hooks";
import { CardType } from "features/cards/cardsAPI";
import { selectorIsLoading } from "app/appSelectors";
import NotFound from "common/components/NotFount/NotFound";
import { PackType } from "features/packs/packsAPI";
import Preloader from "common/components/Preloader/Preloader";

type PropsType = {
  ifNotFound: "cards" | "card packs";
  children: ReactNode;
  entity: CardType[] | PackType[];
};

const Table: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);

  return props.entity.length > 0 ? (
    <div style={{ minHeight: "40vh" }}>{props.children}</div>
  ) : isLoading ? (
    <div style={{ minHeight: "40vh", display: "flex", alignItems: "center" }}>
      <Preloader />
    </div>
  ) : (
    <NotFound ifNotFound={props.ifNotFound} />
  );
};

export default Table;
