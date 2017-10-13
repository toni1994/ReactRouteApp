import React from 'react';
import FormArchitectProperty from './FormArchitectProperty';
import classNames from 'classnames';

import style from '../styles/Panel.scss';

const Panel = (props) => (
    <div className={classNames([style.container, !props.isOpen && style.close])}>
        <FormArchitectProperty />
    </div>
)

export default Panel;