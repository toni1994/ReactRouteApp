import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Delete from 'material-ui/svg-icons/action/delete';
import BorderColor from 'material-ui/svg-icons/editor/border-color';


class DropDown extends React.PureComponent {
    constructor(props) {
      super(props);
    this.deleteItem=this.deleteItem.bind(this);
    this.previewItem=this.previewItem.bind(this);
    this.editItem=this.editItem.bind(this);
    }

    deleteItem() {
        this.props.deleteItem(this.props.idItem);
    }

    previewItem() {
        this.props.previewItem(this.props.idItem);
    }

    editItem() {
        this.props.editItem(this.props.idItem);
    }
     
      render(){
        return(  
    <MuiThemeProvider>
    <div>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Preview"  leftIcon={<RemoveRedEye />} onClick={this.previewItem}/>
        <MenuItem primaryText="Delete"  leftIcon={<Delete />} onClick={this.deleteItem}/>
        <MenuItem primaryText="Edit" leftIcon={<BorderColor />} onClick={this.editItem}/>
      </IconMenu>
     
    </div>
    </MuiThemeProvider >)}
}

  
  export default DropDown;