import PollDisplay from "./components/PollDisplay";
import { useQuestions } from "./context/Questions";
function App() {
  const questions = useQuestions();
  return (
    <div className="App">
      <PollDisplay />
    </div>
  );
}

export default App;
