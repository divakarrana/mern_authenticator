import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ExternalUser from './components/ExternalUser/ExternalUser';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminDashboard from './components/AdminLogin/AdminDashboard/AdminDashboard';

function App() {

  return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ExternalUser}/>
          <Route path="/admin-login" component={AdminLogin}/>
          <Route path="/dashboard" component={AdminDashboard} />
        </Switch>
      </div>
  );
}

export default App;
