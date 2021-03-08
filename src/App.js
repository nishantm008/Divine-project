import React from 'react';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/divine-project" component={Login} />
          <Route exact path="/divine-project/register" component={Registration} />
          <Route exact path="/divine-project/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
