import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating/StarRating';

class App extends Component {
  render() {
    return (
      <div>
        <StarRating totalStars={5} starsSelected={2}/>
        <StarRating totalStars={10} />
        <StarRating totalStars={15} />
      </div> 
      
    );
  }
}

export default App;