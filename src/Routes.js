import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Details from './Details';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/details/:id' component={Details}/>
    </Switch>
  </main>
)

export default Routes;
