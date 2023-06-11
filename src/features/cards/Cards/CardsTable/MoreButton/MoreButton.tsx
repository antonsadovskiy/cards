import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { FC } from "react";
import { Popover } from "@mui/material";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";
import style from "./MoreButton.module.css";
import { BasicModal } from "common/components/Modal/Modal";
import EditPackModal from "features/packs/Packs/Modals/EditPackModal";
import DeletePackModal from "features/packs/Packs/Modals/DeletePackModal";
import { useModalHandle } from "common/hooks/useModalHandle";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";

type PropsType = {
  packId: string;
  packName: string;
};

const MoreButton: FC<PropsType> = (props) => {
  const isLoading = useAppSelector(selectorIsLoading);
  const { editPackHandler, deletePackHandler } = useModalHandle(props.packId);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton disabled={isLoading} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className={style.more}>
          <div className={style.btn}>
            <BasicModal type={"editPackModal"}>
              <EditPackModal
                private={false}
                packName={props.packName}
                editPackHandler={editPackHandler}
              />
            </BasicModal>
            <span>Edit</span>
          </div>
          <div className={style.btn}>
            <BasicModal type={"deletePackModal"}>
              <DeletePackModal
                packName={props.packName}
                deletePackHandler={deletePackHandler}
              />
            </BasicModal>
            <span>Delete</span>
          </div>
          <div
            className={style.btn}
            onClick={() => {
              alert("learn");
            }}
          >
            <IconButton>
              <SchoolIcon sx={{ width: "20px", height: "20px" }} />
            </IconButton>
            <span>Learn</span>
          </div>
        </Box>
      </Popover>
    </>
  );
};

export default MoreButton;