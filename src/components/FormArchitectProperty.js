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
        <FormField {...input} {...props} value={props.mode !== "New" ? editValue : ""} placeholder={label} type={type} />
      <div className={style.error}>  {touched &&
          ((error && <span>{error}</span>) )} </div>
    </div>
  )


let FormPropArchitectProperty = (props) => (
  <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
        {console.log(props.initialValues)}
        {console.log(props.selectedValue)}
        {console.log(props.mode)}
            <FaBuildingO />
            {props.mode === "Preview" ? <p> {props.initialValues.name} </p> : props.mode === "New" ? <p> Add Property </p> : <p> Edit Property </p> }
        </div>
        {props.mode === "New" || props.mode === "Edit" ? <div className={style.body}>
                <Field name="name" editValue={props.initialValues.name} component={renderFormField} type="text" label="Property name" />
                <Field name="managerName" editValue={props.initialValues.managerName} component={renderFormField} type="text" label="Manager Name" />
                <Field name="address" editValue={props.initialValues.address} component={renderFormField} type="text" label="Address" />
                <Field name="phone" editValue={props.initialValues.phone} component={renderFormField} type="text" label="Phone" />
        </div> :
        <div className={style.body}>
         <div className={style.ImageContainer}> <img src={props.initialValues.imagePath} alt="ImageHotel"></img> </div>
         <div className={style.NameContainer}> MANAGER: {props.initialValues.managerName} </div>
        </div> }
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            {props.mode === "Preview" ? <div>  </div> : props.mode === "New" ?  <FormButton type="submit"> ADD PROPERTY
            </FormButton> : <FormButton type="submit"> EDIT PROPERTY
            </FormButton> }
        </div>
    </form>
)

FormPropArchitectProperty = reduxForm({
  form: 'addProperty',
  validate
})(FormPropArchitectProperty)

FormPropArchitectProperty = connect(
  state => ({
    initialValues: state.PropertyArchitect.properties[0],
    selectedValue: state.PropertyArchitect.selectedProperty,
  }),
)(FormPropArchitectProperty)


export default FormPropArchitectProperty

