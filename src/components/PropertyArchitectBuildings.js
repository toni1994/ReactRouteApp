import React from 'react';
import style from '../styles/PropertyArchitect.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { openModalNewProperty, closeModalNewProperty, addNewBuildings, changeSortPropertyArchitectBuildings, changeSearchPropertyArchitectBuildings } from '../redux/actions/index'
//import { push } from 'react-router-redux';
//import { history } from '../services/index' 
import getSort from '../utilis/sort';

import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'
import { withRouter } from 'react-router';

export class PropertyArchitectBuildings extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitProperty=this.handleSubmitProperty.bind(this);
        this.closeFormPropertyArchitect=this.closeFormPropertyArchitect.bind(this);
        this.updateSort=this.updateSort.bind(this);
        this.changeInputValue= this.changeInputValue.bind(this);
    };

    componentWillUnmount(){
        this.props.actions.closeModalNewProperty();
    }

    handleSubmitProperty(newPropertyData){
        this.props.actions.addNewBuildings(newPropertyData);
    }

    closeFormPropertyArchitect(){
        this.props.actions.closeModalNewProperty();
    }

    updateSort(newValue){
        this.props.actions.changeSortPropertyArchitectBuildings(newValue)
    }
      
    changeInputValue(newValue){
          this.props.actions.changeSearchPropertyArchitectBuildings(newValue)
    }

    render(){
        return (
           <div className={style.body}>
            <MultiSearch updateSort={this.updateSort} sort={this.props.sortFolder} changeInputValue={this.changeInputValue} searchValue={this.props.searchValue} />
            <Panel 
                isOpen={this.props.form !== undefined}
                handleSubmitProperty={this.handleSubmitProperty}
                closeFormPropertyArchitect={this.closeFormPropertyArchitect}
                type={"NewBuilding"}
            /> 
            <NewButton 
                open={this.props.actions.openModalNewProperty}
                 /> {console.log(this.props.selectedProperty)}
           <div className={style.grid}> 
               { this.props.buildings.map((item,index)=>{
                    return ( 
                    <div className={style.moduleBodyContainer} key={index} >   
                    <div className={style.moduleBodyContent}>
                        <div className={style.moduleBodyContentImage}> <img src={item.imagePath} alt="ImageHotel"></img> </div>
                        <div className={style.moduleBodyContentHotelName}>
                            <div className={style.aboutHotel}> 
                                <div className={style.hotelsName}> {item.name} </div>
                                <div className={style.hotelsOwner}> {item.managerName} </div> 
                            </div>
                            <div className={style.aboutHotelButton}> <FaEllipsisV /> 
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
        buildings: getSort(state.PropertyArchitect.buildings,state.FilterPropertyArchitect.buildings.sort.direction,state.FilterPropertyArchitect.buildings.search),   
        form: state.PropertyArchitect.form,
        sortFolder: state.FilterPropertyArchitect.buildings.sort.direction,
        searchValue: state.FilterPropertyArchitect.buildings.search,
        selectedProperty: state.PropertyArchitect.selectedProperty,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            openModalNewProperty,
            closeModalNewProperty,
            addNewBuildings,
            changeSortPropertyArchitectBuildings,
            changeSearchPropertyArchitectBuildings,
        },
        dispatch,
      ),
    };
  }


export default connect(mapStateToProps,mapDispatchToProps)(withRouter (PropertyArchitectBuildings));

