import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "./Styles/NavBar.styles";

export const NavBar = () => {
  let activeClassName ="selectedNav";

  return (
    <StyledNavBar>
      <ul>
        <li>
          <NavLink
            to="/party"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Drużyna
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
