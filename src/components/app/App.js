import { CurrentSelectionContextProvider } from "../../context/CurrentSelection";
import Pipboy from "../pipboy/Pipboy";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormController from "../form/FormController";

function App() {
  return (
    <div className="App">
      <CurrentSelectionContextProvider>
        <Routes>
          <Route path="/" element={<Pipboy />} />
          <Route path="/new" element={<FormController />} />
          <Route path="/edit/:selection/:id" element={<FormController />} />
        </Routes>
      </CurrentSelectionContextProvider>
    </div>
  );
}

export default App;
