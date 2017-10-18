import React from 'react';
import { connect } from 'react-redux';
import style from '../styles/AreaPrototyper.scss';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { bindActionCreators } from 'redux';
import { openModalNewFolder, closeModalNewFolder, addNewPrototyper } from '../redux/actions/index'

import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

export class AreaPrototyper extends React.Component{
  constructor(props){
      super(props);
      this.closeFormAreaPrototyper=this.closeFormAreaPrototyper.bind(this);
      this.handleSubmitPrototyper=this.handleSubmitPrototyper.bind(this);
  };

  
  componentWillUnmount(){
    this.props.actions.closeModalNewFolder();
}

  handleSubmitPrototyper(newPrototyperData){
    this.props.actions.addNewPrototyper(newPrototyperData);
}

  closeFormAreaPrototyper(){
    this.props.actions.closeModalNewFolder();
}

  render(){
    return (
   
      <div className={style.moduleBody}>
         <MultiSearch />
          <Panel 
                isOpen={this.props.form !== undefined}
                handleSubmitPrototyper={this.handleSubmitPrototyper}
                closeFormAreaPrototyper={this.closeFormAreaPrototyper}
                type={"NewFolder"}
          />
         <NewButton  open={this.props.actions.openModalNewFolder} />
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
  )
  }   
}


function mapStateToProps(state){
  return {
      folders: state.AreaPrototyper.folders,
      form: state.AreaPrototyper.form,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        openModalNewFolder,
        closeModalNewFolder,
        addNewPrototyper
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AreaPrototyper);