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
    if (!values.yearOpened) {
      errors.yearOpened = 'Required';
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
    <form className={style.form}>
        <div className={style.header}>
            <FaBuildingO />
            <p> Add Property </p>
        </div>
        <div className={style.body}>
                <Field name="propertyName" component={renderFormField} type="text" label="Property name" />
                <Field name="yearOpened" component={renderFormField} type="text" label="Year opened" />
                <Field name="address" component={renderFormField} type="text" label="Address" />
                <Field name="phone" component={renderFormField} type="text" label="Phone" />
        </div>
        <div className={style.footer}>
            <FormButton notPrimary> CANCEL
            </FormButton>
            <FormButton type="submit"> ADD PROPERTY
            </FormButton>
        </div>
    </form>
)

export default reduxForm({
    form: 'addProperty',
    validate,
})(FormPropArchitectProperty)