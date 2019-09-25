import React from 'react';
import logo from './donoteLogo.png'
import './App.css';

const App: React.FC = () => {
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
};

export default App;
