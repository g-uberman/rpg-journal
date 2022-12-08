import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#5d534d",
      main: "#5d534d",
      dark: "#5d534d",
      contrastText: "#ffffff",
    },
  },
  typography: {
    "fontFamily": `"Gideon Roman", cursive`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});
