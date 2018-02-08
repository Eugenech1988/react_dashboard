import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DashContainer from 'containers/DashContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={DashContainer}/>
      </Switch>
    );
  }
}

export default Routes;
