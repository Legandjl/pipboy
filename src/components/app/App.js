import { CurrentSelectionContextProvider } from "../../context/CurrentSelection";
import Pipboy from "../pipboy/Pipboy";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddForm from "../form/AddForm";

function App() {
  return (
    <div className="App">
      <CurrentSelectionContextProvider>
        <Routes>
          <Route path="/" element={<Pipboy />} />
          <Route path="/new" element={<AddForm />} />
        </Routes>
      </CurrentSelectionContextProvider>
    </div>
  );
}

export default App;
