import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import SelectionForm from './SelectionForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <Jumbotron />
                <SelectionForm />
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
