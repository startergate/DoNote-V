import React, { useState } from "react";
import styled from "styled-components";


const App = styled.div`
  text-align: right
`;

const Login = styled.header`
  background-color: transparent;
  min-height: 60px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: right;
  color: white;
  height: 100vh;
  width: 100vw;
  padding: 0;
`;

/*return (
  <div className="App">
    <header className="App-header login">
      <img src={logo} className="App-logo title" alt="logo" />
      <a
        className="loginBtn"
        href="http://sid.donote.co:3000/user/login"
      >SID로 로그인</a>
    </header>
  </div>
);*/