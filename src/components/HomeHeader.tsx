import React, { useState } from "react";
import styled from "styled-components";


const App = styled.div`
  text-align: right;
  height: 100vh;
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
  height: 100%;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 30px 30px;
  }
  
  @media (max-width: 767px) {
    height: 33vw;
    margin: 30px;
  }
`;

const Logo = styled.img.attrs({
  src: './donoteLogo.png'
})`
  height: 60px;
  float: left;
  
  @media (min-width: 768px) {
    height: 250px;
    margin: 30px;
  }
  
  @media (max-width: 767px) {
    height: 33vw;
    margin: 30px;
  }
`;

const LoginBtn = styled.a.attrs({
  href: `http://sid.donote.co:3000/user/login?goTo=http://${window.location.hostname}:5000/auth/catch`
})`
  color: #3d414d;
  text-decoration: none;
  border: 1px solid #949494;
  border-radius: 4px;
  font-size: 18px;
  padding: 10px 20px;
  background: #dddddd;
  transition-property: background;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  
  &:hover {
    background: #949494;
    transition-property: background;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }
`;

const Header = () => {
  return (
    <App>
      <Login>
        <Logo />
        <LoginBtn>
          SID로 로그인
        </LoginBtn>
      </Login>
    </App>
  )
};

export default Header;

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