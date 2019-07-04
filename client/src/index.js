import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// screen imports
import PlayerList from "./screens/PlayerList";
import ComparePlayer from "./screens/ComparePlayer";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Route path="/playerlist" exact component={PlayerList} />
        <Route path="/comparePlayer" exact component={ComparePlayer} />
        <Route path="/" exact component={PlayerList} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
