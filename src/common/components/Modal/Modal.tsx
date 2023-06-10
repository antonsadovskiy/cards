import React, { FC, ReactNode, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app/appSelectors";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { packsParamsActions } from "features/packsParams/packsParamsSlice";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "background.paper",
  boxShadow: 14,
};

type PropsType = {
  type: "addModal" | "deleteModal" | "editModal";
  children: ReactNode;
};

export const BasicModal: FC<PropsType> = ({ children, ...props }) => {
  const dispatch = useAppDispatch();
  const addModal = useAppSelector((state) => state.packsParams.closeAddModal);
  const editModal = useAppSelector((state) => state.packsParams.closeEditModal);
  const deleteModal = useAppSelector(
    (state) => state.packsParams.closeDeleteModal
  );

  const isLoading = useAppSelector(selectorIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (addModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeAddModal",
          close: false,
        })
      );
    }
  }, [addModal]);
  useEffect(() => {
    if (editModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeEditModal",
          close: false,
        })
      );
    }
  }, [editModal]);
  useEffect(() => {
    if (deleteModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeDeleteModal",
          close: false,
        })
      );
    }
  }, [deleteModal]);

  const modalBtnDeleteEditView = (
    <IconButton disabled={isLoading} onClick={handleOpen}>
      {props.type === "editModal" && (
        <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
      )}
      {props.type === "deleteModal" && (
        <DeleteIcon sx={{ width: "20px", height: "20px" }} />
      )}
    </IconButton>
  );

  return (
    <div>
      {props.type === "addModal" && (
        <Button variant={"contained"} disabled={isLoading} onClick={handleOpen}>
          Add new pack
        </Button>
      )}
      {props.type === "editModal" && modalBtnDeleteEditView}
      {props.type === "deleteModal" && modalBtnDeleteEditView}

      <Modal id={props.type} open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
