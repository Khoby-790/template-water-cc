import React from 'react';
import './App.css';
import Admin from './layout/Admin';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/app" render={props => <Admin {...props} />} />
        <Redirect from="/" to="/app" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
