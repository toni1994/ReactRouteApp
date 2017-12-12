import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray } from 'redux-form';
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
        <input {...input}  className={style.input} type="text"/> 
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
    flatDisCount
  }) => (
    <div>
         { priceList.map((item,index)=>{
                    return (  <div className={style.priceTableRow} key={index}>
                        {console.log(`product[${index}].officeFree)`)}
                        <div className={style.code}> {item.CDTcodes} </div>
                        <div className={style.officeFree} > <Field name={`product[${index}].officeFree`} officeFree={item.officeFree} component={officeFree} index={index} item={item}/> </div>
                        {!disCountByCategory ? <div className={style.discount}>  {item.disCount}  </div> : <div className={style.discount}>  {flatDisCount}  </div>}
                        {!disCountByCategory ?  <div className={style.newValue}>  {(item.officeFree - (item.officeFree * item.disCount * 0.01)).toFixed(2)}  </div> :
                          <div className={style.newValue}>  {(item.officeFree - (item.officeFree * flatDisCount * 0.01)).toFixed(2)}  </div>}
                    </div> )})}
    </div>
  )

let priceListTable = (props) => (
        <form> 
          <FieldArray name="price" component={tablePriceList} flatDisCount={props.flatDisCount} priceList={props.priceList} disCountByCategory={props.disCountByCategory} />  
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