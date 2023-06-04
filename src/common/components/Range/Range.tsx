import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { FC } from "react";

type PropsType = {
  value: number[];
  onChangeRangeHandler: (value: number[]) => void;
  onChangeCommittedHandler: () => void;
};

const Range: FC<PropsType> = (props) => {
  const onChangeHandler = (event: any, value: number[] | number) => {
    props.onChangeRangeHandler(value as number[]);
  };

  const onChangeCommitted = () => {
    props.onChangeCommittedHandler();
  };

  return (
    <Box sx={{ width: 155 }}>
      <Slider
        max={110}
        value={props.value}
        onChange={onChangeHandler}
        onChangeCommitted={onChangeCommitted}
      />
    </Box>
  );
};

export default Range;
