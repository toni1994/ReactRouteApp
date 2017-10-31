import React, { Component } from 'react';
import style from '../styles/Navbar.scss';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { history } from '../services/index'

const imgLocal = require('../images/helius_logo.png');

class Navbar extends Component {
  constructor(props){
    super(props);
    this.aa=this.aa.bind(this);
    this.bb=this.bb.bind(this);
    
  }

  aa(){
    history.push('/area-prototyper');
    console.log(window.history);
  }

  bb(){
    history.push('/property-architect');
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
                <div className={style.container} onClick={this.aa} > Prototyper </div>
                <div className={style.container} onClick={this.bb} > Property Architect </div>    
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

export default connect(state, mapDispatchToProps)(Navbar);