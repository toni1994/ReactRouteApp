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
    disCountByCategory
  }) => (
    <div  className={style.inputDiv} >
        <input {...input} disabled={disCountByCategory} value={item.disCount} className={style.input} type="number"/> % 
    </div> 
  )

  const DiscountAllInput = ({
    input,
    type,
    label,
    item,
    index,
    value,
    ...props,
    disCountByCategory,
    flatDisCount
  }) => (
    <div  className={style.inputDiv} >
        <input {...input} disabled={disCountByCategory} value={flatDisCount} className={style.input} type="number"/> % 
    </div> 
  )

  const disCountCategory = ({
    input,
    type,
    label,
    item,
    index,
    ...props,
    disCountByCategory,
    flatDisCount
  }) => (
    <div className={style.disCount}>
            <RadioButtonGroup  {...input} name="shipSpeed" defaultSelected="All" onChange={(event, value) => input.onChange(value)}>
            <RadioButton
                value="All"
                inputStyle = {styles.radioBottun}
                label= {<div> <Field name="AlldisCount" disCountByCategory={disCountByCategory} flatDisCount={flatDisCount}  component={DiscountAllInput}/> Flat Discount Across All Procedure Categories </div>}
            />
            <RadioButton
                value="Category"
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
    priceList,
    disCountByCategory
  }) => (
    <div>
         { priceList.map((item,index)=>{
                    return ( 
                        <div className={style.disCount} key={index}>
                        <Field name={"disCountEnable"+ item.CDTcodes} component={CheckboxPrice}  index={index} item={item}/>
                        <Field name={"CategorydisCount"+ item.CDTcodes} value={item.disCount} component={DiscountInput} index={index} disCountByCategory={disCountByCategory} item={item} />
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
            <Field name="disCountCategory" disCountByCategory={!props.disCountByCategory} flatDisCount={props.flatDisCount} component={disCountCategory}/>
            <FieldArray name="price" component={priceList} priceList={props.priceList} disCountByCategory={props.disCountByCategory} />
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
    radioBottun: {
      width: '35px'
    }
  };

PriceList = reduxForm({
    form: 'priceList',
  })(PriceList) 

PriceList = connect(
    state => ({
        priceList : state.PriceList.product,
        disCountByCategory: state.PriceList.disCountByCategory,
        flatDisCount: state.PriceList.flatDisCount
        
    }),
  )(PriceList)
  
export default PriceList;