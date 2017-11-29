import React, { Component } from 'react';
import style from '../styles/Navbar.scss';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { history } from '../services/index'
import { withRouter } from 'react-router-dom'

const imgLocal = require('../images/helius_logo.png');

class Navbar extends Component {
  constructor(props){
    super(props);
    this.goToAreaPrototyper=this.goToAreaPrototyper.bind(this);
    this.goToPropertyArchitect=this.goToPropertyArchitect.bind(this);
    this.goToPriceList=this.goToPriceList.bind(this);
  }

  goToAreaPrototyper(){
    history.push('/area-prototyper');
    console.log(window.history);
  }

  goToPropertyArchitect(){
    history.push('/property-architect');
    console.log(window.history);
  }

  goToPriceList(){
    history.push('/price-list');
    console.log(window.history);
  }
  
  
  render() {
    return (
        <div className={style.navigation}> 
            <div className={style.header}> 
              <img className={style.logo} src={imgLocal} alt="Helius logo"/>
              <div className={style.title}>{'helius'}</div>
            </div>
            <div className={style.wrapper}>
                <div className={style.container} onClick={this.goToAreaPrototyper} > Prototyper </div>
                <div className={style.container} onClick={this.goToPropertyArchitect} > Property Architect </div>    
                <div className={style.container} onClick={this.goToPriceList} > Price List </div>
            </div>
        </div>
    );
  }
}

const state = (state , ownProps = {}) => {
  return {
    loaction: state.loaction
  }
}

const mapDispatchToProps = (dispatch , ownPropS) =>({
  navigateTo : (loaction) => {
    dispatch(push(loaction));
  }
})

export default withRouter(connect(state, mapDispatchToProps)(Navbar));