import React, { ChangeEvent, FC, useState } from "react";
import style from "common/styles/Modal.module.css";
import emptyImage from "assets/images/empty-image.png";
import imageStyle from "common/styles/ImageInModal.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "common/hooks";
import { cardsParamsActions } from "features/cardsParams/cardsParamsSlice";
import FormControl from "@mui/material/FormControl";
import FileInput from "common/components/FileInput/FileInput";
import UploadIcon from "@mui/icons-material/Upload";

type PropsType = {
  addCardHandler: (
    question: string,
    questionImg: string,
    answer: string
  ) => void;
};

const AddCardModal: FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [format, setFormat] = useState<"text" | "image">("text");

  const [questionImg, setQuestionImg] = useState("");

  const closeModalHandler = () => {
    dispatch(
      cardsParamsActions.setIsModalOpen({ type: "closeAddModal", close: true })
    );
  };

  const addCardHandler = () => {
    props.addCardHandler(question, answer, questionImg);
  };

  const changeQuestionImgHandler = (questionImg: string) => {
    setQuestionImg(questionImg);
  };
  const changeQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const changeAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };
  const changeFormatHandler = (event: any) => setFormat(event.target.value);

  return (
    <div className={style.modal}>
      <div className={style.titleContainer}>
        <div className={style.titleBlock}>
          <p className={style.title}>Add new card</p>
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
        {format === "text" && (
          <TextField
            value={question}
            fullWidth
            onChange={changeQuestionHandler}
            variant={"standard"}
            label={"Question"}
          />
        )}
        {format === "image" && (
          <>
            <img
              src={questionImg ? questionImg : emptyImage}
              className={imageStyle.image}
              alt={"question"}
            />
            <FileInput changeFileHandler={changeQuestionImgHandler}>
              <>
                <UploadIcon />
                <span className={style.btnStyle}>
                  upload a picture question
                </span>
              </>
            </FileInput>
          </>
        )}
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
            onClick={addCardHandler}
            variant={"contained"}
            disabled={format === "image" && !questionImg}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
