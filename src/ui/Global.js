import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700');
  *{
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    font-size: 1rem;
  }
`;
