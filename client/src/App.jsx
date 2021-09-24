import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Post from './pages/post';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import { Context } from './context/Context';
import Write from './pages/write';

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>

          <Route path="/post/:id">
            <Post />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
