import React from "react";
import PropTypes from "prop-types";
import "./FeedbackDetail.css";

function convertFeedback(comment) {
  switch (comment) {
    case "pairing":
      return "🐜";
    case "asking questions":
      return "🍖";
    case "on time":
    default:
      return "🌱";
  }
}

export default function FeedbackDetail({ how }) {
  return (
    <div className="details">
      <h4>Details:</h4>
      <div>How: {how.map((comment) => convertFeedback(comment)).join(" ")}</div>
    </div>
  );
}

FeedbackDetail.propTypes = {
  how: PropTypes.arrayOf(PropTypes.string).isRequired,
};
