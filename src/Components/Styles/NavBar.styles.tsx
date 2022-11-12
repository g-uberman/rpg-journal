import styled from "styled-components";

export const StyledNavBar = styled.nav`
  margin: 15px 20px 5px;
  text-align: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    width: calc(100vw - 150px);
    margin: 0 auto;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 25px;
    margin-bottom: 10px;
  }

  ul::before {
    content: "†";
    transform: rotate(90deg);
    font-size: 1.5em;
    position: absolute;
    left: 50px;
  }

  ul::after {
    content: "†";
    transform: rotate(-90deg);
    font-size: 1.5em;
    position: absolute;
    right: 50px;
  }

  a,
  a:visited {
    font-weight: bold;
  }
`;
