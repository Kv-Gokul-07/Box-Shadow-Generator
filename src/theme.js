import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['Roboto'],
          h1: {
            fontSize: "2.125rem",
            fontWeight: "600"
          },
          h2: {
            fontSize: "1.875rem",
            fontWeight: "600"
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "600"
          },
          h4: {
            fontSize: "1.125rem",
            fontWeight: "600"
          },
          h5: {
            fontSize: "1.125rem",
            fontWeight: "600"
          },
          h6: {
            fontSize: "1rem",
            fontWeight: "400"
          },
          grey: {
            color: "$black"
          },
          black: {
            color: "$black"
          }
    },
  })

export default theme;