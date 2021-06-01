import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #EEEEEE;
  }

  button,
  input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-track {
    background: #E1E1E1;
  }

  ::-webkit-scrollbar-thumb {
    background: #D72D2F;
    border-radius: 8px;
  }

`