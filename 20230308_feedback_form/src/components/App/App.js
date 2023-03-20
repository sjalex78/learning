import React from "react";
import "./App.css";
import feedbacks from "./data";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

function App() {
  return (
    <div className="App">
      <h1 className="bg-pink-400">Feedback form</h1>
      <div className="wrapper">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            how={feedback.how}
            key={feedback.name}
            name={feedback.name}
            scale={feedback.scale}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
