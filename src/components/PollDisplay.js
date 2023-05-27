import { useQuestions } from "../context/Questions";
import React from "react";

function PollDisplay() {
  const { questions, updateVote } = useQuestions();
  console.log(questions);
  return (
    <div>
      <div>
        <h1>{questions.question}</h1>
      </div>
      <div>
        <h2>Choices</h2>
        {questions.choices.map((choice) => (
          <div key={choice.id}>
            <label htmlFor={choice.id}>
              {choice.label} : {choice.votes} votes
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PollDisplay;
