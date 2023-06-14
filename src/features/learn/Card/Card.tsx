import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import style from "features/learn/Card/Card.module.css";
import { CardType } from "features/cards/cardsAPI";

const radioButtons = [
  "Didn't know",
  "Forgot",
  "A lot of thought",
  "Confused",
  "Knew the answer",
];

type PropsType = {
  showNextCardHandler: () => void;
  card: CardType;
};

const Card: FC<PropsType> = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const showAnswerHandler = () => setShowAnswer(true);

  const nextCardHandler = () => {
    setShowAnswer(false);
    props.showNextCardHandler();
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
              {radioButtons.map((btn) => (
                <FormControlLabel value={btn} control={<Radio />} label={btn} />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      )}
      {showAnswer && (
        <Button variant={"contained"} fullWidth onClick={nextCardHandler}>
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
