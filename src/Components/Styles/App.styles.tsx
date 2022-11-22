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
  grid-template-areas: "h" "m" "f";
  max-width: 720px;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 7px;

  header {grid-area: h;}
  main {grid-area: m;}
  footer {grid-area: f;}
  nav {grid-area: n;}
  section {grid-area: s;}
  summary {grid-area: c;}
  #partyHeader {grid-area: p;}

  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "p" "n" "s" "c";
    row-gap: 10px;
    width: 100%;
    min-height: calc(80vh - 14px);
    margin: 0 auto;
    padding: 10px 45px 0;
    background: url(${scrollSideR}), url(${scrollSideL});
    background-size: fill, fill;
    background-position: right, left;
    background-repeat: repeat-y, repeat-y;
  }

  section {
    min-height: 100px;
    padding-bottom: 50px;
  }

  summary {
    max-height: 1em;
  }

  header,
    footer {
      width: calc(100vw - 14px);
      margin: 0 auto;
      overflow: hidden;
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
      width: initial;
      margin: initial;
    }

    main {
      grid-template-columns: 120px 1fr;
      grid-template-rows: 2em 1fr 1.1em;
      grid-template-areas: "p p" "n s" "c c";
      column-gap: 20px;
      min-height: calc(100vh - 154px);
    }
    
    nav ul {
      width: 100%;
      gap: 10px;
      flex-direction: column;
      justify-content: space-between;
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

  #navHeader:hover {
    cursor: default;
  }

  .selectedHeader::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #ff992550, transparent 35%);
  }
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
