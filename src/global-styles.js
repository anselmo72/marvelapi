import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  background-color: #333;
  height: 100vh;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}
`

export default GlobalStyles
