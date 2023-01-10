import { useState, useContext, useEffect } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormControl, Input, Button } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ResetPassword = () => {
  const { userEmail } = useContext(Context);
  const navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState("");
  const [reset, setReset] = useState(false);
  const auth = getAuth();

  // force out logged users
  useEffect(() => {
    if (userEmail) {
      navigate("/");
    }
    return () => {
      setReset(false);
      setResetEmail("");
    };
  }, [userEmail]);

  const handleReset = async (
    event: React.MouseEvent<HTMLButtonElement> | null
  ): Promise<void> => {
    // FIREBASE PASSWORD HANDLING
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        // Password reset email sent
        // Redirect to feedback
        setReset(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleReset(null);
    }
  };

  return (
    <div className="login">
      <p style={{ marginBottom: "3em" }}>
        Molestiae culpa sequi assumenda cumque cum accusamus dolore. Corrupti
        deleniti, iure facere molestiae expedita ratione laudantium minima saepe
        assumenda id illum excepturi?
      </p>
      <h1>Zresetuj hasło</h1>
      {!reset && (
        <div className="flexColumn">
          <FormControl>
            <Input
              id="loginEmail"
              name="email"
              autoComplete="username"
              className="auth"
              placeholder="adres email"
              onChange={(event) => setResetEmail(event.target.value)}
              onKeyDown={(event) => handleEnter(event)}
              type="text"
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
            onClick={handleReset}
          >
            Zresetuj
          </Button>
        </div>
      )}
      {reset && (
        <div>
          <div
            className="loginAnnotations"
            style={{
              paddingTop: "14px",
            }}
          >
            Nowe hasło zostało wysłane na adres:
          </div>
          <div
            className="loginAnnotations"
            style={{
              minHeight: "80.5px",
            }}
          >
            <strong>{resetEmail}</strong>
          </div>
        </div>
      )}
      <div className="loginAnnotations">
        Wróć do <Link to={{ pathname: "/signin" }}>logowania.</Link>
      </div>
    </div>
  );
};
