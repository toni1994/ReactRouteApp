import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from '../styles/PriceList.scss';
import FormPrice from './FormPrice';

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
             <FormPrice priceList={this.props.priceList} />
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