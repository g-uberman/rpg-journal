import { createGlobalStyle } from "styled-components";
import background from '../../img/wood.jpg';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url(${background});
    background-size: fill;
    color: #5d534d;
}

/* FONTS */
body {
    font-family: 'Gideon Roman', cursive;
}

nav {
    font-family: 'Metamorphous', cursive;
    text-align: center;
}

#partyHeader {
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Metamorphous', cursive;
}

p {
    margin-bottom: 1em;
}

p:first-child:first-letter {
    float: left;
    font-size: 2.5em;
    font-weight: bold;
    line-height: 0.95em;
    padding-right: 0.1em;
    padding-left: 0.1em;
    font-family: 'Metamorphous', cursive;
    font-weight: bold;
}

a, a:visited {
    text-decoration: none;
    color: #5d534d
}

h1 {
    font-size: 1.5em;
}

/* h1, h2, h3 {
    margin-bottom: 10px;
} */

/* h4 {
    margin-bottom: 5px;
} */
`