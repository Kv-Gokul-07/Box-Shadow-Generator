import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import { cursorList } from "../../components/jsonData";
import AppLayout from "../../components/layout/AppLayout";
import "./CssCursor.scss";
import { textCopyFunc } from "../../components/common/Utils";

const CssCursor = () => {

  const [cursorValue, setCursorValue] = useState("auto");


  return (
    <AppLayout>
      <section className="custom_section cssCursor_section">
        <Typography variant="h1" className="title">
          CSS Cursor Demonstrator and Generator
        </Typography>
        <Box className="result_content" id="result_text">
          <Typography variant="h5">cursor: {cursorValue};</Typography>
          <ContentCopyOutlinedIcon onClick={ () => textCopyFunc("result_text") } className="textCopy_icon icon_large" />
          <Box className="success_message" id="success_message">Text copied Successfully</Box>
        </Box>
        <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }} className="cursor_list">
          {cursorList.map((cursorType) => (
            <Box 
            className={`cursor_type ${cursorType.label === cursorValue ? "cursorActive" : "cursorInActive" }`}
            style={{cursor: `${cursorType.label}`}} 
            key={cursorType.id}
            onClick={() => setCursorValue(cursorType.label)}> 
              <Typography variant="h5">{cursorType.label}</Typography>
            </Box>
          ))}
        </Box>
        </Container>
      </section>
    </AppLayout>
  );
};

export default CssCursor;
