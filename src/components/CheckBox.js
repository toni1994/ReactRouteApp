import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup }from 'material-ui/RadioButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked' 

import styles from '../styles/CheckBox.scss';

class CheckBox extends React.PureComponent {
    constructor(props) {
      super(props);
    this.updateCheck=this.updateCheck.bind(this);
    }

    updateCheck(e) {
          this.props.updateSort(e.target.value);
      }
    
    render(){
        return(
        <MuiThemeProvider>
            <div> 
                <p className={styles.name}> Name </p>
            <RadioButtonGroup name="shipSpeed" onChange={this.updateCheck} defaultSelected={this.props.sort}>
            <RadioButton
            label="ASC"
            checkedIcon={<CheckCircle />}
            uncheckedIcon={<RadioButtonUnchecked />}
            value="ASC"
            style={stylesCheckBox.checkbox} 
            labelStyle={stylesCheckBox.label} />
            <RadioButton
            label="DESC"
            checkedIcon={<CheckCircle />}
            uncheckedIcon={<RadioButtonUnchecked />}
            value="DESC"
            style={stylesCheckBox.checkbox}
            labelStyle={stylesCheckBox.label} />
            </RadioButtonGroup>
            </div> 
        </MuiThemeProvider> )
    }
}

const stylesCheckBox = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: '5px',
      marginLeft: '30px',
    },
    label: {
      marginLeft: '-8px'
    },
  };

export default CheckBox;


  