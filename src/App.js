import React, { Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Components/Moderateur/auth/login'
import Logout from './Components/Moderateur/auth/logout'
import ModeratorPage from './Components/Moderateur/auth/ModeratorPage'
import Gestionnaire from './Components/gestionnaire'

export default class logout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Gestionnaire} />
        <Route exact path='/Components/Moderateur/auth/ModeratorPage' component={ModeratorPage} />
        <Route exact path='/Components/Moderateur/auth/logout' component={Logout} />
      </Switch>
      </BrowserRouter>
    );
  }
}


