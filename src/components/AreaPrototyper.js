import React from 'react';
import { connect } from 'react-redux';
import style from '../styles/AreaPrototyper.scss';
import MultiSearch from './MultiSearch'

import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

export class AreaPrototyper extends React.Component{
  constructor(props){
      super(props);
      console.log("");
  };

  render(){
    return (
      <div className={style.moduleContainer}> 
      <MultiSearch />
      <div className={style.moduleBody}> 
        <div className={style.grid}>
          { this.props.folders.map((item,index) => {
            return ( 
            <div className={style.moduleBodyContainer} key={index}>   
            <div className={style.moduleBodyContent}>
                <div className={style.folder}>
                    <FaFolderOpenO /> 
                    <div className={style.folderText}> 
                      <div className={style.folderName}> {item.name} </div> 
                      <div className={style.numberOfItems}> {item.numProtoypes} ITEMS </div>
                    </div> 
                </div>
                <div className={style.folderProps}>  <FaEllipsisV /> </div>
            </div> 
          </div>)
          })}
      </div>
      </div>
    </div>
  )
  }   
}


function mapStateToProps(state){
  return {
      folders: state.AreaPrototyper.folders,
  }
}

export default connect(mapStateToProps,null)(AreaPrototyper);