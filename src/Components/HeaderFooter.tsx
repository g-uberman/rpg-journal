import { NavLink } from "react-router-dom";

export const Header = () => {
  let activeClassName = "glowingHeader";

  return (
    <header>
      <NavLink
        id="headerLink"
        to="/settings"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      ></NavLink>
    </header>
  );
};

export const Footer = () => {
  return <footer></footer>;
};
