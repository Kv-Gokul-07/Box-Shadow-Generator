import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import { Form, Formik } from "formik";
import "react-color-palette/lib/css/styles.css";
import Option from "../../components/common/option/Option";
import "../BoxShadow/BoxShadow.scss";
import "./TextShadow.scss";
import AppLayout from "../../components/layout/AppLayout";
import { MuiColorInput } from "mui-color-input";

const TextShadow = () => {
  const [color, setColor] = React.useState("#121212");

  return (
    <AppLayout>
      <section className="custom_section textShadow_section">
        <Typography variant="h1" className="title">Text Shadow Generator</Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                text_horizontal_shadow: 0,
                text_vertical_shadow: 0,
                text_blur_radius: 0,
                text_shadow_opacity: 1,
              }}
              onSubmit={(values, actions) => {}}
              // handleChange={(searchOption) => {
              //   console.log(searchOption, "changing");
              // }}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Option
                        label="Horizontal Shadow Length"
                        name="text_horizontal_shadow"
                        min={-200}
                        max={200}
                        step={1}
                      />
                      <Option
                        label="Vertical Shadow Length"
                        name="text_vertical_shadow"
                        min={-200}
                        max={200}
                        step={1}
                      />
                      <Option
                        label="Blur Radius"
                        name="text_blur_radius"
                        min={0}
                        max={50}
                        step={1}
                      />
                       <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Background Color</Typography>
                        <MuiColorInput value={color} onChange={(color) => setColor(color)} />
                      </Box>
                    </Form>
                  </Grid>
                  <Grid item xs={7} className="right_column custom_colum">
                    <Box className="display_box">
                      <Box className="text_content">
                        <Typography
                          variant="h1"
                          style={{
                            textShadow: `${values.values.text_horizontal_shadow}px ${values.values.text_vertical_shadow}px ${values.values.text_blur_radius}px ${color}`,
                          }}
                        >
                          This text is the preview text
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="result_content">
                        <Typography variant="h6">
                          {`text-shadow: ${values.values.text_horizontal_shadow}px ${values.values.text_vertical_shadow}px ${values.values.text_blur_radius}px ${color};`}
                        </Typography>
                        <ContentCopyOutlinedIcon className="textCopy_icon icon_large" />
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

export default TextShadow;
