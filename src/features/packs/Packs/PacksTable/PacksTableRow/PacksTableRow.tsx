import React, { FC } from "react";
import TableRow from "@mui/material/TableRow";
import Actions from "features/packs/Packs/PacksTable/PacksTableRow/Actions/Actions";
import PackName from "features/packs/Packs/PacksTable/PacksTableRow/PackName/PackName";
import CardsCount from "features/packs/Packs/PacksTable/PacksTableRow/CardsCount/CardsCount";
import Updated from "features/packs/Packs/PacksTable/PacksTableRow/Updated/Updated";
import CreatedBy from "features/packs/Packs/PacksTable/PacksTableRow/CreatedBy/CreatedBy";

type PropsType = {
  packId: string;
  name: string;
  private: boolean;
  cardsCount: number;
  updated: string;
  user_name: string;
  user_id: string | null;
  packs_user_id: string;
};

const PacksTableRow: FC<PropsType> = (props) => {
  return (
    <TableRow>
      <PackName name={props.name} />
      <CardsCount cardsCount={props.cardsCount} />
      <Updated updated={props.updated} />
      <CreatedBy user_name={props.user_name} />
      <Actions
        packId={props.packId}
        name={props.name}
        private={props.private}
        cardsCount={props.cardsCount}
        user_id={props.user_id}
        packs_user_id={props.packs_user_id}
      />
    </TableRow>
  );
};

export default PacksTableRow;
