import { createGlobalStyle } from 'styled-components';
import PokerFont from '../assets/fonts/PokemonHollow.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'PokerFont';
    src: url('${PokerFont}') format('opentype');
  }
  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    padding: 10pxcol
  }
  html{
    scroll-behavior: smooth;
    padding: 20px
  }
  body,
  p {
    font-family: PokerFont, sans-serif;
  }
  h1 {
    font-family: PokerFont, sans-serif;
  }
  h2 {
    font-family: PokerFont
  }
`;
