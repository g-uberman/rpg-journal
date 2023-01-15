import { useContext, useEffect, useState } from "react";
import { Context, noUser } from "../ContextProvider";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "..";
import { signOut } from "firebase/auth";

export const Settings = () => {
  const { user, setUser, party, setParty } = useContext(Context);
  const navigate = useNavigate();
  const [newName, setNewName] = useState(user.displayName);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // force out unlogged users
  useEffect(() => {
    if (!user.email) {
      navigate("/signin");
    }
  }, []);

  const handleLogOut = async (): Promise<void> => {
    await signOut(firebaseAuth);
    setUser(noUser);
    navigate("/signin");
  };

  const handleEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter" && (document.activeElement as HTMLElement)) {
      (document.activeElement as HTMLElement).blur();
    }
  };

  const changeDisplayName = () => {
    // send currentName as new user.displayName to Firebase
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1((show) => !show);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          <div className="settingsRow">
            <Input
              id="loginEmail"
              className="auth"
              type="text"
              value={user.email}
              readOnly
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
                scale: "80%",
                width: "100px",
                marginBottom: "10px",
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
          <div className="settingsRow">
            <Input
              id="displayName"
              name="displayName"
              className="auth"
              type="text"
              defaultValue={newName}
              onChange={(event) => setNewName(event.target.value)}
              onKeyDown={(event) => handleEnter(event)}
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
                scale: "80%",
                width: "100px",
                marginBottom: "10px",
              }}
              onClick={changeDisplayName}
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
          <div className="settingsRow">
            <Input
              // {...passwordError}
              id="currentPassword"
              name="current-password"
              autoComplete="current-password"
              className="auth"
              placeholder="hasło"
              onChange={(event) => setCurrentPassword(event.target.value)}
              onKeyDown={(event) => handleEnter(event)}
              type={showPassword1 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                width: "100%",
                marginTop: "0",
              }}
            />
            <div
              style={{
                width: "108px",
              }}
            ></div>
          </div>
        </FormControl>
        <FormControl>
          <h5>Nowe hasło:</h5>
          <div className="settingsRow">
            <Input
              // {...passwordError}
              id="newPassword"
              name="new-password"
              autoComplete="new-password"
              className="auth"
              placeholder="nowe hasło"
              onChange={(event) => setNewPassword(event.target.value)}
              onKeyDown={(event) => handleEnter(event)}
              type={showPassword2 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
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
                scale: "80%",
                width: "100px",
                marginBottom: "10px",
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
