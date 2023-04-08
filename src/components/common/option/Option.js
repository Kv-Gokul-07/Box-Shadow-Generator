import { Box, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";
import Input from "../form/input/Input";
import RangeSlider from "../form/slider/Slider";
import "./Option.scss";

const Option = ({ label, name, min, max, step, optType }) => {

  const optionType = (value) => {
    switch (value) {
      case "deg":
      return <sub className="degree_sub">o</sub>
      case "px":
      return "px"
      case "per":
        return "%"
      default:
      return value
  }
  }
  return (
    <Box className="slider_wrapper">
      <Box className="slider_title">
        <Typography variant="h5">{label}</Typography>
        <Box className="slider_input">
          <Field
            small="true"
            // frontadorment="search"
            maxLength={3}
            min={3}
            max={3}
            name={name}
            id={name}
            type="number"
            component={Input}
          />
          <span>{optionType(optType)}</span>
        </Box>
      </Box>
      <Field
        name={name}
        component={RangeSlider}
        step={step}
        min={min}
        max={max}
      />
    </Box>
  );
};

export default Option;
