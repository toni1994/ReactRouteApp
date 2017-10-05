import React, { Component } from 'react';
import style from './App.scss';
import Dotdotdot from 'react-dotdotdot';

const imgLocal = require('./images/helius_logo.png');

class App extends Component {
 
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.navigation}> 
            <div className={style.navigationHeader}> 
              <img className={style.logo} src={imgLocal} alt="Helius logo"/>
              <div className={style.title}>{'helius'}</div>
            </div>
            <div className={style.navigationWrapper}>
                <div className={style.navigationContainer}> Prototyper </div>
                <div className={style.navigationContainer}> Property Arhitect </div>    
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

            <div className={style.moduleBodyContainer}>   
              <div className={style.moduleBodyContent}>
                  <div className={style.folder}> 
                      <div className={style.folderText}> 
                        <div className={style.folderName}> Bar </div> 
                        <div className={style.numberOfItems}> 6 items </div>
                      </div> 
                  </div>
                  <div className={style.folderProps}> </div>
              </div> 
            </div>

            <div className={style.moduleBodyContainer}>   
              <div className={style.moduleBodyContent}>
                  <div className={style.folder}> 
                      <div className={style.folderText}> 
                        <div className={style.folderName}> Bar </div> 
                        <div className={style.numberOfItems}> 6 items </div>
                      </div> 

                  </div>
                  <div className={style.folderProps}> </div>
              </div> 
            </div>

        </div>
        </div>
        </div>
        
          </div>  
      </div>
      
    );
  }
}

export default App;
