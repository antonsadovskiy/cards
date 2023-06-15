import React, { ChangeEvent, FC, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import style from "features/learn/Card/Card.module.css";
import { CardType, GradeType } from "features/cards/cardsAPI";

const radioButtons = [
  "Didn't know",
  "Forgot",
  "A lot of thought",
  "Confused",
  "Knew the answer",
];

type PropsType = {
  showNextCardHandler: (cardId: string, grade: GradeType) => void;
  card: CardType;
};

const Card: FC<PropsType> = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const [grade, setGrade] = useState<GradeType>();

  const showAnswerHandler = () => setShowAnswer(true);

  const changeGradeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const grade = e.currentTarget.value;
    switch (grade) {
      case "Didn't know":
        setGrade(1);
        break;
      case "Forgot":
        setGrade(2);
        break;
      case "A lot of thought":
        setGrade(3);
        break;
      case "Confused":
        setGrade(4);
        break;
      case "Knew the answer":
        setGrade(5);
        break;
    }
  };

  const nextCardHandler = () => {
    if (grade) {
      setShowAnswer(false);
      props.showNextCardHandler(props.card._id, grade);
    }
  };

  return (
    <div className={style.card}>
      <p className={style.questionAndAnswer}>
        <b>Question:</b> {props.card?.question}
      </p>
      {showAnswer && (
        <div className={style.answer}>
          <p className={style.questionAndAnswer}>
            <b>Answer:</b> {props.card?.answer}
          </p>
          <FormControl>
            <FormLabel>Rate yourself:</FormLabel>
            <RadioGroup>
              {radioButtons.map((btn, index) => (
                <FormControlLabel
                  key={index}
                  value={btn}
                  control={<Radio onChange={changeGradeHandler} />}
                  label={btn}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      )}
      {showAnswer && (
        <Button
          variant={"contained"}
          disabled={!grade}
          fullWidth
          onClick={nextCardHandler}
        >
          Next
        </Button>
      )}
      {!showAnswer && (
        <Button variant={"contained"} fullWidth onClick={showAnswerHandler}>
          Show answer
        </Button>
      )}
    </div>
  );
};

export default Card;
