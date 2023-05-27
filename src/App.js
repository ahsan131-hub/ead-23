import PollDisplay from "./components/PollDisplay";
import UserParticipation from "./components/UserParticipation";
import { useQuestions } from "./context/Questions";
function App() {
  const questions = useQuestions();
  return (
    <div className="App">
      <PollDisplay />
      <UserParticipation />
    </div>
  );
}

export default App;
