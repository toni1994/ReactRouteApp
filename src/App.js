import React, { Component } from 'react';
import style from './styles/App.scss'
import { withRouter } from 'react-router'
import { connect} from 'react-redux'

import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Routes from './routes';

class App extends Component {
 
  render() {
    console.log(this.props)
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
