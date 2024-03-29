import { useQuestions } from "../context/Questions";
import React from "react";
import { Button, Divider } from "antd";

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
      <Divider />
      <div>
        <h2>Poll Form</h2>
        <h1>{questions.question}</h1>
      </div>
      <div>
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
          <Button type="primary" htmlType="submit" disabled={submitted}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UserParticipation;
