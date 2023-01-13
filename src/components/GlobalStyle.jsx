import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  p {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
    font-size: 0.95rem;
  }
`;

export default GlobalStyles;
