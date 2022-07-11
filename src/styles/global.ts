import { createGlobalStyle } from 'styled-components';
import Bk1 from '../assets/img/eclipse1.png'
import Bk2 from '../assets/img/eclipse2.png'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body, #root{
  height: 100%;
}
body {
  background-color: #F8FDFF;
  font-family: 'Poppins', sans-serif;
  background-image: url(${Bk1}), url(${Bk2});
  background-repeat: no-repeat;
  background-position: 1000px, 800px;
  background-size: cover;
}
button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  outline: none;
}
`

export default GlobalStyle;