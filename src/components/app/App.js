import { CurrentSelectionContextProvider } from "../../context/CurrentSelection";
import Pipboy from "../pipboy/Pipboy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CurrentSelectionContextProvider>
        <Pipboy />
      </CurrentSelectionContextProvider>
    </div>
  );
}

export default App;
