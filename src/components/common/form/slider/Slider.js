import { Box } from "@mui/material";
import React from "react";
import Slider from "@mui/material/Slider";

import "./Slider.scss";

const RangeSlider = ({ field, type, ...props }) => {
  const { name, onChange, value, id } = field;
  const { min, max, step } = props;

  return (
    <Box className="form_slider">
      <Slider
        min={min}
        step={step}
        max={max}
        aria-label="Volume"
        value={value}
        type="range"
        name={name}
        id={id}
        onChange={onChange}
      />
    </Box>
  );
};

export default RangeSlider;
