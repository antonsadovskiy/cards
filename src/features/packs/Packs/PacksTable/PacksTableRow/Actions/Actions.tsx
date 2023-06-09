import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { BasicModal } from "common/components/Modal/Modal";
import EditPackModal from "features/packs/Packs/Modals/EditPackModal";
import TableCell from "@mui/material/TableCell";
import { useAppSelector } from "common/hooks";
import DeletePackModal from "features/packs/Packs/Modals/DeletePackModal";
import { selectorIsLoading } from "app/appSelectors";
import { useModalHandle } from "common/hooks/useModalHandle";
import { useNavigate } from "react-router-dom";

type PropsType = {
  packId: string;
  name: string;
  deckCover: string;
  private: boolean;
  cardsCount: number;
  user_id: string | null;
  packs_user_id: string;
};

const Actions: FC<PropsType> = (props) => {
  const navigate = useNavigate();

  const isLoading = useAppSelector(selectorIsLoading);

  const { editPackHandler, deletePackHandler } = useModalHandle(props.packId);
  const learnPackHandler = () => navigate("/learn/" + props.packId);

  return (
    <TableCell>
      <div style={{ display: "flex" }}>
        <IconButton
          disabled={props.cardsCount === 0 || isLoading}
          onClick={learnPackHandler}
        >
          <SchoolIcon sx={{ width: "20px", height: "20px" }} />
        </IconButton>
        {props.packs_user_id === props.user_id && (
          <BasicModal type={"editPackModal"}>
            <EditPackModal
              packName={props.name}
              private={props.private}
              deckCover={props.deckCover}
              editPackHandler={(name, isPrivatePack, deckCover) =>
                editPackHandler("packsList", name, isPrivatePack, deckCover)
              }
            />
          </BasicModal>
        )}
        {props.packs_user_id === props.user_id && (
          <BasicModal type={"deletePackModal"}>
            <DeletePackModal
              packName={props.name}
              deletePackHandler={() => deletePackHandler("packList")}
            />
          </BasicModal>
        )}
      </div>
    </TableCell>
  );
};

export default Actions;
