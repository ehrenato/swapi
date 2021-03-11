import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: url(https://cdn.pixabay.com/photo/2016/01/27/15/25/space-1164579_960_720.png) top center #000;
  }
  body, input, button {
    color: #fff;
    font-size: 14px;
    font: 800 14px/1 Roboto Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
