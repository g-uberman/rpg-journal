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
import { signInWithEmailAndPassword } from "firebase/auth";

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

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement> | null
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

  const handleEnter = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin(null);
    }
  }

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
    <div className="login">
      <p style={{ marginBottom: "3em" }}>
        Molestiae culpa sequi assumenda cumque cum accusamus dolore. Corrupti
        deleniti, iure facere molestiae expedita ratione laudantium minima saepe
        assumenda id illum excepturi?
      </p>
      <form>
        <h1>Zaloguj się</h1>
        <FormControl>
          <Input
            {...emailError}
            // {...emailLabels}
            id="loginEmail"
            name="email"
            autoComplete="username"
            className="auth"
            placeholder="adres email"
            onChange={(event) => setLogin(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
            type="text"
          />
        </FormControl>
        <FormControl>
          <Input
            {...passwordError}
            // {...passwordLabels}
            id="loginPassword"
            name="password"
            autoComplete="current-password"
            className="auth"
            placeholder="hasło"
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
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
            marginBottom: "2.25em",
          }}
          onClick={handleLogin}
        >
          Zaloguj się
        </Button>
        <div className="loginAnnotations">
          Nie masz jeszcze konta? Przejdź do{" "}
          <Link to={{ pathname: "/signup" }}>rejestracji.</Link>
        </div>
        <div className="loginAnnotations">
          Zapomniałeś hasła? Nic na to nie poradzimy.
        </div>
      </form>
    </div>
  );
};
