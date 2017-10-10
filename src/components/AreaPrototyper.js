import React from 'react';
import style from '../styles/AreaPrototyper.scss';
import MultiSearch from './MultiSearch'

import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

const AreaProtoyper = () => (
    <div className={style.moduleContainer}> 
      <MultiSearch />
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