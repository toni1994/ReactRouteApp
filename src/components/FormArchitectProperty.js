import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FaBuildingO from 'react-icons/lib/fa/building-o';
import FormButton from './FormButton';
import FormField from './FormField';
import { connect } from 'react-redux';
import style from '../styles/Form.scss';

const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.managerName) {
      errors.managerName = 'Required';
    }
    if (!values.address) {
        errors.address = 'Required';
      }
      if (!values.phone) {
        errors.phone = 'Required';
      }
    return errors;
};

const renderFormField = ({
    input,
    label,
    type,
    ...props,
    editValue,
    meta: { touched, error }
  }) => (
    <div className={style.inputContainer}>
      <div className={style.label}>  <label >{label}</label> </div>
        <FormField {...input} {...props} value={editValue} placeholder={label} type={type} />
      <div className={style.error}>  {touched &&
          ((error && <span>{error}</span>) )} </div>
    </div>
  )


let FormPropArchitectProperty = (props) => (
  <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
            <FaBuildingO />
            {props.mode === "Preview" ? <p> {props.initialValues.name} </p> :  <p> Add Property </p> }
        </div>
        {props.mode === "New" ? <div className={style.body}>
                <Field name="name" editValue={""} component={renderFormField} type="text" label="Property name" />
                <Field name="managerName" editValue={""} component={renderFormField} type="text" label="Manager Name" />
                <Field name="address" editValue={""}  component={renderFormField} type="text" label="Address" />
                <Field name="phone" editValue={""}  component={renderFormField} type="text" label="Phone" />
        </div> :
        <div className={style.body}>
         <div className={style.ImageContainer}> <img src={props.initialValues.imagePath} alt="ImageHotel"></img> </div>
         <div className={style.NameContainer}> MANAGER: {props.initialValues.managerName} </div>
         <div className={style.NameContainer}> ADRESS: {props.initialValues.address} </div>
         <div className={style.NameContainer}> PHONE: {props.initialValues.phone} </div>
        </div> }
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            {props.mode === "Preview" ? <div>  </div> :   
            <FormButton type="submit"> ADD PROPERTY
            </FormButton>  }
        </div>
    </form>
)

FormPropArchitectProperty = reduxForm({
  form: 'addProperty',
  validate
})(FormPropArchitectProperty)

FormPropArchitectProperty = connect(
  state => ({
    initialValues: state.PropertyArchitect.properties[state.PropertyArchitect.properties.findIndex(item => item.id === state.PropertyArchitect.selectedProperty)] ,
    selectedValue: state.PropertyArchitect.selectedProperty,
  }),
)(FormPropArchitectProperty)


export default FormPropArchitectProperty

