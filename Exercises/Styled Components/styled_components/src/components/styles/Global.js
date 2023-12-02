import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;1,100;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
}

body {
    background: ${({theme})=> theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
}

p {
    opacity: 0.6;
    line-height: 1.5;
  }

img {
    max-width: 100%;
}

`;

export default GlobalStyles;