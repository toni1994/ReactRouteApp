import React from 'react';
import Portal from 'react-portal';
import classNames from 'classnames';

import style from '../styles/Panel.scss';

const Panel = (props) => (
    <div className={classNames([style.container, !props.isOpen && style.close])}>
        
    </div>
)

export default Panel;