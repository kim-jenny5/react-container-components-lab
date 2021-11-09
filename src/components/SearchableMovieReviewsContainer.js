import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "hNcIzyswuOENYEGb5Xd9eAoTnAfRnXbl";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ reviews: data.results }));
  };

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <label for="search-input">Search for movie reviews:</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type="input"
            id="search-input"
            onChange={this.handleInput}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        {this.state.searchTerm !== "" ? <br></br> : null}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
