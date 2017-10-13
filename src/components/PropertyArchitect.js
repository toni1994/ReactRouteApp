import React from 'react';
import style from '../styles/PropertyArchitect.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MultiSearch from './MultiSearch';
import Panel from './Panel';
import NewButton from './NewButton';
import { openModalNewProperty } from '../redux/actions/index'

import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v'

export class PropertyArchitect extends React.Component{
    constructor(props){
        super(props);
        this.enterPoperty=this.enterPoperty.bind(this);
    };

    enterPoperty(){
    }

    render(){
        return (
           <div className={style.body}>
            <MultiSearch />
            <Panel 
                isOpen={this.props.isOpen} />
            <NewButton 
                open={this.props.actions.openModalNewProperty} />
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
        isOpen: state.PropertyArchitect.isOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            openModalNewProperty
        },
        dispatch,
      ),
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(PropertyArchitect);