import React, { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
  open: boolean;
  onClose: () => void;
  button: ReactNode;
  children: ReactNode;
};

export const BasicModal: FC<PropsType> = ({ children, ...props }) => {
  return (
    <div>
      {props.button}
      <Modal open={props.open} onClose={props.onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
