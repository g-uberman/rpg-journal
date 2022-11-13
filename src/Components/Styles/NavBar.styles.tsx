import styled from "styled-components";
import lava from "../../img/lava.jpg";

export let activeStyle = {
  textShadow: "2px 2px 4px #000000",
  backgroundImage: `url(${lava})`,
};

export const StyledNavBar = styled.nav`
  margin-top: 15px;
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

  a {
    font-weight: bold;
    color: #5d534d;
    background-image: url(${lava});
    background-size: cover;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    animation: animateLava 90s infinite;
    text-shadow: none;
    transition: text-shadow 1.5s ease-in-out;
    transition: color 1.5s ease-in-out;
    position: relative;
    z-index: 2;
  }

  a:hover {
    text-shadow: 0px 0px 5px #be2a0420;
    color: #5d534d80;
  }

  a.selectedNav {
    text-shadow: 0px 0px 5px #ffc32580;
    color: #00000000;
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
