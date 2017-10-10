import React from 'react';
import Home from './components/Home'
import AreaPrototyper from './components/AreaPrototyper'
import PropertyArchitect from './components/PropertyArchitect'
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/property-architect' component={PropertyArchitect}/>
      <Route path='/area-prototyper' component={AreaPrototyper}/>
    </Switch>
)

export default Routes;
