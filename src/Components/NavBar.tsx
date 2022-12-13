import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./Styles/NavBar.styles";
import { Context } from "../ContextProvider";


export const PartyHeader = () => {
  const { party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";
  const partyName = ""

  return (
    <StyledNavBar id="partyHeader">
      <NavLink
        id="partyName"
        to="/settings"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        {partyName || "Dziennik Drużynowy"}
      </NavLink>
    </StyledNavBar>
  );
};

export const NavBar = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";

  return (
    <StyledNavBar>
      {userEmail && 
      
      <ul>
        <li>
          <NavLink
            to="/party"
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
      }
    </StyledNavBar>
  );
};
