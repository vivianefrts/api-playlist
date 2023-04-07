import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: 'verdana', sans serif;
}

body {
  width: 100vw;
  heigth: 100vw;
  display: flex;
  justify-content: center;
  background-color: #888;
}

`;

export default Global;


