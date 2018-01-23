import React, {Component} from 'react';

class FilmListing extends Component {
  render() {
      let allFilms = this.props.films.map(films => {
    return <h1>{this.props.allFilms[0].title}</h1>
  });
    return (
    <div>{allFilms}</div>
    );
  }
}

export default FilmListing;
