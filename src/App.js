import React, { Component } from 'react';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import TMDB from './TMDB.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListing  />
          </div>
      });
      return (
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
            <FilmDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
