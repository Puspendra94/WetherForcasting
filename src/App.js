import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <Router >
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
} 

export default App;
