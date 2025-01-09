import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      // fonts
      --font-size-heading: 1.5rem;
      --font-size-body: 1rem;

      // colors
      --color-background: background: #ebefed;
      --color-background-hover: #c9d8d0;
      --color-primary: #004080;
    }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, textarea, select, a, div {
    -webkit-tap-highlight-color: transparent;
  }


  ul {
    list-style: none;
  }

  body, input, button {
    font: 14px 'Myriad Pro', sans-serif;
    font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html, body, #root {
    margin: 0;
    background-color: #f8f8fd;
    height: 100%;
    scroll-behavior: smooth;
  }
`;
