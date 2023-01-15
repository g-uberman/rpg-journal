import { useState, useContext, useEffect } from "react";
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
  const { user, setUser, party, setParty } = useContext(Context);
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(noErrors);
  const [passwordError, setPasswordError] = useState(noErrors);
  const [showPassword, setShowPassword] = useState(false);

  // force out logged users
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const showErrorMessage = (message: string) => {
    setErrorMessage(message);
    document.getElementsByClassName("loginError")[0].classList.add("visible");
  };

  const clearErrors = () => {
    setTimeout(() => {
      setErrorMessage("");
      setEmailError(noErrors);
      setPasswordError(noErrors);
      document
        .getElementsByClassName("loginError")[0]
        .classList.remove("visible");
    }, 5000);
  };

  const handleRegister = async (
    event: React.MouseEvent<HTMLButtonElement> | null
  ): Promise<void> => {
    if (!registerPassword || !registerEmail) {
      showErrorMessage("Wszystkie pola są wymagane");
      setEmailError({ error: true });
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
      setUser(registerEmail);
      navigate("/settings");
    } catch ({ code, message }) {
      handleFirebaseError(code);
    }
  };

  const handleEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleRegister(null);
    }
  };

  const handleFirebaseError = (code: unknown) => {
    switch (code) {
      case WEAK_PASSWORD_ERROR:
        showErrorMessage("Hasło musi zawierać przynajmniej 6 znaków");
        setPasswordError({ error: true });
        break;
      case INVALID_EMAIL_ERROR:
        showErrorMessage("Błędny adres e-mail");
        setEmailError({ error: true });
        break;
      case USER_ALREADY_EXISTS_ERROR:
        showErrorMessage("Konto na ten adres już istnieje");
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
        <h1>Załóż konto</h1>
        <FormControl>
          <Input
            {...emailError}
            id="registerEmail"
            name="newEmail"
            autoComplete="username"
            className="auth"
            onChange={(event) => setRegisterEmail(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
            placeholder="adres email"
          />
        </FormControl>
        <FormControl>
          <Input
            {...passwordError}
            id="registerPassword"
            name="newPassword"
            autoComplete="new-password"
            className="auth"
            onChange={(event) => setRegisterPassword(event.target.value)}
            onKeyDown={(event) => handleEnter(event)}
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
        <div className="loginError">{errorMessage}</div>
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
          onClick={handleRegister}
        >
          Załóż konto
        </Button>
        <div className="loginAnnotations">
          Masz już konto? Przejdź do{" "}
          <Link to={{ pathname: "/signin" }}>logowania.</Link>
        </div>
      </form>
    </div>
  );
};
