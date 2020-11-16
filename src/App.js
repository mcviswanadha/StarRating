import React, { useState } from "react";
import "./styles.css";

const StarComponent = ({
  starId,
  rating,
  onMouseEnter,
  onMouseLeave,
  onClick
}) => {
  let style = "star-rating-blank";
  if (rating && rating >= starId) {
    style = "star-rating-filled";
  }

  return (
    <div
      className="starClass"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        class={style}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function App() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <div class="header">
        <h1>Star Rating</h1>
      </div>
      <div class="flex-container">
        {stars.map((s) => (
          <StarComponent
            key={s}
            starId={s}
            rating={hoverRating || rating}
            onMouseEnter={() => setHoverRating(s)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(s)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
