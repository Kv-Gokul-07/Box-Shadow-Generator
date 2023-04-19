import React from "react";

import { Form, Formik } from "formik";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Option from "../../components/common/option/Option";
import AppLayout from "../../components/layout/AppLayout";
import "./BorderRadius.scss";

const BorderRadius = () => {
  const [color, setColor] = React.useState("#000000");

  let borderRadius = (values) => {
    return {
      borderRadius: `${values.values.topLeft_Radius}px ${values.values.topRight_Radius}px ${values.values.bottomLeft_Radius}px ${values.values.bottomRight_Radius}px`,
    };
  };

  let backgroundColor = {
    backgroundColor: `${color}`,
  };

  return (
    <AppLayout>
      <section className="custom_section borderRadius_section">
        <Typography variant="h1" className="title">
          Border Radius Generator
        </Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                topLeft_Radius: 0,
                topRight_Radius: 0,
                bottomLeft_Radius: 0,
                bottomRight_Radius: 0,
              }}
              onSubmit={(values, actions) => {}}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Option
                        label="Top Left Radius"
                        name="topLeft_Radius"
                        min={0}
                        max={200}
                        step={1}
                      />
                      <Option
                        label="Top Right Radius"
                        name="topRight_Radius"
                        min={0}
                        max={200}
                        step={1}
                      />
                      <Option
                        label="Bottom Left Radius"
                        name="bottomLeft_Radius"
                        min={0}
                        max={200}
                        step={1}
                      />
                      <Option
                        label="Bottom Right Radius"
                        name="bottomRight_Radius"
                        min={0}
                        max={200}
                        step={1}
                      />
                      <Box className="colorPicker_wrapper">
                        <Typography typography="h5">Background Color</Typography>
                        <MuiColorInput value={color} onChange={(color) => setColor(color)} />
                      </Box>
                    </Form>
                  </Grid>
                  <Grid item xs={7} pl={5} className="right_column custom_colum">
                    <Box
                      className="display_box"
                      style={{ ...borderRadius(values), ...backgroundColor}}
                    ></Box>
                    <Box className="result_content">
                      <Typography variant="h6">
                        {`-webkit-border-radius: ${values.values.topLeft_Radius}px ${values.values.topRight_Radius}px ${values.values.bottomLeft_Radius}px ${values.values.bottomRight_Radius}px;`}
                      </Typography>
                      <Typography variant="h6">
                        {`-moz-border-radius: ${values.values.topLeft_Radius}px ${values.values.topRight_Radius}px ${values.values.bottomLeft_Radius}px ${values.values.bottomRight_Radius}px;`}
                      </Typography>
                      <Typography variant="h6">
                        {`border-radius: ${values.values.topLeft_Radius}px ${values.values.topRight_Radius}px ${values.values.bottomLeft_Radius}px ${values.values.bottomRight_Radius}px;`}
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

export default BorderRadius;
