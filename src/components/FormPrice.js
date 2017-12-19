import React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { reduxForm, Field, FieldArray, formValueSelector } from 'redux-form';
import style from '../styles/PriceList.scss';

const officeFree = ({
  input,
  type,
  label,
  index,
  value,
  ...props,
  item,
  officeFree
}) => (
  <div  className={style.inputDiv} >
      <input {...input}  className={style.input} type="text"/>
  </div> 
)

const CDTcodes = ({
  input,
  type,
  label,
  item,
  index,
  value,
  ...props,
  officeFree
}) => (
  <div className={style.code}> {item.CDTcodes} </div>
)


const disCountEnable = ({
  input,
  type,
  label,
  item,
  index,
  value,
  ...props,
  officeFree
}) => (
  <input {...input}  className={style.input} type="hidden"/> 
)

const disCount = ({
  input,
  type,
  label,
  item,
  index,
  value,
  ...props,
  priceList,
  disCountByCategory,
  flatDisCount,
  productDisCount
}) => (
  <div className={style.discount}>
  {!disCountByCategory ? <div className={style.discount}>  {productDisCount.disCount}  </div> : <div className={style.discount}>  {flatDisCount}  </div>}
  </div>
)

const tablePriceList = ({
  input,
  type,
  label,
  item,
  index,
  ...props,
  priceList,
  disCountByCategory,
  flatDisCount,
  product
}) => (
  <div>
       {disCountByCategory === undefined ? 1 : product.map((item,index)=>{
                  return (  item.disCountEnable !== true ? null : <div className={style.priceTableRow} key={index}>
                      <Field name={`product[${index}].CDTcodes`} officeFree={item.officeFree} component={CDTcodes} index={index} item={item}/>
                      <div className={style.officeFree} >  <Field name={`product[${index}].officeFree`} officeFree={item.officeFree} component={officeFree} index={index} item={item}/>  </div>
                      <Field name={`product[${index}].disCountEnable`} officeFree={item.officeFree} component={disCountEnable} index={index} item={item.officeFree}/>
                      <Field name={`product[${index}].disCount`} productDisCount={disCountByCategory ?  1 : product[index]} priceList={item.priceList}  disCountByCategory={disCountByCategory} flatDisCount={flatDisCount} component={disCount} index={index} item={item}/>
                      {!disCountByCategory ?  <div className={style.newValue}>  {(item.officeFree - (item.officeFree * item.disCount * 0.01)).toFixed(2)}  </div> :
                        <div className={style.newValue}>  {(item.officeFree - (item.officeFree * flatDisCount * 0.01)).toFixed(2)}  </div>}
                  </div> )})}
  </div>
)


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
    defaultChecked={true}
    key={index}
    onCheck={input.onChange}
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
        <input {...input} disabled={disCountByCategory} className={style.input} type="number"/> % 
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
        <input {...input} disabled={!disCountByCategory} className={style.input} type="number"/> % 
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
            <RadioButtonGroup  {...input} name="shipSpeed" defaultSelected={true} onChange={(event, value) => input.onChange(value)}>
            <RadioButton
                value={true}
                inputStyle = {styles.radioBottun}
                label= {<div> <Field name="flatDisCount" disCountByCategory={disCountByCategory} flatDisCount={flatDisCount}  component={DiscountAllInput}/> Flat Discount Across All Procedure Categories </div>}
            />
            <RadioButton
                value={false}
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
                        <Field name={`product[${index}].disCountEnable`} value={item.disCountEnable} component={CheckboxPrice}  index={index} item={item}/>
                        <Field name={`product[${index}].disCount`} value={item.disCount} component={DiscountInput} index={index} disCountByCategory={disCountByCategory} item={item} />       
                        <div className={style.label}> {item.CDTcodes} Diagnostic 
                        </div>
                   </div>   )
                  
            })} 
    </div>
  )

let PriceList = (props) => (
          
            <form className={style.form}>
                <div className={style.disCountTable} >
            <Field name="disCountByCategory" disCountByCategory={props.disCountByCategory} flatDisCount={props.flatDisCount} component={disCountCategory}/>
            <FieldArray name="price" component={priceList} priceList={props.priceList} disCountByCategory={props.disCountByCategory} />
                </div>
            <div className={style.priceTable}>
                <div className={style.priceTableRow}>
                    <div className={style.code}> Common CDT Codes </div>
                    <div className={style.officeFree} > Office free [$] </div> 
                    <div className={style.discount}>  Discount [%] </div>
                    <div className={style.newValue}> New Value [$] </div>
                </div>
              <FieldArray name="price" component={tablePriceList} product={props.product} flatDisCount={props.flatDisCount} priceList={props.priceList} disCountByCategory={props.disCountByCategory} />  
               </div>
            </form> 
           
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

const selector = formValueSelector('priceList')
PriceList = connect(
    state => {
    const flatDisCount = selector(state, 'flatDisCount')
    const disCountByCategory = selector(state, 'disCountByCategory')  
    const product = selector(state, 'product')
    return {
      priceList : state.PriceList.product,
      flatDisCount,
      disCountByCategory,
      product,
      initialValues: state.PriceList}}
  )(PriceList)
  
export default PriceList;