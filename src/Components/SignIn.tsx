import React from "react";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <StyledLoginContainer>
      <p style={{ marginBottom: "3em" }}>
        Molestiae culpa sequi assumenda cumque cum accusamus dolore. Corrupti
        deleniti, iure facere molestiae expedita ratione laudantium minima saepe
        assumenda id illum excepturi?
      </p>
      <h1>Zaloguj się</h1>
      <FormControl>
        <TextField
          helperText=" "
          variant="standard"
          placeholder="adres email"
          sx={{ marginTop: "1em" }}
        />
        <TextField
          helperText=" "
          variant="standard"
          placeholder="hasło"
          type="password"
        />
        <div style={{ height: "63.5px", paddingTop: "0.5em" }}>
          Zapomniałeś hasła? Nic na to nie poradzimy.
        </div>
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
        <div style={{ height: "63.5px", paddingTop: "2.3em" }}>
            Nie masz jeszcze konta? Przejdź do {" "}
            <Link
            to={{pathname:"/signup"}}>
            rejestracji.
            </Link>
        </div>
      </FormControl>
    </StyledLoginContainer>
  );
};
