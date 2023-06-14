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
import {
  selectorCloseAddPackModal,
  selectorCloseDeletePackModal,
  selectorCloseEditPackModal,
} from "features/packsParams/packsParamsSelectors";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import {
  selectorCloseAddCardModal,
  selectorCloseDeleteCardModal,
  selectorCloseEditCardModal,
} from "features/cardsParams/cardsParamsSelectors";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "background.paper",
  boxShadow: 14,
};

type PackModalType = "addPackModal" | "deletePackModal" | "editPackModal";
type CardModalType = "addCardModal" | "deleteCardModal" | "editCardModal";

type PropsType = {
  type: PackModalType | CardModalType;
  children: ReactNode;
};

export const BasicModal: FC<PropsType> = ({ children, ...props }) => {
  const dispatch = useAppDispatch();

  const addPackModal = useAppSelector(selectorCloseAddPackModal);
  const editPackModal = useAppSelector(selectorCloseEditPackModal);
  const deletePackModal = useAppSelector(selectorCloseDeletePackModal);

  const addCardModal = useAppSelector(selectorCloseAddCardModal);
  const editCardModal = useAppSelector(selectorCloseEditCardModal);
  const deleteCardModal = useAppSelector(selectorCloseDeleteCardModal);

  const isLoading = useAppSelector(selectorIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // TODO I don't understand this shit the next day
  useEffect(() => {
    if (addPackModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeAddModal",
          close: false,
        })
      );
    }
  }, [dispatch, addPackModal]);
  useEffect(() => {
    if (editPackModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeEditModal",
          close: false,
        })
      );
    }
  }, [dispatch, editPackModal]);
  useEffect(() => {
    if (deletePackModal) {
      setOpen(false);
      dispatch(
        packsParamsActions.setIsModalOpen({
          type: "closeDeleteModal",
          close: false,
        })
      );
    }
  }, [dispatch, deletePackModal]);

  useEffect(() => {
    if (addCardModal) {
      setOpen(false);
      dispatch(
        cardsParamsActions.setIsModalOpen({
          type: "closeAddModal",
          close: false,
        })
      );
    }
  }, [dispatch, addCardModal]);
  useEffect(() => {
    if (editCardModal) {
      setOpen(false);
      dispatch(
        cardsParamsActions.setIsModalOpen({
          type: "closeEditModal",
          close: false,
        })
      );
    }
  }, [dispatch, editCardModal]);
  useEffect(() => {
    if (deleteCardModal) {
      setOpen(false);
      dispatch(
        cardsParamsActions.setIsModalOpen({
          type: "closeDeleteModal",
          close: false,
        })
      );
    }
  }, [dispatch, deleteCardModal]);

  const modalBtnDeleteEditView = (
    <IconButton disabled={isLoading} onClick={handleOpen}>
      {(props.type === "editPackModal" || props.type === "editCardModal") && (
        <BorderColorIcon sx={{ width: "20px", height: "20px" }} />
      )}
      {(props.type === "deletePackModal" ||
        props.type === "deleteCardModal") && (
        <DeleteIcon sx={{ width: "20px", height: "20px" }} />
      )}
    </IconButton>
  );

  return (
    <div>
      {/*packs buttons*/}
      {props.type === "addPackModal" && (
        <Button variant={"contained"} disabled={isLoading} onClick={handleOpen}>
          Add new pack
        </Button>
      )}
      {props.type === "editPackModal" && modalBtnDeleteEditView}
      {props.type === "deletePackModal" && modalBtnDeleteEditView}

      {/*cards buttons*/}
      {props.type === "addCardModal" && (
        <Button variant={"contained"} disabled={isLoading} onClick={handleOpen}>
          Add new card
        </Button>
      )}
      {props.type === "editCardModal" && modalBtnDeleteEditView}
      {props.type === "deleteCardModal" && modalBtnDeleteEditView}

      {/*common modal*/}
      <Modal id={props.type} open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
