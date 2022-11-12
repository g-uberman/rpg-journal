import React from "react";
import { StyledNavBar } from "./Styles/NavBar.styles";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <a href="">Drużyna</a>
        </li>
        <li>
          <a href="">Historia</a>
        </li>
        <li>
          <a href="">Mieszkańcy Barsawii</a>
        </li>
        <li>
          <a href="">Kwiatki</a>
        </li>
      </ul>
    </StyledNavBar>
  );
};
