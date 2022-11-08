import React from "react";
import { Box, Slider } from "@mui/material";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  value?: [number, number];
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  // min, max, step, disable, ...
}) => {
  // сделать самому, можно подключать библиотеки
  const handleChange = (event: Event, value: number | number[]) => {
    const newValue = value as number[];
    onChangeRange?.([newValue[0], newValue[1]]);
  };
  return (
    <Box sx={{ width: 138 }}>
      <Slider value={value} onChange={handleChange} />
    </Box>
  );
};

export default SuperDoubleRange;
