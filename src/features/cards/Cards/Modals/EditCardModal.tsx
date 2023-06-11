import React, { ChangeEvent, FC, useState } from "react";
import style from "common/styles/Modal.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "common/hooks";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import FormControl from "@mui/material/FormControl";

type PropsType = {
  question: string;
  answer: string;
  editCardHandler: (question: string, answer: string) => void;
};

const EditCardModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState<string>(props.question);
  const [answer, setAnswer] = useState<string>(props.answer);
  const [format, setFormat] = useState<"text" | "image">("text");

  const closeModalHandler = () => {
    dispatch(
      cardsParamsActions.setIsModalOpen({ type: "closeAddModal", close: true })
    );
  };

  const editCardHandler = () => props.editCardHandler(question, answer);

  const changeQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const changeAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };
  const changeFormatHandler = (event: any) => {
    setFormat(event.target.value);
  };
  return (
    <div className={style.modal}>
      <div className={style.titleContainer}>
        <div className={style.titleBlock}>
          <p className={style.title}>Edit card</p>
        </div>
      </div>
      <div className={style.mainContainer}>
        <div className={style.select}>
          <span className={style.selectLabel}>Choose a question format</span>
          <FormControl size="small">
            <Select value={format} onChange={changeFormatHandler}>
              <MenuItem value={"text"}>Text</MenuItem>
              <MenuItem value={"image"}>Image</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          value={question}
          fullWidth
          onChange={changeQuestionHandler}
          variant={"standard"}
          label={"Question"}
        />
        <TextField
          value={answer}
          fullWidth
          onChange={changeAnswerHandler}
          variant={"standard"}
          label={"Answer"}
        />
        <div className={style.buttons}>
          <Button
            className={style.button}
            onClick={closeModalHandler}
            variant={"outlined"}
          >
            Cancel
          </Button>
          <Button
            className={style.button}
            onClick={editCardHandler}
            variant={"contained"}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCardModal;
