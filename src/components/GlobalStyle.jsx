import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #141519;
  }

  p {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
    font-size: 0.95rem;
    color: hsl(0, 0%, 100%);
  }
`;

export default GlobalStyles;
