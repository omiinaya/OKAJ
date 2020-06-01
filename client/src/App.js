import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Informed from "./pages/Informed";
import SuicidePrevent from "./components/SuicidePrevent";
import MoodDisorders from "./components/MoodDisorders";
import Addiction from "./components/Addiction";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/informed" component={Informed} />
            <Route exact path="/suicide" component={SuicidePrevent} />
            <Route exact path="/mood" component={MoodDisorders} />
            <Route exact path="/addiction" component={Addiction} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;