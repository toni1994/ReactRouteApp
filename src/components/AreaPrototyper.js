import React from 'react';
import { connect } from 'react-redux';
import style from '../styles/AreaPrototyper.scss';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { bindActionCreators } from 'redux';
import { openModalNewFolder, closeModalNewFolder, addNewPrototyper, 
  changeSortAreaPrototyperFolder, changeSerachAreaPrototyperFolder,
  updateFolder, deleteFolder, selectFolder } from '../redux/actions/index'
import DropDown from './DropDown';

import getSort from '../utilis/sort';

import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import { withRouter } from 'react-router';

export class AreaPrototyper extends React.Component{
  constructor(props){
      super(props);
      this.closeFormAreaPrototyper=this.closeFormAreaPrototyper.bind(this);
      this.handleSubmitPrototyper=this.handleSubmitPrototyper.bind(this);
      this.updateSort=this.updateSort.bind(this);
      this.changeInputValue= this.changeInputValue.bind(this);
      this.deleteFolder=this.deleteFolder.bind(this);
      this.previewFolder=this.previewFolder.bind(this);
      this.editFolder=this.editFolder.bind(this);
      this.handleEditFolder= this.handleEditFolder.bind(this);
      this.idOfFolder = undefined;
      this.typeOfPanel = "NewFolder";
  };

  
  componentWillUnmount(){
    this.props.actions.closeModalNewFolder();
}

  handleSubmitPrototyper(newPrototyperData){
    this.props.actions.addNewPrototyper(newPrototyperData);
    this.typeOfPanel = "NewFolder";
}

  closeFormAreaPrototyper(){
    this.props.actions.closeModalNewFolder();
    this.typeOfPanel = "NewFolder";
}

handleEditFolder(updatePropertyData){
  this.props.actions.updateFolder(updatePropertyData);
  this.typeOfPanel = "NewFolder";
}

  updateSort(newValue){
  this.props.actions.changeSortAreaPrototyperFolder(newValue)
}

  changeInputValue(newValue){
    this.props.actions.changeSerachAreaPrototyperFolder(newValue)
  }

  deleteFolder(idOfFolder){
    this.props.actions.deleteFolder(idOfFolder)
  }

  previewFolder(idOfFolder){
      this.idOfFolder = idOfFolder
      this.typeOfPanel = "PreviewFolder";
      this.props.actions.openModalNewFolder();
  }

  editFolder(idOfFolder){
      this.idOfFolder = idOfFolder
      this.typeOfPanel = "EditFolder";
      this.props.actions.openModalNewFolder();
  }


  render(){
    return (
   
      <div className={style.moduleBody}>
         <MultiSearch updateSort={this.updateSort} sort={this.props.sortFolder} changeInputValue={this.changeInputValue} searchValue={this.props.searchValue} />
          <Panel 
                isOpen={this.props.form !== undefined}
                handleSubmitPrototyper={this.handleSubmitPrototyper}
                closeFormAreaPrototyper={this.closeFormAreaPrototyper}
                handleEditFolder= {this.handleEditFolder}
                id={this.idOfFolder}
                type={this.typeOfPanel}
          />
         <NewButton  open={this.props.actions.openModalNewFolder} />
        <div className={style.grid}>
          { this.props.folders.map((item,index) => {
            return ( 
            <div className={style.moduleBodyContainer } onClick={()=>{this.props.actions.selectFolder(item.id)}} key={index}>   
            <div className={style.moduleBodyContent}>
                <div className={style.folder}>
                    <FaFolderOpenO /> 
                    <div className={style.folderText}> 
                      <div className={style.folderName}> {item.name} </div> 
                      <div className={style.numberOfItems}> {item.numProtoypes} ITEMS </div>
                    </div> 
                </div>
                <div className={style.folderProps}>  <DropDown idItem={item.id} deleteItem={this.deleteFolder} 
                previewItem={this.previewFolder} editItem={this.editFolder} /> </div>
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
        deleteFolder,
        updateFolder,
        selectFolder
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)( withRouter (AreaPrototyper));