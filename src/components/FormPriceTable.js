import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import style from '../styles/PriceList.scss';


  const officeFree = ({
    input,
    type,
    label,
    item,
    index,
    value,
    ...props,
  }) => (
    <div  className={style.inputDiv} >
        <input {...input} value={value}  className={style.input} type="number"/> 
    </div> 
  )

let priceListTable = (props) => (
        <form> { props.priceList.map((item,index)=>{
                    return (  <div className={style.priceTableRow}>
                        <div className={style.code}> {item.CDTcodes} </div>
                        <div className={style.officeFree} > <Field name={officeFree} value={item.officeFree} component={officeFree} index={index} item={item}/> </div>
                        <div className={style.discount}>  {item.disCount} </div>
                        <div className={style.newValue}> New Value </div>
                    </div> )})}
        </form>
)


const styles = {
    block: {
    },
    checkbox: {
      marginBottom: 16,
      maxWidth: 40,
    },
  };

  priceListTable = reduxForm({
    form: 'priceListTable',
  })(priceListTable) 

  priceListTable = connect(
    state => ({
        priceList : state.PriceList.product,
    }),
  )(priceListTable)
  
export default priceListTable;