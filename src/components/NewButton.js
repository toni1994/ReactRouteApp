import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import style from '../styles/NewButton.scss';

const NewButton = (props) => (
    <div className={style.container} onClick={props.open}> 
        <div className={style.new}> <FaPlus/> 
        </div> 
    </div>
)

export default NewButton;