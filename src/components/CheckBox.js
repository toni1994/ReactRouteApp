import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked' 

import styles from '../styles/CheckBox.scss';

class CheckBox extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        checked: false
    }
    this.updateCheck=this.updateCheck.bind(this);
    }

    updateCheck() {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
      }
    
    render(){
        return(
        <MuiThemeProvider>
            <div> 
                <p className={styles.name}> Name </p>
            <Checkbox
            label="ASC"
            checked={this.state.checked}
            checkedIcon={<CheckCircle />}
            uncheckedIcon={<RadioButtonUnchecked />}
            onCheck={this.updateCheck}
            style={stylesCheckBox.checkbox} 
            labelStyle={stylesCheckBox.label} />
            <Checkbox
            label="DESC"
            checked={this.state.checked}
            checkedIcon={<CheckCircle />}
            uncheckedIcon={<RadioButtonUnchecked />}
            onCheck={this.updateCheck}
            style={stylesCheckBox.checkbox}
            labelStyle={stylesCheckBox.label} />
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


  