import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FolderOpenO from 'react-icons/lib/fa/folder-open-o';
import FormButton from './FormButton';

import style from '../styles/Form.scss';

const validate = values => {
    const errors = {};
    if (!values.folderName) {
      errors.folderName = 'Required';
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

const FormFolderPrototyper = (props) => (
    <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
            <FolderOpenO />
            <p> New Folder </p>
        </div>
        <div className={style.body}>
                <Field name="folderName" component={renderFormField} type="text" label="Folder name" />
        </div>
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            <FormButton type="submit"> CREATE
            </FormButton>
        </div>
    </form>
)

export default reduxForm({
    form: 'addFolder',
    validate,
})(FormFolderPrototyper)