import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol, ul, li {
    list-style-type: none;
  }

  body {
    padding: 40px;
    font-size: 20px;
    color: #2f2f2f;
    font-family: 'KyoboHand';
    background-color: #eaeaea;
  }

  input[type="text"] {
    height: 42px;
    padding: 6px;
  }

  button {
    font-family: 'KyoboHand';
    border: 0;
    padding: 6px;
    height: 42px;
    cursor: pointer;
    background-color: transparent;
  }
`
export default GlobalStyles

