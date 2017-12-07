import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from '../styles/PriceList.scss';
import FormPrice from './FormPrice';
import FormPriceTable from './FormPriceTable';

class PriceList extends React.Component{
    constructor(props){
        super(props);
        this.changeDisCount=this.changeDisCount.bind(this);
        this.checkPrice= this.checkPrice.bind(this);
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
    
    changeDisCount(){
        console.log("HAHAH")
    }

    checkPrice(){
        console.log("HAHAH")
    }

    render(){
        return (
        <MuiThemeProvider>
            <div className={style.priceContainer}>
             <FormPrice priceList={this.props.priceList} changePrice={this.changeDisCount} checkPrice={this.checkPrice} />
             <div className={style.priceTable}>
                <div className={style.priceTableRow}>
                    <div className={style.code}> Common CDT Codes </div>
                    <div className={style.officeFree} > Office free </div> 
                    <div className={style.discount}>  Discount </div>
                    <div className={style.newValue}> New Value </div>
                </div>
                <FormPriceTable/>
               
             </div>
            </div>
    </MuiThemeProvider>
)}
}

  function mapStateToProps(state){
    return {
        priceList : state.PriceList.product,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            
        },
        dispatch,
      ),
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter (PriceList));