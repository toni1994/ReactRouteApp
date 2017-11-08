import React from 'react';
import FormArchitectProperty from './FormArchitectProperty';
import FormFolderPrototyper from './FormFolderPrototyper';
import FormArchitectPropertyBuildings from './FormArchitectPropertyBuildings';
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
              name = {undefined}
              image = {undefined}
              manager = {undefined}
              mode = {"Change"}
              onSubmit={this.props.handleSubmitProperty}
              onCancel={this.props.closeFormPropertyArchitect} />
            break;
          case 'PreviewProperty':
            form = <FormArchitectProperty 
            name = {this.props.name}
            image = {this.props.image}
            manager = {this.props.manager}
            mode = {"Preview"}
            onSubmit={this.props.handleSubmitProperty}
            onCancel={this.props.closeFormPropertyArchitect} />
          break;
          case 'EditProperty':
            form = <FormArchitectProperty 
            name = {this.props.name}
            manager = {this.props.manager}
            address = {this.props.address}
            phone = {this.props.phone}
            mode = {"Change"}
            onSubmit={this.props.handleSubmitProperty}
            onCancel={this.props.closeFormPropertyArchitect} />
        break;
          case 'NewBuilding':
            form = <FormArchitectPropertyBuildings 
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