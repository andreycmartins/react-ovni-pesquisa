import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
}

body{
    font-family: 'Source Sans Pro', sans-serif;
    height: 300vw;
}

button {
    background-color: none;
    border: none;
    outline: none;
}

a{
    text-decoration: none;
    outline: none;
    &:visited{
        color: inherit;
        text-decoration: none;
    }
}
`

export default GlobalStyle
