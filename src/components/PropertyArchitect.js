import React from 'react';
import style from '../styles/PropertyArchitect.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { openModalNewProperty, closeModalNewProperty, addNewProperty } from '../redux/actions/index'

import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

export class PropertyArchitect extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmitProperty=this.handleSubmitProperty.bind(this);
        this.closeFormPropertyArchitect=this.closeFormPropertyArchitect.bind(this);
    };

    componentWillUnmount(){
        this.props.actions.closeModalNewProperty();
    }

    handleSubmitProperty(newPropertyData){
        this.props.actions.addNewProperty(newPropertyData);
    }

    closeFormPropertyArchitect(){
        this.props.actions.closeModalNewProperty();
    }
    render(){
        return (
           <div className={style.body}>
            <MultiSearch ></MultiSearch >
            <Panel 
                isOpen={this.props.form !== undefined}
                handleSubmitProperty={this.handleSubmitProperty}
                closeFormPropertyArchitect={this.closeFormPropertyArchitect}
                type={"NewProperty"}
            /> 
            <NewButton 
                open={this.props.actions.openModalNewProperty}
                 />
           <div className={style.grid}>
               { this.props.properties.map((item,index)=>{
                    return ( 
                    <div className={style.moduleBodyContainer} key={index}>   
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
        properties: state.PropertyArchitect.properties,
        form: state.PropertyArchitect.form,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            openModalNewProperty,
            closeModalNewProperty,
            addNewProperty,
        },
        dispatch,
      ),
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(PropertyArchitect);