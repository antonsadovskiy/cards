import React, { useState } from "react";
import { useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import style from "./Packs.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Range from "components/Range/Range";
import IconButton from "@mui/material/IconButton";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

const Packs = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.user.isLoggedIn);

  const [isMyPacks, setIsMyPacks] = useState<boolean>(false);

  const setMyPacks = () => setIsMyPacks(true);
  const setAllPacks = () => setIsMyPacks(false);

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <div className={style.packs}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Packs list</h1>
        <Button variant={"contained"}>add new pack</Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <TextField
          sx={{ maxWidth: "48ch", width: "100%" }}
          size={"small"}
          label={"Provide your text"}
        />
        <ButtonGroup>
          <Button
            variant={isMyPacks ? "contained" : "outlined"}
            sx={{ width: "12ch" }}
            onClick={setMyPacks}
          >
            My
          </Button>
          <Button
            variant={!isMyPacks ? "contained" : "outlined"}
            sx={{ width: "12ch" }}
            onClick={setAllPacks}
          >
            All
          </Button>
        </ButtonGroup>
        <div>1</div>
        <Range />
        <div>2</div>
        <IconButton>
          <FilterAltOffIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Packs;
