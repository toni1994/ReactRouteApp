import React from 'react';
import style from '../styles/PropertyArchitect.scss';
import { connect } from 'react-redux';
import MultiSearch from './MultiSearch'

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
            <div>
            <MultiSearch />
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
    }
}

export default connect(mapStateToProps,null)(PropertyArchitect);