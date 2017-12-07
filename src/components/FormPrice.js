import React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { reduxForm, Field, FieldArray} from 'redux-form';
import style from '../styles/PriceList.scss';

const CheckboxPrice = ({
    input,
    type,
    label,
    item,
    index,
    ...props,
  }) => (
    <div className={style.checkbox}>
    <Checkbox
    key={index}
    onCheck={input.onChange}
    checked={item.disCountEnable}
    style={styles.checkbox}
    />
     </div>
  )
  const DiscountInput = ({
    input,
    type,
    label,
    item,
    index,
    value,
    ...props,
  }) => (
    <div  className={style.inputDiv} >
        <input {...input} value={value} className={style.input} type="number"/> % 
    </div> 
  )

  const disCountCategory = ({
    input,
    type,
    label,
    item,
    index,
    ...props,
  }) => (
    <div className={style.disCount}>
            <RadioButtonGroup  {...input} name="shipSpeed" defaultSelected="not_light" onChange={(event, value) => input.onChange(value)}>
            <RadioButton
                value="DA"
                label="Simple"
            />
            <RadioButton
                value="NE"
                label="Discount by category"
            />
             </RadioButtonGroup>    
    </div>

  )

  const priceList = ({
    input,
    type,
    label,
    item,
    index,
    ...props,
    priceList
  }) => (
    <div>
         { priceList.map((item,index)=>{
                    return ( 
                        <div className={style.disCount} key={index}>
                        <Field name="disCountEnable" component={CheckboxPrice} index={index} item={item}/>
                        <Field name={"disCount"+index} value={item.disCount} component={DiscountInput} index={index} item={item}/>
                        <input {...input} value={index} type="hidden"/>
                        <div className={style.label}> {item.CDTcodes} Diagnostic 
                        </div>
                   </div>   )
                  
            })} 
    </div>
  )

let PriceList = (props) => (
            <div className={style.disCountTable} >
            <form>
            <Field name="AlldisCount" component={DiscountInput}/>
            <Field name="disCountCategory" component={disCountCategory}/>
            <FieldArray name="price" component={priceList} priceList={props.priceList} />
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