import React, { Component } from 'react';
import styles from './App.scss';
import Header from "../../component/Header";
import Main from "../../component/Main";

class App extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Header />
        <Main />
      </main>
    );
  }
}

export default App;
