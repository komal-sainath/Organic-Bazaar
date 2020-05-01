import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PostsPage from './Pages/AdminPage/Components/AdminPage';
import {NavigationBar} from './Components/AppBar/AppBar';

const App = () => {
  return (
    <Router>
    <NavigationBar/>
      <Switch>
        <Route exact path="/" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
