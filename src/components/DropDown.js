import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Delete from 'material-ui/svg-icons/action/delete';
import BorderColor from 'material-ui/svg-icons/editor/border-color';


class DropDownPropertyArchitect extends React.PureComponent {
    constructor(props) {
      super(props);
    this.deleteItem=this.deleteItem.bind(this);
    this.previewItem=this.previewItem.bind(this);
    this.editItem=this.editItem.bind(this);
    }

    deleteItem() {
        this.props.deleteProperty(this.props.idItem);
    }

    previewItem() {
        this.props.previewProperty(this.props.name,this.props.imagePath,this.props.managerName);
    }

    editItem() {
        this.props.editProperty(this.props.idItem,this.props.managerName,this.props.address,this.props.phone);
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

  
  export default DropDownPropertyArchitect;