import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./Styles/NavBar.styles";
import { StyledHeader } from "./Styles/App.styles";

export const PartyHeader = () => {
  let activeClassName = "selectedNav";

  return (
    <StyledNavBar id="partyHeader">
      <NavLink
        id="partyName"
        to="/party"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Wataha
      </NavLink>
    </StyledNavBar>
  );
};

export const Header = () => {
  let activeClassName = "selectedHeader";

  return (
    <StyledHeader>
      <NavLink id="navHeader"
        to="/party"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      ></NavLink>
      ;
    </StyledHeader>
  );
};

export const NavBar = () => {
  let activeClassName = "selectedNav";

  return (
    <StyledNavBar>
      <ul>
        <li>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Drużynnicy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Historia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/npc"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Mieszkańcy Barsawii
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quotes"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Kwiatki
          </NavLink>
        </li>
      </ul>
    </StyledNavBar>
  );
};
