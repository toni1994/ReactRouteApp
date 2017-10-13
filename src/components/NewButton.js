import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import style from '../styles/NewButton.scss';

const NewButton = (props) => (
    <div className={style.container}> 
        <div className={style.new} onClick={props.open}> <FaPlus/> 
        </div> 
    </div>
)

export default NewButton;