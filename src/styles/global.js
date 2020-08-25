 import { createGlobalStyle } from 'styled-components';

 export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto';
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  button, a {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

 `;