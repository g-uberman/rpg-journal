import { useState, useContext, useEffect } from "react";
import { Context } from "./../ContextProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormControl, Input, Button } from "@mui/material";

export const ResetPassword = () => {
  const { userEmail } = useContext(Context);
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [reset, setReset] = useState(false);

  // force out logged users
  useEffect(() => {
    if (userEmail) {
      navigate("/");
    }
  }, [userEmail]);

  const handleReset = async (
    event: React.MouseEvent<HTMLButtonElement> | null
  ): Promise<void> => {
    // FIREBASE PASSWORD HANDLING NEEDS TO GO HERE
    setReset(true);
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
      <h1>Reset password</h1>
      {!reset && (
        <div>
          <FormControl>
            <Input
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
            Zresetuj hasło
          </Button>
        </div>
      )}
      {reset && (
        <div className="loginAnnotations">
          Nowe hasło zostało wysłane na adres email.
        </div>
      )}
      <div className="loginAnnotations">
        Wróć do <Link to={{ pathname: "/signin" }}>logowania.</Link>
      </div>
    </div>
  );
};
