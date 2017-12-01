import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { reduxForm, Field } from 'redux-form';
import style from '../styles/PriceList.scss';

const CheckboxPrice = ({
    type,
    label,
    item,
    index,
    ...props,
  }) => (
    <div className={style.checkbox}>
    <Checkbox
    key={index}
    checked={item.disCountEnable}
    style={styles.checkbox}
    />
     </div>
  )
  const DiscountInput = ({
    type,
    label,
    item,
    index,
    ...props,
  }) => (
    <div  className={style.inputDiv} >
        <input className={style.input}/> % 
    </div> 
  )

  const disCountCategory = ({
    type,
    label,
    item,
    index,
    ...props,
  }) => (
    <div className={style.disCount}>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
                value="light"
                label="Simple"
            />
            <RadioButton
                value="not_light"
                label="Discount by category"
            />
             </RadioButtonGroup>    
    </div>

  )


let PriceList = (props) => (
            <div className={style.disCountTable}>
            <form>
             <Field name="disCountCategory" component={disCountCategory}/>
            { props.priceList.map((item,index)=>{
                    return ( 
                        <div className={style.disCount}>
                        <Field name="disCountEnable" component={CheckboxPrice} index={index} item={item}/>
                        <Field name="disCount" component={DiscountInput} index={index} item={item}/>
                        <div className={style.label}> {item.CDTcodes} Diagnostic 
                        </div>
                   </div>   )
                  
            })}
            </form> 
            </div>
)


const styles = {
    block: {
    },
    checkbox: {
      marginBottom: 16,
      maxWidth: 40,
    },
  };

PriceList = reduxForm({
    form: 'priceList',
  })(PriceList) 

PriceList = connect(
    state => ({
        priceList : state.PriceList.product,
    }),
  )(PriceList)
  
export default PriceList;