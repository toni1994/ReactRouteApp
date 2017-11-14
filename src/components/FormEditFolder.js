import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FolderOpenO from 'react-icons/lib/fa/folder-open-o';
import FormButton from './FormButton';
import FormField from './FormField';
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
    editValue,
    ...props,
    meta: { touched, error }
  }) => (
    <div className={style.inputContainer}>
      <div className={style.label}>  <label >{label}</label> </div>
      <div className={style.inputFolder}>
      <FormField {...input} {...props} value={editValue} placeholder={label} type={type} />
      </div>
      <div className={style.error}>  {touched &&
          ((error && <span>{error}</span>) )} </div>
    </div>
  )

let FormEditFolder = (props) => (
    <form className={style.form} onSubmit={props.handleSubmit}>
        <div className={style.header}>
            <FolderOpenO />
            <p> Edit Folder </p>
        </div>
        <div className={style.body}>
                <Field name="folderName" editValue={props.initialValues.name} component={renderFormField} type="text" label="Folder name" />
        </div>
        <div className={style.footer}>
            <FormButton notPrimary onClick={props.onCancel}> CANCEL
            </FormButton>
            <FormButton type="submit"> SUBMIT
            </FormButton>
        </div>
    </form>
)

FormEditFolder = reduxForm({
    form: 'addFolder',
    validate
  })(FormEditFolder)
  
  FormEditFolder = connect(
    state => ({
      initialValues: state.AreaPrototyper.folders[state.AreaPrototyper.folders.findIndex(item => item.id === state.AreaPrototyper.selectedFolder)] ,
      selectedValue: state.AreaPrototyper.selectedFolder,
    }),
  )(FormEditFolder)
  
  
  export default FormEditFolder