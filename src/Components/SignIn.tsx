import React, { useState, useContext } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);

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
          InputProps={{ className: "login" }}
          helperText=" "
          variant="standard"
          placeholder="adres email"
          sx={{ marginTop: "1em" }}
        />
        <TextField
          InputProps={{ className: "login" }}
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
          Nie masz jeszcze konta? Przejdź do{" "}
          <Link to={{ pathname: "/signup" }}>rejestracji.</Link>
        </div>
      </FormControl>
    </StyledLoginContainer>
  );
};
