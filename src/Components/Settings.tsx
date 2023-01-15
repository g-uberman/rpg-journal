import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Button, FormControl, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "..";
import { signOut } from "firebase/auth";

export const Settings = () => {
  const { user, setEmail, party, setParty } = useContext(Context);
  const navigate = useNavigate();

  // force out unlogged users
  useEffect(() => {
    if (!user) {
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
      <p>
        Amet consectetur, adipisicing elit. Molestiae culpa sequi assumenda
        cumque cum accusamus dolore.
      </p>
      <div className="flexColumn">
      <h3>Dane użytkownika</h3>
        <FormControl>
          <h5>Adres e-mail:</h5>
          <div className="flexRowSpaced settingsRow">
            <Input
              id="loginEmail"
              className="auth"
              type="text"
              value={user}
              disabled
              sx={{
                width: "100%",
                marginTop: "0",
              }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "0",
                outline: "1px solid #5d534d",
                border: "1px solid white",
                paddingTop: "0",
                paddingBottom: "0",
                scale: "70%",
                width: "100px",
              }}
              onClick={() => {
                handleLogOut();
              }}
            >
              Wyloguj
            </Button>
          </div>
        </FormControl>
        <FormControl>
          <h5>Imię:</h5>
          <div className="flexRowSpaced settingsRow">
            <Input
              id="displayName"
              className="auth"
              type="text"
              sx={{
                width: "100%",
                marginTop: "0",
              }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "0",
                outline: "1px solid #5d534d",
                border: "1px solid white",
                paddingTop: "0",
                paddingBottom: "0",
                scale: "70%",
                width: "100px",
              }}
            >
              Zmień
            </Button>
          </div>
        </FormControl>
      </div>
      <div className="flexColumn">
        <h3>Zmiana hasła</h3>
        <FormControl>
          <h5>Aktualne hasło:</h5>
        <div className="flexRowSpaced settingsRow">
          <Input
            id="displayName"
            className="auth"
            type="text"
            sx={{
              width: "100%",
              marginTop: "0",
            }}
          />
          <div style={{ width: "100px" }}></div>
          </div>
        </FormControl>
        <FormControl>
          <h5>Nowe hasło:</h5>
          <div className="flexRowSpaced settingsRow">
          <Input
            id="displayName"
            className="auth"
            type="text"
            sx={{
              width: "100%",
              marginTop: "0",
            }}
          />
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: "0",
            outline: "1px solid #5d534d",
            border: "1px solid white",
            paddingTop: "0",
            paddingBottom: "0",
            scale: "70%",
            width: "100px",
          }}
        >
          Zmień
        </Button>
          </div>
        </FormControl>
      </div>
      <div className="flexColumn"></div>
      <div className="divider"></div>
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
