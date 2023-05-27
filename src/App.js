import AnotherParticipation from "./components/AnotherParticipation";
import PollDisplay from "./components/PollDisplay";
import UserParticipation from "./components/UserParticipation";
import { useQuestions } from "./context/Questions";
import { useState } from "react";

function App() {
  const questions = useQuestions();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="App">
      <PollDisplay />
      <UserParticipation submitted={submitted} setSubmitted={setSubmitted} />
      <AnotherParticipation submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
}

export default App;
