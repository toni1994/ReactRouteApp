import React from 'react';
import FormArchitectProperty from './FormArchitectProperty';
import FormFolderPrototyper from './FormFolderPrototyper';
import FormArchitectPropertyBuildings from './FormArchitectPropertyBuildings';
import FormEditPropArchitectProperty from './FormEditPropArchitectProperty';
import FormEditFolder from './FormEditFolder';
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
              id = {this.props.idOfProperty}
              mode = {"New"}
              onSubmit={this.props.handleSubmitProperty}
              onCancel={this.props.closeFormPropertyArchitect} />
            break;
          case 'PreviewProperty':
            form = <FormArchitectProperty 
            id = {this.props.idOfProperty}
            mode = {"Preview"}
            onSubmit={this.props.handleSubmitProperty}
            onCancel={this.props.closeFormPropertyArchitect} />
            break;
          case 'EditProperty':
            form = <FormEditPropArchitectProperty 
            id = {this.props.idOfProperty}
            mode = {"Edit"}
            onSubmit={this.props.handleEditProperty}
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
            onCancel={this.props.closeFormAreaPrototyper}
            mode = {"New"} />
            break;
          case 'PreviewFolder':
            form = <FormFolderPrototyper 
            id = {this.props.idOfFolder}
            mode = {"Preview"}
            onCancel={this.props.closeFormAreaPrototyper} />
            break;
          case 'EditFolder':
            form = <FormEditFolder
            id = {this.props.idOfFolder}
            mode = {"Edit"}
            onSubmit={this.props.handleEditFolder}
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