import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'containers/Dashboard';
import History from 'containers/History';
import Profile from 'containers/Profile';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/history' component={History}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    );
  }
}

export default Routes;
