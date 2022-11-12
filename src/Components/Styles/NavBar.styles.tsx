import styled from "styled-components";
import lava from "../../img/lava.jpg";

export let activeStyle = {
  textShadow: "2px 2px 4px #000000",
  backgroundImage: `url(${lava})`,
};

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

  a:hover {
    text-shadow: 0px 0px 5px #ffc325;
    transition: text-shadow 0.5s;
  }

  a.selectedNav {
    text-shadow: 0px 0px 5px #ffc32580;
    background: url(${lava});
    background-size: cover;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    animation: animateLava 90s infinite;
    transition: text-shadow 1s;
  }

  @keyframes animateLava {
    from {
      background-position-x: 0px;
      background-position-y: 0px;
    }
    to {
      background-position-x: 800px;
      background-position-y: 800px;
    }
  }
`;
