import React from 'react';
import Home from './components/Home'
import AreaPrototyper from './components/AreaPrototyper'
import PropertyArchitect from './components/PropertyArchitect'
import PropertyArchitectBuildings from './components/PropertyArchitectBuildings';
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/property-architect' component={PropertyArchitect}/>
      <Route path='/area-prototyper' component={AreaPrototyper}/>
      <Route path='/property-architect/:id' component={PropertyArchitectBuildings}/>
    </Switch>
)

export default Routes;
