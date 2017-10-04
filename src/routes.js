import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = props => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/property-architect' component={PropertyArchitect}/>
      <Route path='/area-prototyper' component={AreaPrototyper}/>
    </Switch>
)

export default Routes;
