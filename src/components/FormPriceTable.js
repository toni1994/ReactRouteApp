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
    officeFree
  }) => (
    <div  className={style.inputDiv} >
        <input {...input} value={officeFree}  className={style.input} type="number"/> 
    </div> 
  )

let priceListTable = (props) => (
        <form> { props.priceList.map((item,index)=>{
                    return (  <div className={style.priceTableRow}>
                        <div className={style.code}> {item.CDTcodes} </div>
                        <div className={style.officeFree} > <Field name={"officeFree"+ index} officeFree={item.officeFree} component={officeFree} index={index} item={item}/> </div>
                        {!props.disCountByCategory ? <div className={style.discount}>  {item.disCount}  </div> : <div className={style.discount}>  {props.flatDisCount}  </div>}
                        {!props.disCountByCategory ?  <div className={style.newValue}>  {(item.officeFree - (item.officeFree * item.disCount * 0.01)).toFixed(2)}  </div> :
                          <div className={style.newValue}>  {(item.officeFree - (item.officeFree * props.flatDisCount * 0.01)).toFixed(2)}  </div>}
                    </div> )})}
        </form>
)


  priceListTable = reduxForm({
    form: 'priceListTable',
  })(priceListTable) 

  priceListTable = connect(
    state => ({
      priceList : state.PriceList.product.filter( product => product.disCountEnable === true ),
      disCountByCategory: state.PriceList.disCountByCategory,
      flatDisCount: state.PriceList.flatDisCount
    }),
  )(priceListTable)
  
export default priceListTable;