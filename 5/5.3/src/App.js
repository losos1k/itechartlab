import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(data => {
        for (var i = 0; i < 60; i++) {
          this.state = { thumbnailUrl: data.data[i].thumbnailUrl };
          console.log(this.state.thumbnailUrl);
        }
      });
  };

  render() {
    return (
      <div>
        <img src={this.setState.thumbnailUrl} alt={"ddd"} />
      </div>
    );
  }
}

export default App;
