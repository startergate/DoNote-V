import React from "react";
import { createGlobalStyle } from "styled-components";

import HomeHeader from "../components/HomeHeader"

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

const HomeContainer = () => {
  return (
    <>
      <GlobalStyle />
      <HomeHeader />
    </>
  )
};

export default HomeContainer;