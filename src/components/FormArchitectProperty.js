import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FaBuildingO from 'react-icons/lib/fa/building-o';
import FormButton from './FormButton';

import style from '../styles/Form.scss';

const validate = values => {
    const errors = {};
    if (!values.propertyName) {
      errors.propertyName = 'Required';
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
    meta: { touched, error }
  }) => (
    <div className={style.inputContainer}>
      <div className={style.label}>  <label >{label}</label> </div>
      <div className={style.input}>
        <input {...input} placeholder={label} type={type} />
      </div>
      <div className={style.error}>  {touched &&
          ((error && <span>{error}</span>) )} </div>
    </div>
  )

const FormPropArchitectProperty = (props) => (
  <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
            <FaBuildingO />
            {props.mode === "Preview" ? <p> {props.name} </p> : props.name === undefined ? <p> Add Property </p> : <p> Edit Property </p> }
        </div>
        {props.mode === "Change" ? <div className={style.body}>
                <Field name="propertyName" value={props.name} component={renderFormField} type="text" label="Property name" />
                <Field name="managerName" component={renderFormField} type="text" label="Manager Name" />
                <Field name="address" component={renderFormField} type="text" label="Address" />
                <Field name="phone" component={renderFormField} type="text" label="Phone" />
        </div> :
        <div className={style.body}>
         <div className={style.ImageContainer}> <img src={props.image} alt="ImageHotel"></img> </div>
         <div className={style.NameContainer}> MANAGER: {props.manager} </div>
        </div> }
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            {props.mode === "Change" ? <FormButton type="submit"> ADD PROPERTY
            </FormButton> : <div> </div>}
        </div>
    </form>
)

export default reduxForm({
    form: 'addProperty',
    validate,
})(FormPropArchitectProperty)