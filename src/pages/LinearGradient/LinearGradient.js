import React from "react";

import { Field, Form, Formik } from "formik";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Option from "../../components/common/option/Option";
import AppLayout from "../../components/layout/AppLayout";
import FormSelect from "../../components/common/form/Select/Select";
import { orentation, Size, Position } from "../../components/jsonData";

import "./LinearGradient.scss";
import { textCopyFunc } from "../../components/common/Utils";


const LinearGradient = () => {
  const [color, setColor] = React.useState("rgb(56, 217, 168)");
  const [backgroundColor, setBackgroundColor] = React.useState("rgb(215, 7, 7)");

  function gradientType(values) {
    const { orientation_type, linear_degree, linear_size, linear_position, start_color, end_color } =
      values.values;

    switch (orientation_type) {
      case "linaer":
        return `linear-gradient(${linear_degree}deg, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      case "radial":
        return `radial-gradient(circle ${linear_size} at ${linear_position}, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      case "elliptical":
        return `radial-gradient(ellipse ${linear_size} at ${linear_position}, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      case "repeat linear":
        return `repeating-linear-gradient(${linear_degree}deg, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      case "repeat radial":
        return `repeating-radial-gradient(circle ${linear_size} at ${linear_position}, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      case "repeat elliptical":
        return `repeating-radial-gradient(ellipse ${linear_size} at ${linear_position}, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
      default:
        return `linear-gradient(${linear_degree}deg, ${color} ${start_color}%, ${backgroundColor} ${end_color}%)`;
    }
  }

  return (
    <AppLayout>
      <section className="custom_section linearGradient_section">
        <Typography variant="h1" className="title">
          Linear Gradient
        </Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                linear_degree: 0,
                orientation_type: "linear",
                linear_size: "farthest-side",
                linear_position: "top left",
                start_color: 20,
                end_color: 80
              }}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Box className="slider_wrapper">
                        <Box className="slider_title">
                          <Typography variant="h5">Size</Typography>
                          <Box className="slider_input custom_slider_input">
                            <Field
                              name="orientation_type"
                              dropDownIon="keyboardArrow"
                              component={FormSelect}
                              optionData={orentation}
                              optionValueKey="id"
                              optionLabelKey="value"
                            />
                          </Box>
                        </Box>
                      </Box>

                      {values.values.orientation_type === "linear" && (
                        <Option
                          label="Degree"
                          name="linear_degree"
                          min={0}
                          max={360}
                          step={1}
                          optType={"deg"}
                        />
                      )}

                      {values.values.orientation_type !== "linear" && (
                        <>
                          <Box className="slider_wrapper">
                            <Box className="slider_title">
                              <Typography variant="h5">Position</Typography>
                              <Box className="slider_input custom_slider_input">
                                <Field
                                  name="linear_size"
                                  dropDownIon="keyboardArrow"
                                  component={FormSelect}
                                  optionData={Size}
                                  optionValueKey="id"
                                  optionLabelKey="value"
                                />
                              </Box>
                            </Box>
                          </Box>
                          <Box className="slider_wrapper">
                            <Box className="slider_title">
                              <Typography variant="h5">Orientation</Typography>
                              <Box className="slider_input custom_slider_input">
                                <Field
                                  name="linear_position"
                                  dropDownIon="keyboardArrow"
                                  component={FormSelect}
                                  optionData={Position}
                                  optionValueKey="id"
                                  optionLabelKey="value"
                                />
                              </Box>
                            </Box>
                          </Box>
                        </>
                      )}

                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Start Color</Typography>
                        <MuiColorInput
                          value={color}
                          onChange={(color) => setColor(color)}
                        />
                      </Box>
                      <Option
                          label="Start color Percentage"
                          name="start_color"
                          min={0}
                          max={100}
                          step={1}
                          optType={"per"}
                        />
                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">End Color</Typography>
                        <MuiColorInput
                          value={backgroundColor}
                          onChange={(color) => setBackgroundColor(color)}
                        />
                      </Box>
                      <Option
                          label="End color Percentage"
                          name="end_color"
                          min={0}
                          max={100}
                          step={1}
                          optType={"per"}
                        />
                    </Form>
                  </Grid>
                  <Grid item xs={7} pl={5} className="right_column custom_colum">
                    <Box
                      className="display_box"
                      style={{
                        background: gradientType(values),
                      }}
                    ></Box>
                    <Box className="result_content" id="result_text">
                      <Typography variant="h6">
                        background: {gradientType(values)};
                      </Typography>
                      <ContentCopyOutlinedIcon onClick={ () => textCopyFunc("result_text") } className="textCopy_icon icon_large" />
                    </Box>
                  </Grid>
                </>
              )}
            </Formik>
          </Grid>
        </Container>
      </section>
    </AppLayout>
  );
};

export default LinearGradient;
