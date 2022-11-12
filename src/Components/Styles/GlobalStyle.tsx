import { createGlobalStyle } from "styled-components"
import background from '../../img/wood.jpg'

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
`