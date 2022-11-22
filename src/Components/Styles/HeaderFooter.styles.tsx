import styled from "styled-components";
import scrollHeader from "../../img/header.jpg";
import scrollHighlight from "../../img/header-highlight.png";
import scrollShadow from "../../img/header-shadow.png";

export const StyledHeader = styled.header`
  height: 50px;
  border-bottom: 1px solid #5d534d;
  border-top: 1px solid #f3e4d7;
  background: url(${scrollHighlight}), url(${scrollShadow}),
    url(${scrollHeader});
  background-size: cover, cover, cover;
  background-position-y: top, bottom, center;
  z-index: 3;
  -webkit-box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;
  -moz-box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;
  box-shadow: 10px 20px 5px 0px #00000033, 10px 5px 15px 0px #00000088;

  #headerLink {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #ff922550, transparent 35%);
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }

  #headerLink.glowingHeader {
    opacity: 1;
  }

  #headerLink:hover {
    cursor: default;
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
