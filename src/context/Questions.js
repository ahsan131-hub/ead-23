import React, { useEffect, useState } from "react";

const data = {
  question: "What is your favorite programming language?",
  choices: [
    { id: 1, label: "JavaScript", votes: 0 },

    { id: 2, label: "Python", votes: 0 },

    { id: 3, label: "Java", votes: 0 },

    { id: 4, label: "C#", votes: 0 },
  ],
};

const QuestionsContext = React.createContext();
export const useQuestions = () => React.useContext(QuestionsContext);

const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState(data);
  const updateVote = (id) => {
    const newQuestions = { ...questions };
    console.log("form context id", id);
    console.log(newQuestions.choices);
    const choice = newQuestions.choices.find((c) => c.id === id);
    console.log("form context ", choice);
    choice.votes++;
    setQuestions(newQuestions);
  };

  return (
    <QuestionsContext.Provider value={{ questions, updateVote }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
