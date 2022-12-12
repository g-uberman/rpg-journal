import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledLoginContainer } from "./Styles/Login.styles";
import { FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const USER_ALREADY_EXISTS_ERROR = "auth/email-already-in-use";
const WEAK_PASSWORD_ERROR = "auth/weak-password";
const INVALID_EMAIL_ERROR = "auth/invalid-email";

interface ErrorProps {
  error: boolean;
}

const noErrors: ErrorProps = {
  error: false,
};

export const SignUp = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
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

  const onRegister = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (!registerPassword || !repeatedPassword || !registerEmail) {
      setErrorMessage("errorAllFields");
      setEmailError({ error: true });
      setPasswordError({ error: true });
      clearErrors();
      return;
    }
    if (registerPassword !== repeatedPassword) {
      setErrorMessage("errorPasswordsDifferent");
      setPasswordError({ error: true });
      clearErrors();
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // setUsername(registerEmail);
      navigate("/party");
    } catch ({ code, message }) {
      handleFirebaseError(code);
    }
  };

  const handleFirebaseError = (code: unknown) => {
    switch (code) {
      case WEAK_PASSWORD_ERROR:
        setErrorMessage("errorWeakPassword");
        setPasswordError({ error: true });
        break;
      case INVALID_EMAIL_ERROR:
        setErrorMessage("errorInvalidEmail");
        setEmailError({ error: true });
        break;
      case USER_ALREADY_EXISTS_ERROR:
        setErrorMessage("errorAlreadyExists");
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
      <h1>Zarejestruj się</h1>
      <FormControl>
        <TextField
          InputProps={{ className: "login" }}
          {...emailError}
          // {...emailLabels}
          onChange={(event) => setRegisterEmail(event.target.value)}
          helperText=" "
          variant="standard"
          placeholder="adres email"
          sx={{ marginTop: "1em" }}
        />
        <TextField
          InputProps={{ className: "login" }}
          {...passwordError}
          // {...passwordLabels}
          onChange={(event) => setRegisterPassword(event.target.value)}
          helperText=" "
          variant="standard"
          placeholder="hasło"
          type="password"
        />
        <TextField
          InputProps={{ className: "login" }}
          {...passwordError}
          // {...password2Labels}
          onChange={(event) => setRepeatedPassword(event.target.value)}
          helperText=" "
          variant="standard"
          placeholder="powtórzone hasło"
          type="password"
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            maxWidth: "10em",
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
          }}
          onClick={onRegister}
        >
          Zaloguj się
        </Button>
        <div style={{ height: "63.5px", paddingTop: "2.3em" }}>
          Masz już konto? Przejdź do{" "}
          <Link to={{ pathname: "/signin" }}>logowania.</Link>
        </div>
      </FormControl>
    </StyledLoginContainer>
  );
};
