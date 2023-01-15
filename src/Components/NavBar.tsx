import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextProvider";

export const PartyHeader = () => {
  const { user, party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";

  return (
    <nav id="partyHeader">
      {user && (
        <NavLink
          id="partyName"
          to="/settings"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {party || "Dziennik Drużynowy"}
        </NavLink>
      )}
      {!user && <div id="partyNameStatic">Dziennik Drużynowy</div>}
    </nav>
  );
};

export const NavBar = () => {
  const { user, setUser, party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";

  return (
    <nav id="navBar">
      {user && (
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
      )}
    </nav>
  );
};
