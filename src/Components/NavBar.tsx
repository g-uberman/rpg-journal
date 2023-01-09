import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextProvider";

export const PartyHeader = () => {
  const { userEmail, party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";

  return (
    <nav id="partyHeader">
      {userEmail && (
        <NavLink
          id="partyName"
          to="/settings"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          {party || "Dziennik Drużynowy"}
        </NavLink>
      )}
      {!userEmail && <div id="partyNameStatic">Dziennik Drużynowy</div>}
    </nav>
  );
};

export const NavBar = () => {
  const { userEmail, setEmail, party, setParty } = useContext(Context);

  let activeClassName = "selectedNav";

  return (
    <nav id="navBar">
      {userEmail && (
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
