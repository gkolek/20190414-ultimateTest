import React, { Component } from 'react';
import './App.css';
import Students from './students/containers/Students'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>
            start paragraph
          </p>
          <Students />
        </div>
      </div>
    );
  }
}

export default App;
