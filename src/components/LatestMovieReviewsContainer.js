import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "hNcIzyswuOENYEGb5Xd9eAoTnAfRnXbl";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Recent Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
