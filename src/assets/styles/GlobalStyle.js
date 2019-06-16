import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Roboto', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=latin-ext');
    }

  *,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }
`;

export default GlobalStyle;
