import React from 'react';
import style from '../styles/PropertyArchitect.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { openModalNewProperty, closeModalNewProperty, addNewProperty, changeSortPropertyArchitect, changeSearchPropertyArchitect, selectedProperty, deleteProperty } from '../redux/actions/index'
import { push } from 'react-router-redux';
import { history } from '../services/index' 
import getSort from '../utilis/sort';
import DropDownPropertyArchitect from './DropDown';

import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'
import { withRouter } from 'react-router';

export class PropertyArchitect extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitProperty=this.handleSubmitProperty.bind(this);
        this.closeFormPropertyArchitect=this.closeFormPropertyArchitect.bind(this);
        this.updateSort=this.updateSort.bind(this);
        this.changeInputValue= this.changeInputValue.bind(this);
        this.deleteProperty=this.deleteProperty.bind(this);
        this.previewProperty=this.previewProperty.bind(this);
        this.editProperty=this.editProperty.bind(this);
        this.nameOfProperty = undefined;
        this.imageOfProperty = undefined;
        this.managerOfProperty = undefined;
        this.addressOfProperty = undefined;
        this.phoneOfProperty = undefined;
        this.typeOfPanel = "NewProperty";
    };

    componentWillUnmount(){
        this.props.actions.closeModalNewProperty();
    }

    handleSubmitProperty(newPropertyData){
        this.props.actions.addNewProperty(newPropertyData);
    }

    closeFormPropertyArchitect(){
        this.props.actions.closeModalNewProperty();
        this.typeOfPanel = "NewProperty";
    }

    updateSort(newValue){
        this.props.actions.changeSortPropertyArchitect(newValue)
    }
      
    changeInputValue(newValue){
          this.props.actions.changeSearchPropertyArchitect(newValue)
    }

    deleteProperty(id){
        this.props.actions.deleteProperty(id)
    }

    previewProperty(nameOfProperty,imageOfProperty,managerOfProperty){
        this.nameOfProperty = nameOfProperty;
        this.imageOfProperty = imageOfProperty;
        this.managerOfProperty = managerOfProperty;
        this.typeOfPanel = "PreviewProperty";
        this.props.actions.openModalNewProperty();
    }

    editProperty(nameOfProperty,managerOfProperty,addressOfProperty,phoneOfProperty){
        this.nameOfProperty = nameOfProperty;
        this.addressOfProperty = addressOfProperty;
        this.managerOfProperty = managerOfProperty;
        this.phoneOfProperty = phoneOfProperty;
        this.typeOfPanel = "EditProperty";
        this.props.actions.openModalNewProperty();
    }

    render(){
        return (
           <div className={style.body}>
            <MultiSearch updateSort={this.updateSort} sort={this.props.sortFolder} changeInputValue={this.changeInputValue} searchValue={this.props.searchValue} />
            <Panel 
                isOpen={this.props.form !== undefined}
                handleSubmitProperty={this.handleSubmitProperty}
                closeFormPropertyArchitect={this.closeFormPropertyArchitect}
                name = {this.nameOfProperty}
                image = {this.imageOfProperty}
                manager = {this.managerOfProperty}
                address = {this.addressOfProperty}
                phone = {this.phoneOfProperty}
                type={this.typeOfPanel}
            /> 
            <NewButton 
                open={this.props.actions.openModalNewProperty}
                 />
           <div className={style.grid}>
               { this.props.properties.map((item,index)=>{
                    return ( 
                    <div className={style.moduleBodyContainer} key={index} onClick={()=>{history.push(`/property-architect/${item.id}`);this.props.actions.selectedProperty(item.id)}}>   
                    <div className={style.moduleBodyContent}>
                        <div className={style.moduleBodyContentImage}> <img src={item.imagePath} alt="ImageHotel"></img> </div>
                        <div className={style.moduleBodyContentHotelName}>
                            <div className={style.aboutHotel}> 
                                <div className={style.hotelsName}> {item.name} </div>
                                <div className={style.hotelsOwner}> {item.managerName} </div> 
                            </div>
                            <div className={style.aboutHotelButton}> <DropDownPropertyArchitect idItem={item.id} deleteProperty={this.deleteProperty} 
                            previewProperty={this.previewProperty} editProperty={this.editProperty} imagePath={item.imagePath} managerName={item.managerName}
                            name={item.name} address={this.address} phone={this.phone} />
                            </div> 
                        </div>  
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
        properties: getSort(state.PropertyArchitect.properties,state.FilterPropertyArchitect.property.sort.direction,state.FilterPropertyArchitect.property.search),   
        form: state.PropertyArchitect.form,
        sortFolder: state.FilterPropertyArchitect.property.sort.direction,
        searchValue: state.FilterPropertyArchitect.property.search,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            openModalNewProperty,
            closeModalNewProperty,
            addNewProperty,
            changeSortPropertyArchitect,
            changeSearchPropertyArchitect,
            selectedProperty,
            deleteProperty,
        },
        dispatch,
      ),
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter (PropertyArchitect));