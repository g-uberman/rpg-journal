import styled from "styled-components";
import scrollSideR from "../../img/scroll-side-R.png";
import scrollSideL from "../../img/scroll-side-L.png";
import scrollCenter from "../../img/scroll-center.png";
import scrollHeader from "../../img/header.jpg";
import scrollHighlight from "../../img/header-highlight.png";
import scrollShadow from "../../img/header-shadow.png";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "h"
    "m"
    "f";
  max-width: 720px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  header {
    grid-area: h;
  }
  main {
    grid-area: m;
  }
  footer {
    grid-area: f;
  }
  nav {
    grid-area: n;
  }
  section {
    grid-area: s;
  }

  main {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-areas: "n s";
    column-gap: 20px;
    width: 100%;
    margin: 0 auto;
    background: url(${scrollSideR}), url(${scrollSideL});
    background-size: fill, fill;
    background-position: right, left;
    background-repeat: repeat-y, repeat-y;
    /* max-height: 0px; */
    /* overflow: hidden; */
    /* animation: open 20s ease 1 forwards;
    animation-delay: 0.4s;
    -webkit-transition: max-height 0.7s;
    -moz-transition: max-height 0.7s;
    transition: max-height 0.7s; */
  }

  section {
    min-height: 100px;
    padding: 0 20px 50px 20px;
    margin: 5px 20px;
  }

  @media screen and (min-width: 475px) {
    main {
      background: url(${scrollSideR}), url(${scrollSideL}), url(${scrollCenter});
      background-size: fill, fill, fill;
      background-position: right, left, center;
      background-repeat: repeat-y, repeat-y, repeat-y;
    }
  }

  @media screen and (min-width: 700px) {
    header,
    footer {
      height: 70px;
      border: 1px solid #5d534d;
      border-top: 1px solid #f3e4d7;
    }

    main {
      flex-direction: row;
      padding-right: 30px;
      padding-bottom: 50px;
    }

    nav ul {
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      gap: 10px;
      padding: 10px 0;
      margin-left: 15px;
    }

    nav ul::before {
      position: initial;
      content: "†";
      transform: rotate(180deg);
      font-size: 1.5em;
    }

    nav ul::after {
      position: initial;
      content: "†";
      font-size: 1.5em;
      transform: none;
    }

    section {
      margin-top: 25px;
      margin-left: 0;
    }

    nav {
      margin-top: 25px;
    }
  }
`;

export const StyledHeader = styled.header`
  height: 50px;
  border-bottom: 1px solid #5d534d;
  border-top: 1px solid #f3e4d7;
  background: url(${scrollHighlight}), url(${scrollShadow}),
    url(${scrollHeader});
  background-size: cover, cover, cover;
  background-position-y: top, bottom, center;
  z-index: 1;
  -webkit-box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;
  -moz-box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;
  box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;
`;

export const StyledFooter = styled.footer`
  height: 50px;
  border-bottom: 1px solid #5d534d;
  border-top: 1px solid #f3e4d7;
  background: url(${scrollHighlight}), url(${scrollShadow}),
    url(${scrollHeader});
  background-size: cover, cover, cover;
  background-position-y: top, bottom, center;
  z-index: 1;
  -webkit-box-shadow: 10px 20px 5px 0px #00000088;
  -moz-box-shadow: 10px 20px 5px 0px #00000088;
  box-shadow: 10px 20px 5px 0px #00000088;
`;
