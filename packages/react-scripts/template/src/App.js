import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
        <header className={styles['App-header']}>
          <img src={logo} className={styels['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
