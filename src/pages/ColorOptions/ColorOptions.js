import React from "react";

import { Form, Formik } from "formik";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Option from "../../components/common/option/Option";
import AppLayout from "../../components/layout/AppLayout";
import "../BoxShadow/BoxShadow.scss";
import "./ColorOptions.scss";

const ColorOptions = () => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <AppLayout>
      <section className="custom_section coloOption_section">
        <Typography variant="h1" className="title">
          Color Options
        </Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                red_option: 0,
                green_option: 0,
                blue_option: 0,
                opacity_option: 0.5,
              }}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Option
                        label="Red"
                        name="red_option"
                        min={0}
                        max={255}
                        step={1}
                      />
                      <Option
                        label="Green"
                        name="green_option"
                        min={0}
                        max={255}
                        step={1}
                      />
                      <Option
                        label="Blue"
                        name="blue_option"
                        min={0}
                        max={255}
                        step={1}
                      />
                      <Option
                        label="Opacity"
                        name="opacity_option"
                        min={0}
                        max={1}
                        step={0.1}
                      />
                    </Form>
                  </Grid>
                  <Grid item xs={7} className="right_column custom_colum">
                    <Box className="subColumn_wrapper">
                      <Box
                        className="display_box"
                        style={{
                          backgroundColor: `rgb(${values.values.red_option}, ${values.values.green_option}, ${values.values.blue_option})`,
                        }}
                      >
                        <Typography variant="h5">Without Opacity</Typography>
                      </Box>
                      <Box
                        mt={5}
                        className="display_box custom_display_box"
                        style={{
                          backgroundColor: `rgba(${values.values.red_option}, ${values.values.green_option}, ${values.values.blue_option}, ${values.values.opacity_option})`,
                        }}
                      >
                        <Typography variant="h5">With Opacity</Typography>
                      </Box>
                    </Box>

                    <Box className="resultContent_wrapper">
                      <Box className="result_content">
                        <Typography variant="h6">
                          {`RGB(${values.values.red_option}, ${values.values.green_option}, ${values.values.blue_option})`}
                        </Typography>
                        <ContentCopyOutlinedIcon className="textCopy_icon icon_large" />
                      </Box>
                      <Box className="result_content">
                        <Typography variant="h6">
                          {`RGBA(${values.values.red_option}, ${values.values.green_option}, ${values.values.blue_option}, ${values.values.opacity_option})`}
                        </Typography>
                        <ContentCopyOutlinedIcon className="textCopy_icon icon_large" />
                      </Box>{" "}
                      <Box className="result_content">
                        <Typography variant="h6">
                          {rgbToHex(
                            values.values.red_option,
                            values.values.green_option,
                            values.values.blue_option
                          )}
                        </Typography>
                        <ContentCopyOutlinedIcon className="textCopy_icon icon_large" />
                      </Box>
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

export default ColorOptions;
