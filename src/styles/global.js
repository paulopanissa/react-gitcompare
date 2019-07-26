import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    background-color: ${theme.color.background};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: ${theme.fonts.family}
  }
`;

export default GlobalStyle;
