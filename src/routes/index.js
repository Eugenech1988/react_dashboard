import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'containers/Dashboard';
import History from 'containers/History';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/history' component={History}/>
      </Switch>
    );
  }
}

export default Routes;
