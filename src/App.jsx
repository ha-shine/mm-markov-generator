import React, { Component } from 'react';

import Navbar from './components/Navbar.jsx';
import MarkovArea from './components/MarkovArea.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MarkovArea />
      </div>
    );
  }
}

export default App;
