import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    spartans: []
  }
  
  componentDidMount() {
    fetch('/spartans')
      .then(res => res.json())
      .then(spartans => this.setState({spartans}));
  }

  render(){
    return (
      <div className="App">

        
        <h1> UNSC CLASSIFIED INFORMATION</h1>
        <div class="databaseTitle">
          SPARTAN DATABASE
        </div>

        <br></br>
        <b>
          <div class="row">
            <div class="col">
              NAME
            </div>
            <div class="col">
              SERVICE NUMBER
            </div>
            <div class="col">
              SPECIES
            </div>
            <div class="col">
              HOME WORLD
            </div>
            <div class="col">
              BIRTH
            </div>
            <div class="col">
              STATUS
            </div>
          </div>
        </b>

        <br></br>
        
        {this.state.spartans.map(spartans =>
          <div class="row">
            <div class="col" key={spartans._id}>
              {spartans.name}
            </div>
            <div class="col" key={spartans._id}>
              {spartans.service_number}
            </div>
            <div class="col" key={spartans._id}>
              {spartans.species}
            </div>
            <div class="col" key={spartans._id}>
              {spartans.home_world}
            </div>
            <div class="col" key={spartans._id}>
              {spartans.birth}
            </div>
            <div class="col" key={spartans._id}>
              {spartans.status}
            </div>
          </div>
        )}
        
        
        

      </div>
    );
  }
  
}

export default App;