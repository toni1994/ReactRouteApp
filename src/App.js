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

        <div className={style.topBar}>
          <div className={style.topBarWrapper}> 
            <div className={style.modulName}> Area prototyper</div>
            <div className={style.topBarIcon}> bell</div>
            <div className={style.topBarIcon}> notti</div>
            <div className={style.topBarProfile}> Helius profico</div>
          </div>
         </div>

        <div className={style.moduleContainer}> 
        <div className={style.moduleHeader}> </div>

       
        <div className={style.moduleBody}> 
          <div className={style.grid}>
            <div className={style.moduleBodyContainer}>   <div className={style.moduleBodyContent}> </div> </div>
            <div className={style.moduleBodyContainer}>   <div className={style.moduleBodyContent}> </div> </div>
          </div>
        </div>
        </div>
        
          </div>  
      </div>
      
    );
  }
}

export default App;
