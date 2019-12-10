import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import Showcase from './Showcase';
import Wanaka from './wanakaApp';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {


    return (
    <Router>
        <Showcase path="/" />
        <Wanaka path="wanaka-app/" />
      </Router>
    )
  }
}

export default App;