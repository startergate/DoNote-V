import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router-dom';

import { Home, Manage, Note } from './pages/index';
import logo from "./donoteLogo.png";
import './App.css';

const history = createBrowserHistory();


const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/note" component={Note} />
        <Route path="/manage" component={Manage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
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
};

export default App;
