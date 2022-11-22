import { StyledHeader } from "./Styles/HeaderFooter.styles";
import { StyledFooter } from "./Styles/HeaderFooter.styles";
import { NavLink } from "react-router-dom";

export const Header = () => {
  let activeClassName = "glowingHeader";

  return (
    <StyledHeader>
      <NavLink
        id="headerLink"
        to="/party"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      ></NavLink>
    </StyledHeader>
  );
};

export const Footer = () => {
  return <StyledFooter></StyledFooter>;
};
