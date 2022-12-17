import React, { useState, useContext } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  const { userEmail, setEmail, party, setParty } = useContext(Context);
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(noErrors);
  const [passwordError, setPasswordError] = useState(noErrors);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
      setEmail(registerEmail);
      navigate("/settings");
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
    <div className="login">
      <p style={{ marginBottom: "3em" }}>
        Molestiae culpa sequi assumenda cumque cum accusamus dolore. Corrupti
        deleniti, iure facere molestiae expedita ratione laudantium minima saepe
        assumenda id illum excepturi?
      </p>
      <form>
        <h1>Zarejestruj się</h1>
        <FormControl>
          <Input
            {...emailError}
            // {...emailLabels}
            name="email"
            autoComplete="email"
            className="auth"
            onChange={(event) => setRegisterEmail(event.target.value)}
            placeholder="adres email"
          />
        </FormControl>
        <FormControl>
          <Input
            {...passwordError}
            // {...passwordLabels}
            name="new password"
            autoComplete="password"
            className="auth"
            onChange={(event) => setRegisterPassword(event.target.value)}
            placeholder="hasło"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          size="small"
          sx={{
            maxWidth: "10em",
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
            marginTop: "1.5em",
            marginBottom: "3em",
          }}
          onClick={onRegister}
        >
          Zarejestruj się
        </Button>
        <div className="loginAnnotations">
          Masz już konto? Przejdź do{" "}
          <Link to={{ pathname: "/signin" }}>logowania.</Link>
        </div>
      </form>
    </div>
  );
};
