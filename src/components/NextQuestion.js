import React from "react";

const NextQuestion = ({ dispatch, answer, index, numQuestion }) => {
  if (answer === null) return;

  if (index < numQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        Finish
      </button>
    );
  }
};

export default NextQuestion;