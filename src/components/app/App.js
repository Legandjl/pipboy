import { CurrentSelectionContextProvider } from "../../context/CurrentSelection";
import Pipboy from "../pipboy/Pipboy";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FormController from "../form/FormController";
import NotFound from "../errors/NotFound";
import Oops from "../errors/Oops";

function App() {
  return (
    <div className="App">
      <CurrentSelectionContextProvider>
        <Routes>
          <Route path="/" element={<Pipboy />} />
          <Route path="/new" element={<FormController />} />
          <Route path="/edit/:selection/:id" element={<FormController />} />
          <Route path="/oops" element={<Oops />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentSelectionContextProvider>
    </div>
  );
}

export default App;
