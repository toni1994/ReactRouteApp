import React from 'react';
import style from '../App.scss';

import Search from 'react-icons/lib/fa/search'
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaClose from 'react-icons/lib/fa/close'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

const AreaProtoyper = () => (
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
)

  export default AreaProtoyper;