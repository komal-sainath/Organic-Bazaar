import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AdminPage from './Pages/AdminPage/AdminPage';
import {NavigationBar} from './Components/AppBar/AppBar';

const App = () => {
  return (
    <Router>
    <NavigationBar/>
      <Switch>
        <Route exact path="/" component={AdminPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
