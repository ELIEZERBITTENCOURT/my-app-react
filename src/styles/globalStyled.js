import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  body {
    display: flex;
    font-family: 'Red Hat Display', sans-serif;
    background: var(--bg-white);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

`;