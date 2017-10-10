import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import style from '../App.scss';

const NewButton = () => (
    <div className={style.buttonAddContainer}> 
        <div className={style.buttonAdd}> <FaPlus/> 
        </div> 
    </div>
)

export default NewButton;