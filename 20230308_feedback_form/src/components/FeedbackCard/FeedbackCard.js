import React from "react";
import PropTypes from "prop-types";
import FeedbackDetail from "../FeedbackDetail/FeedbackDetail";

export default function FeedbackCard({ how, name, scale }) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 border-x-4">
      <h3>{name}</h3>
      <div className="mt-1 text-sm text-blue-600">{scale} stars</div>
      <FeedbackDetail how={how} />
      {/* <div>{how.join(", ")}.</div> */}
    </div>
  );
}

FeedbackCard.propTypes = {
  how: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
};
