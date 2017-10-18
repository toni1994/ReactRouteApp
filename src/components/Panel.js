import React from 'react';
import FormArchitectProperty from './FormArchitectProperty';
import FormFolderPrototyper from './FormFolderPrototyper';
import classNames from 'classnames';

import style from '../styles/Panel.scss';

export class Panel extends React.Component {
    constructor(props) {
      super(props);
      this.handleForm=this.handleForm.bind(this)
    }

    handleForm(type) {
        let form;
        switch(type) {
          case 'NewProperty':
              form = <FormArchitectProperty 
              onSubmit={this.props.handleSubmitProperty}
              onCancel={this.props.closeFormPropertyArchitect} />
            break;
          case 'NewFolder':
                form = <FormFolderPrototyper 
                onSubmit={this.props.handleSubmitPrototyper}
                onCancel={this.props.closeFormAreaPrototyper} />
          break;
          default:
            form = <div>{'BYE'}</div>;
            break;
        }
    
        return form;
      }

    render() {
        const {props} = this;
        return(
            <div className={classNames([style.container, !props.isOpen && style.close])}>
                {this.handleForm(props.type)}
            </div>

        )
    }
}

export default Panel;