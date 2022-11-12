import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./Styles/NavBar.styles";
import { activeStyle } from "./Styles/NavBar.styles";

export const NavBar = () => {

  return (
    <StyledNavBar>
      <ul>
        <li>
          <NavLink
            to="/party"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Drużyna
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/history"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Historia
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/npc"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mieszkańcy Barsawii
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/quotes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Kwiatki
          </NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
};
