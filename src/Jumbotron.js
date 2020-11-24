import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h2 className="text-primary">Do you need help with beer selection?</h2>
        <p>We got in contact with the UK brewery BrewDog to find which is the best beer to go with different meals or different time of the day or different day of the week.</p>
        <em>In this project, I am fetching Data from https://api.punkapi.com/v2/beers and filtering it based on week day and day time</em>
      </div>
    );
  }
}

export default Jumbotron;