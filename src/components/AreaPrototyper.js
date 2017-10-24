import React from 'react';
import { connect } from 'react-redux';
import style from '../styles/AreaPrototyper.scss';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { bindActionCreators } from 'redux';
import { openModalNewFolder, closeModalNewFolder, addNewPrototyper, changeSortAreaPrototyperFolder, changeSerachAreaPrototyperFolder } from '../redux/actions/index'

import getSort from '../utilis/sort';

import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

export class AreaPrototyper extends React.Component{
  constructor(props){
      super(props);
      this.closeFormAreaPrototyper=this.closeFormAreaPrototyper.bind(this);
      this.handleSubmitPrototyper=this.handleSubmitPrototyper.bind(this);
      this.updateSort=this.updateSort.bind(this);
      this.changeInputValue= this.changeInputValue.bind(this);
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

  updateSort(newValue){
  this.props.actions.changeSortAreaPrototyperFolder(newValue)
}

  changeInputValue(newValue){
    this.props.actions.changeSerachAreaPrototyperFolder(newValue)
  }

  render(){
    return (
   
      <div className={style.moduleBody}>
         <MultiSearch updateSort={this.updateSort} sort={this.props.sortFolder} changeInputValue={this.changeInputValue} searchValue={this.props.searchValue} />
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
      folders: getSort(state.AreaPrototyper.folders,state.FiterAreaPrototyper.folder.sort.direction,state.FiterAreaPrototyper.folder.search),   
      form: state.AreaPrototyper.form,
      sortFolder: state.FiterAreaPrototyper.folder.sort.direction,
      searchValue: state.FiterAreaPrototyper.folder.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        openModalNewFolder,
        closeModalNewFolder,
        addNewPrototyper,
        changeSortAreaPrototyperFolder,
        changeSerachAreaPrototyperFolder,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AreaPrototyper);