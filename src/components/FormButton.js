import React from 'react';
import styles from '../styles/FormButton.scss';
import classNames from 'classnames';

const FormButton = (props) => (
  <button
    className={classNames([
      styles.container,
      props.className,
      props.notPrimary && styles.notPrimary,
      props.outline && styles.outline,
      props.warning && styles.warning,
      props.disabled && styles.disabled,
    ])}
    type={props.type}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

FormButton.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
};

export default FormButton;
