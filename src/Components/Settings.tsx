import { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";
import { Button } from "@mui/material";
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
          <h4>Zalogowano jako {userEmail}</h4>
          <br />
        </div>
      )}
      <p>
        Amet consectetur, adipisicing elit. Molestiae culpa sequi assumenda
        cumque cum accusamus dolore. Corrupti deleniti, iure facere molestiae
        expedita ratione laudantium minima saepe assumenda id illum excepturi?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        nulla aliquid mollitia corrupti et. Esse dolorum asperiores quam sint
        velit praesentium architecto, culpa quo voluptas maiores nisi magnam
        ullam explicabo. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Atque nihil enim ducimus quas neque. Mollitia, possimus? Nam
        atque, maxime amet dolores repudiandae voluptates, voluptatum
        consequuntur impedit eligendi laborum adipisci animi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit.
      </p>
      <h1>Ustawienia drużyny</h1>
      <p>
        Ea, quis quas architecto eos quaerat velit pariatur, alias, eius ipsam
        tenetur neque quisquam. Sint iusto similique excepturi voluptas
        inventore natus eligendi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempora tenetur alias voluptate culpa, sequi iste
        consequatur voluptatum nihil maiores! Quidem nobis consequatur delectus
        vel possimus. Ipsam ratione numquam exercitationem facilis.
      </p>
      <Button
        variant="contained"
        size="small"
        sx={{
          maxWidth: "10em",
          borderRadius: "0",
          outline: "1px solid #5d534d",
          border: "1px solid white",
        }}
        onClick={() => {
          handleLogOut();
        }}
      >
        Wyloguj
      </Button>
    </>
  );
};
