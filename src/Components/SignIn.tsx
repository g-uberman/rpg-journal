import React from "react";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";

export const SignIn = () => {
  return (
    <StyledLoginContainer>
      <h1>Zaloguj się</h1>
      <FormControl>
        <TextField
          helperText=" "
          variant="standard"
          placeholder="adres email"
        />
        <TextField
          helperText=" "
          variant="standard"
          placeholder="hasło"
        />
        <Button
        variant="outlined"
        size="small">
        Zaloguj się
        </Button>
      </FormControl>
    </StyledLoginContainer>
  );
};
