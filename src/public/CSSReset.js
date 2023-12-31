import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: #242424;
    color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;