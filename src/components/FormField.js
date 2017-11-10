import React from 'react';
import style from '../styles/Form.scss';


class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props)
    this.state = {
      value: this.props.value || '',
    };
  }

  change(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.change(event.target.value);
  }

  render() {
    return (
      <div className={style.input}>
        <input
          value={this.state.value || ''}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FormField;