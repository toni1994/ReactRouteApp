import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FolderOpenO from 'react-icons/lib/fa/folder-open-o';
import FormButton from './FormButton';
import { connect } from 'react-redux';

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

let FormFolderPrototyper = (props) => (
    <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
            <FolderOpenO />
            {props.mode === "Preview" ? <p> About folder </p> :  <p>New Folder </p> }
        </div>
        {props.mode === "New" ? 
        <div className={style.body}>
                <Field name="folderName" component={renderFormField} type="text" label="Folder name" />
        </div> : <div className={style.body}>
         <div className={style.NameContainer}> NAME: {props.initialValues.name} </div>
        </div>}
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            {props.mode === "Preview" ? <div>  </div> :   
            <FormButton type="submit"> CREATE
            </FormButton>  }
        </div>
    </form>
)

FormFolderPrototyper = reduxForm({
    form: 'addFolder',
    validate
  })(FormFolderPrototyper)
  
  FormFolderPrototyper = connect(
    state => ({
      initialValues: state.AreaPrototyper.folders[state.AreaPrototyper.folders.findIndex(item => item.id === state.AreaPrototyper.selectedFolder)] ,
      selectedValue: state.AreaPrototyper.selectedFolder,
    }),
  )(FormFolderPrototyper)
  
  
  export default FormFolderPrototyper