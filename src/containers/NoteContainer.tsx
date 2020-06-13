import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "../components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const NoteContainer = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Note />
    </>
  )
};

export default NoteContainer;