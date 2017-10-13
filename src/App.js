import React, { Component } from 'react';
import style from './styles/App.scss'

import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Routes from './routes';

class App extends Component {
 
  render() {
    return (
      <div className={style.wrapper}>
        <Navbar />
          <div className={style.module}>
            <TopBar />
            <Routes />
          </div>
      </div>
    );
  }
}

export default App;
