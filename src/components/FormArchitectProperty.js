import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FaBuildingO from 'react-icons/lib/fa/building-o';
import FormButton from './FormButton';

import style from '../styles/Form.scss';

const FormPropArchitectProperty = (props) => (
    <form className={style.form}>
        <div className={style.header}>
            <FaBuildingO />
            <p> Add Property </p>
        </div>
        <div className={style.body}>
        </div>
        <div className={style.footer}>
            <FormButton notPrimary> CANCEL
            </FormButton>
            <FormButton type="submit"> ADD PROPERTY
            </FormButton>
        </div>
    </form>
)

export default FormPropArchitectProperty;