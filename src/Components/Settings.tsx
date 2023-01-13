import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Button, FormControl, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "..";
import { signOut } from "firebase/auth";

export const Settings = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);
  const navigate = useNavigate();

  // force out unlogged users
  useEffect(() => {
    if (!userEmail) {
      navigate("/signin");
    }
  }, []);

  const handleLogOut = async (): Promise<void> => {
    await signOut(firebaseAuth);
    setEmail("");
    navigate("/signin");
  };

  return (
    <>
      <h1>Ustawienia użytkownika</h1>
      {userEmail && (
        <div>
          <h3>Zalogowano jako {userEmail}</h3>
        </div>
      )}
      <p>
        Amet consectetur, adipisicing elit. Molestiae culpa sequi assumenda
        cumque cum accusamus dolore.
      </p>
      <div className="flexColumn">
        <FormControl>
          <h5>Adres e-mail:</h5>
          <Input
            id="loginEmail"
            className="auth"
            type="text"
            value={userEmail}
            disabled
            sx={{
              maxWidth: "250px",
              marginTop: "0",
            }}
          />
        </FormControl>
        <FormControl>
          <h5>Imię:</h5>
          <Input
            id="displayName"
            className="auth"
            type="text"
            sx={{
              maxWidth: "250px",
              marginTop: "0",
            }}
          />
        </FormControl>
      </div>
      <div className="flexColumn">
        <h3>Zmiana hasła</h3>
        <FormControl>
          <h5>Aktualne hasło:</h5>
          <Input
            id="displayName"
            className="auth"
            type="text"
            sx={{
              maxWidth: "250px",
              marginTop: "0",
            }}
          />
        </FormControl>
        <FormControl>
          <h5>Nowe hasło:</h5>
          <Input
            id="displayName"
            className="auth"
            type="text"
            sx={{
              maxWidth: "250px",
              marginTop: "0",
            }}
          />
        </FormControl>
      </div>
      <div className="flexColumn">
        <Button
          variant="contained"
          size="small"
          sx={{
            maxWidth: "10em",
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
            margin: "1em 0 0",
          }}
          onClick={() => {
            handleLogOut();
          }}
        >
          Zmień hasło
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            maxWidth: "10em",
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
            margin: "1em 0 3em",
          }}
          onClick={() => {
            handleLogOut();
          }}
        >
          Wyloguj
        </Button>
      </div>
      <h1>Ustawienia drużyny</h1>
      <p>
        Ea, quis quas architecto eos quaerat velit pariatur, alias, eius ipsam
        tenetur neque quisquam. Sint iusto similique excepturi voluptas
        inventore natus eligendi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempora tenetur alias voluptate culpa, sequi iste
        consequatur voluptatum nihil maiores! Quidem nobis consequatur delectus
        vel possimus. Ipsam ratione numquam exercitationem facilis.
      </p>
    </>
  );
};
