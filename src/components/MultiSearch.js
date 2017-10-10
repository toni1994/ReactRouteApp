import React from 'react';
import style from '../styles/MultiSearch.scss';

import FaClose from 'react-icons/lib/fa/close'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import Search from 'react-icons/lib/fa/search'

const MultiSearch = () => (
    <div className={style.moduleHeader}>
        <div className={style.container}>
          <div className={style.search}> <div className={style.searchIcon}> <Search /> </div> <input placeholder="Search folders by name"/> <div className={style.closeIcon}> <FaClose /> </div> </div>
          <div className={style.searchSection}> <span> SORT BY  </span> Name / ASC </div>
          <div className={style.searchSection}> <span> FILTERS  </span> 0 active </div>
          <div className={style.buttonContainer}>  <FaCaretDown/> </div>
        </div>    
      </div>
)

export default MultiSearch;