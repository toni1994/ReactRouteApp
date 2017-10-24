import React from 'react';
import style from '../styles/MultiSearch.scss';

import FaClose from 'react-icons/lib/fa/close'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import Search from 'react-icons/lib/fa/search'
import CheckBox from './CheckBox';

export class MultiSearch extends React.Component{
    constructor(props){
      super(props);
      this.openDropDown=this.openDropDown.bind(this);
      this.changeInputValue=this.changeInputValue.bind(this);
        this.state = {
        open: false,
        checked: false
    }
}

    openDropDown(){
      this.setState({
        ...this.state,
        open: !this.state.open,
      });
    }

    changeInputValue(e){
      this.props.changeInputValue(e.target.value);
    }


    render(){
      return( 
    <div className={style.moduleHeader}>
        <div className={style.container}>
          <div className={style.search}> <div className={style.searchIcon}> <Search /> </div> <input placeholder="Search folders by name" onChange={this.changeInputValue} value={this.props.searchValue} /> <div className={style.closeIcon}> <FaClose /> </div> </div>
          <div className={style.searchSection}> <span> SORT BY  </span> Name / ASC </div>
          <div className={style.searchSection}> <span> FILTERS  </span> 0 active </div>
      <div className={style.buttonContainer} onClick={this.openDropDown}> { this.state.open ? <FaCaretUp /> : <FaCaretDown/> } </div>
        </div>
        { (this.state.open) && <div className={style.dropdown}> 
          <div className={style.section}>
            <div className={style.sectionHeader}>
              <span>{'Sort by'}</span>
            </div>   
              <span className={style.value}>  </span>
            </div> 
             <div className={style.sortOption}>   </div>  
            </div>
        }    
           <CheckBox updateSort={this.props.updateSort} sort={this.props.sort}/>
      </div>
      )
    }
}


export default MultiSearch;