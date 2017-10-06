import React, { Component } from 'react';
import style from './App.scss';
import Search from 'react-icons/lib/fa/search'
import Bell from 'react-icons/lib/fa/bell'
import Folder from 'react-icons/lib/fa/folder'
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaClose from 'react-icons/lib/fa/close'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'
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
                <div className={style.navigationContainer}> Property Architect </div>    
            </div>
        </div>

        <div className={style.module}>

          <div className={style.topBar}>
            <div className={style.topBarWrapper}> 
              <div className={style.modulName}> Area prototyper</div>
              <div className={style.topBarIcon}> <Bell /> </div>
              <div className={style.topBarIcon}> <Folder /></div>
              <div className={style.topBarProfile}> <div className={style.imageProfile}> <img src="http://api.helius.proficodev.com/public/uploads/user/56a0e753aaf71500641642742/56a0e753aaf71500641642742.png" alt="profileImage" > 
              </img> </div> <div className={style.profilName}> Helius Profico </div> <FaCaretDown/> </div>
            </div>
          </div>

        <div className={style.moduleContainer}> 
        <div className={style.moduleHeader}>
          <div className={style.multiSearchContainer}>
            <div className={style.search}> <div className={style.searchIcon}> <Search /> </div> <input placeholder="Search folders by name"/> <div className={style.closeIcon}> <FaClose /> </div> </div>
            <div className={style.searchSection}> <span> SORT BY  </span> Name / ASC </div>
            <div className={style.searchSection}> <span> FILTERS  </span> 0 active </div>
            <div className={style.buttonContainer}>  <FaCaretDown/> </div>
          </div>
          
        </div>

        <div className={style.moduleBody}> 
          <div className={style.grid}>

            <div className={style.moduleBodyContainer}>   
              <div className={style.moduleBodyContent}>
                  <div className={style.folder}>
                      <FaFolderOpenO /> 
                      <div className={style.folderText}> 
                        <div className={style.folderName}> Bar </div> 
                        <div className={style.numberOfItems}> 6 items </div>
                      </div> 
                  </div>
                  <div className={style.folderProps}>  <FaEllipsisV /> </div>
              </div> 
            </div>

            <div className={style.moduleBodyContainer}>   
              <div className={style.moduleBodyContent}>
                  <div className={style.folder}>
                       <FaFolderOpenO /> 
                      <div className={style.folderText}>
                        <div className={style.folderName}> Bar </div> 
                        <div className={style.numberOfItems}> 6 items </div>
                      </div> 

                  </div>
                  <div className={style.folderProps}> <FaEllipsisV /> </div>
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
