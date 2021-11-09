import React from "react";

export default function MovieReviews({ reviews }) {
  const reviewDetails = (review) => {
    const date = new Date(review.date_updated)
      .toDateString()
      .slice(4)
      .split(" ");
    const formattedDate = `${date[0]}. ${
      date[1].startsWith(0) ? date[1].slice(1) : date[1]
    }, ${date[2]}`;

    return (
      <div key={review.display_title} className="review">
        <a href={review.link.url} target="_blank">
          {review.headline}
        </a>
        <div>{review.summary_short}</div>
        <img src={review.multimedia.src} />
        <div>
          <b>By: {review.byline}</b>
        </div>
        <div>{formattedDate}</div>
        <br></br>
      </div>
    );
  };

  return <div className="review-list">{reviews.map(reviewDetails)}</div>;
}
