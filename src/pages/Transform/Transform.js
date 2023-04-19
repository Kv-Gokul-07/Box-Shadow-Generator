import React from "react";

import { Form, Formik } from "formik";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import Option from "../../components/common/option/Option";
import AppLayout from "../../components/layout/AppLayout";
import "../BoxShadow/BoxShadow.scss";
import "./Transform.scss";

const Transform = () => {
  // let border = (values) => {
  //   return {
  //     border: `${values.values.border_width}px ${values.values.border_type}`,
  //   };
  // };

  return (
    <AppLayout>
      <section className="custom_section transform_section">
        <Typography variant="h1" className="title">
          Transform Css
        </Typography>
        <Container>
          <Grid container className="grid_container">
            <Formik
              initialValues={{
                transform_rotate: 0,
                transform_scale: 1,
                transform_skew: 0,
                transform_translateX: 0,
                transform_translateY: 0,
              }}
            >
              {(values) => (
                <>
                  <Grid item xs={5} className="left_column custom_colum">
                    <Form>
                      <Option
                        label="Rotate"
                        name="transform_rotate"
                        min={0}
                        max={360}
                        step={1}
                        optType={"deg"}
                      />
                      <Option
                        label="Scale"
                        name="transform_scale"
                        min={0}
                        max={2}
                        step={0.1}
                        optType={1}
                      />
                      <Option
                        label="Skew"
                        name="transform_skew"
                        min={-180}
                        max={180}
                        step={1}
                        optType={"deg"}
                      />
                      <Option
                        label="Translate X"
                        name="transform_translateX"
                        min={-200}
                        max={200}
                        step={1}
                        optType={"px"}
                      />
                      <Option
                        label="Translate Y"
                        name="transform_translateY"
                        min={-200}
                        max={200}
                        step={1}
                        optType={"px"}
                      />
                    </Form>
                  </Grid>
                  <Grid item xs={7} pl={5} className="right_column custom_colum">
                    <Box
                      className="display_box"
                      style={{
                        transform: `rotate(${values.values.transform_rotate}deg) scale(${values.values.transform_scale}) skew(${values.values.transform_skew}deg) translate(${values.values.transform_translateX}px) translatex(${values.values.transform_translateY}px) translatey(${values.values.transform_translateY}px)`,
                      }}
                    ></Box>
                    <Box className="result_content">
                      <Typography variant="h6">
                        {`-webkit-transform: rotate(${values.values.transform_rotate}deg) scale(${values.values.transform_scale}) skew(${values.values.transform_skew}deg) translatex(${values.values.transform_translateX}px) translatey(${values.values.transform_translateY}px);`}
                      </Typography>
                      <Typography variant="h6">
                        {`-moz-transform: rotate(${values.values.transform_rotate}deg) scale(${values.values.transform_scale}) skew(${values.values.transform_skew}deg) translatex(${values.values.transform_translateX}px) translatey(${values.values.transform_translateY}px);`}
                      </Typography>
                      <Typography variant="h6">
                        {`transform: rotate(${values.values.transform_rotate}) rotate(${values.values.transform_rotate}deg) scale(${values.values.transform_scale}) skew(${values.values.transform_skew}deg) translatex(${values.values.transform_translateX}px) translatey(${values.values.transform_translateY}px);`}
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

export default Transform;
