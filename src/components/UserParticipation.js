import { useQuestions } from "../context/Questions";
import React from "react";

function UserParticipation({ submitted, setSubmitted }) {
  const { questions, updateVote } = useQuestions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const choiceId = e.target.choice.value;
    console.log(choiceId);
    updateVote(parseInt(choiceId));
    setSubmitted(true);
  };
  return (
    <div>
      <div>
        <h1>{questions.question}</h1>
      </div>
      <div>
        <h2>Poll Form</h2>
        <form onSubmit={handleSubmit}>
          {questions.choices.map((choice) => (
            <div key={choice.id}>
              <input
                type="radio"
                id={choice.id}
                name="choice"
                value={choice.id}
              />
              <label htmlFor={choice.id}>{choice.label}</label>
            </div>
          ))}
          <button disabled={submitted} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserParticipation;
