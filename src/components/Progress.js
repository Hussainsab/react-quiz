import React from "react";

const Progress = ({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <div className="progress">
      <progress max={numQuestion} value={index + (answer !== null)}></progress>
      <p>
        Question {index + 1} / {numQuestion}
      </p>
      <p>
        {points} / {maxPossiblePoints} points
      </p>
    </div>
  );
};

export default Progress;
