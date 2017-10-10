import React, { Component } from 'react';
import style from '../App.scss';
import { Link } from 'react-router-dom'

const imgLocal = require('../images/helius_logo.png');

class Navbar extends Component {
 
  render() {
    return (
        <div className={style.navigation}> 
            <div className={style.navigationHeader}> 
              <img className={style.logo} src={imgLocal} alt="Helius logo"/>
              <div className={style.title}>{'helius'}</div>
            </div>
            <div className={style.navigationWrapper}>
                <div className={style.navigationContainer}> <Link className={style.link} to='/area-prototyper'> Prototyper </Link> </div>
                <div className={style.navigationContainer}> <Link className={style.link} to='/property-architect'> Property Architect </Link> </div>    
            </div>
        </div>
    );
  }
}

export default Navbar;