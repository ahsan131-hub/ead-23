import { Divider } from "antd";
import AnotherParticipation from "./components/AnotherParticipation";
import PollDisplay from "./components/PollDisplay";
import ThankYou from "./components/ThankYou";
import UserParticipation from "./components/UserParticipation";
import { useQuestions } from "./context/Questions";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="App">
      <PollDisplay />
      <Divider />
      <UserParticipation submitted={submitted} setSubmitted={setSubmitted} />
      {submitted && <ThankYou />}
      <AnotherParticipation submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
}

export default App;
