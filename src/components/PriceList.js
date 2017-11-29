import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from '../styles/PriceList.scss';

class PriceList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
          }
    }

    updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
      }
    

    render(){
        return (
        <MuiThemeProvider>
            <div className={style.priceContainer}>
            <div className={style.disCountTable}>
            { this.props.priceList.map((item,index)=>{
                    return ( 
                        <div className={style.disCount}>
                        <div className={style.checkbox}> <Checkbox
                        key={index}
                        checked={item.disCountEnable}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                        />
                    </div>
                     <div  className={style.inputDiv} > <input className={style.input}/> % </div> <div className={style.label}> {item.CDTcodes} Diagnostic </div>
                   </div>   )
                  
            })}
            </div> 
             <div className={style.priceTable}>
                <div className={style.priceTableRow}>
                    <div className={style.code}> Common CDT Codes </div>
                    <div className={style.officeFree} > Office free </div> 
                    <div className={style.discount}>  Discount </div>
                    <div className={style.newValue}> New Value </div>
                </div>
                { this.props.priceList.map((item,index)=>{
                    return (  <div className={style.priceTableRow}>
                        <div className={style.code}> {item.CDTcodes} </div>
                        <div className={style.officeFree} > <input className={style.input}/> </div> 
                        <div className={style.discount}>  {item.disCount} </div>
                        <div className={style.newValue}> New Value </div>
                    </div> )})}
               
             </div>
            </div>
    </MuiThemeProvider>
)}
}

const styles = {
    block: {
    },
    checkbox: {
      marginBottom: 16,
      maxWidth: 40,
    },
  };

  function mapStateToProps(state){
    return {
        priceList : state.PriceList.product,
    }
}

export default connect(mapStateToProps,null)(withRouter (PriceList));