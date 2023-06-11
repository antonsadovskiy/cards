import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { BasicModal } from "common/components/Modal/Modal";
import EditCardModal from "features/cards/Cards/Modals/EditCardModal";
import { useModalHandle } from "common/hooks/useModalHandle";
import DeleteCardModal from "features/cards/Cards/Modals/DeleteCardModal";

type PropsType = {
  cardId: string;
  question: string;
  answer: string;
};

const Edit: FC<PropsType> = (props) => {
  const { editCardHandler, deleteCardHandler } = useModalHandle(props.cardId);

  return (
    <TableCell sx={{ display: "flex" }}>
      <BasicModal type={"editCardModal"}>
        <EditCardModal
          editCardHandler={editCardHandler}
          question={props.question}
          answer={props.answer}
        />
      </BasicModal>
      <BasicModal type={"deleteCardModal"}>
        <DeleteCardModal deleteCardHandler={deleteCardHandler} />
      </BasicModal>
    </TableCell>
  );
};

export default Edit;
