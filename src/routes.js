import React from 'react';
import Home from './components/Home'
import AreaPrototyper from './components/AreaPrototyper'
import PropertyArchitect from './components/PropertyArchitect'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = props => (
    <ConnectedSwitch>
      <Route exact path='/' component={Home}/>
      <Route path='/property-architect' component={PropertyArchitect}/>
      <Route path='/area-prototyper' component={AreaPrototyper}/>
    </ConnectedSwitch>
)

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);

export default Routes;
