import React, { Component } from 'react';
import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.navigation}> 
            <div className={style.navigationHeader}> 
            </div>
        </div>
        <div className={style.module}>
        <div className={style.topBar}> </div>
        <div className={style.moduleContainer}> 
        <div className={style.moduleHeader}> </div>
        <div className={style.moduleBody}> </div>
        </div>
        
          </div>  
      </div>
      
    );
  }
}

export default App;
