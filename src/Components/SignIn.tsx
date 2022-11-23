import React from "react";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";

export const SignIn = () => {
  return (
    <StyledLoginContainer>
      <p>
        Molestiae culpa sequi
        assumenda cumque cum accusamus dolore. Corrupti deleniti, iure facere
        molestiae expedita ratione laudantium minima saepe assumenda id illum
        excepturi?
      </p>
      <br /><br />
      <h1>Zaloguj się</h1>
      <FormControl>
        <TextField
          helperText=" "
          variant="standard"
          placeholder="adres email"
          sx={{ marginTop: "1em" }}
        />
        <TextField helperText=" " variant="standard" placeholder="hasło" />
        <Button
          variant="contained"
          size="small"
          sx={{
            maxWidth: "10em",
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
          }}
        >
          Zaloguj się
        </Button>
      </FormControl>
    </StyledLoginContainer>
  );
};
