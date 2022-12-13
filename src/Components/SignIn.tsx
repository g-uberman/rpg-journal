import React, { useState, useContext } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const INVALID_EMAIL_ERROR = "auth/invalid-email";
const WRONG_PASSWORD_ERROR = "auth/wrong-password";
const USER_NOT_FOUND_ERROR = "auth/user-not-found";

interface ErrorProps {
  error: boolean;
}

const noErrors: ErrorProps = {
  error: false,
};

export const SignIn = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(noErrors);
  const [passwordError, setPasswordError] = useState(noErrors);

  const clearErrors = () => {
    setTimeout(() => {
      setErrorMessage("");
      setEmailError(noErrors);
      setPasswordError(noErrors);
    }, 5000);
  };

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!login || !password) {
      setErrorMessage("errorAllFields");
      setEmailError({ error: true });
      setPasswordError({ error: true });
      clearErrors();
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, login, password);
      setEmail(login);
      navigate("/party");
    } catch ({ code, message }) {
      handleFirebaseError(code);
    }
  };

  const handleFirebaseError = (code: unknown) => {
    switch (code) {
      case INVALID_EMAIL_ERROR:
        setErrorMessage("errorInvalidEmail");
        setEmailError({ error: true });
        break;
      case WRONG_PASSWORD_ERROR:
        setErrorMessage("errorIncorrectPassword");
        setPasswordError({ error: true });
        break;
      case USER_NOT_FOUND_ERROR:
        setErrorMessage("errorNoAccount");
        setEmailError({ error: true });
        break;
      default:
        break;
    }
    clearErrors();
  };

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
          {...emailError}
          // {...emailLabels}
          InputProps={{ className: "login" }}
          onChange={(event) => setLogin(event.target.value)}
          helperText=" "
          variant="standard"
          placeholder="adres email"
          sx={{ marginTop: "1em" }}
        />
        <TextField
          {...passwordError}
          // {...passwordLabels}
          InputProps={{ className: "login" }}
          onChange={(event) => setPassword(event.target.value)}
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
          onClick={handleLogin}
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
