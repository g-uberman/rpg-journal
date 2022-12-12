import React, { useContext } from "react";
import { Context } from "../ContextProvider";

export const Settings = () => {
  const { userEmail, party, setParty } = useContext(Context);

  return (
    <>
      <h1>Ustawienia</h1>
      <h3>Ustawienia użytkownika</h3>
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
      <h3>Ustawienia drużyny</h3>
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
