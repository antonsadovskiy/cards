import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { FC } from "react";

type PropsType = {
  value: number[];
  onChangeRangeHandler: (value: number[]) => void;
};

const Range: FC<PropsType> = (props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    props.onChangeRangeHandler(newValue as number[]);
  };

  const onChangeCommitted = () => {};

  return (
    <Box sx={{ width: 155 }}>
      <Slider
        value={props.value}
        onChange={handleChange}
        onChangeCommitted={onChangeCommitted}
      />
    </Box>
  );
};

export default Range;
