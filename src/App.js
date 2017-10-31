import React, { Component } from 'react';
import style from './styles/App.scss'
import { withRouter } from 'react-router'
import { connect} from 'react-redux'
import { history } from './services';

import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Routes from './routes';

class App extends Component {
 
  render() {
    console.log(history.location)
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

export default connect()(withRouter (App));
