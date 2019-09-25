import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import logo from './donoteLogo.png'
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header login">
          <img src={logo} className="App-logo title" alt="logo" />
          <a
            className="loginBtn"
            href="http://sid.donote.co:3000/user/login"
          >SID로 로그인</a>
        </header>
      </div>
    );
  }
}

export default App;
