import { CurrentSelectionContextProvider } from "../../context/CurrentSelection";
import Pipboy from "../pipboy/Pipboy";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import Oops from "../errors/Oops";
import WeaponForm from "../form/form_types/WeaponForm";
import MiscForm from "../form/form_types/MiscForm";
import AidForm from "../form/form_types/AidForm";
import ArmorForm from "../form/form_types/ArmorForm";

function App() {
  return (
    <div className="App">
      <CurrentSelectionContextProvider>
        <Routes>
          <Route path="/" element={<Pipboy />} />
          <Route path="/new/Weapons" element={<WeaponForm />} />
          <Route path="/new/Misc" element={<MiscForm />} />
          <Route path="/new/Aid" element={<AidForm />} />
          <Route path="/new/Armor" element={<ArmorForm />} />
          <Route path="/edit/Weapons/:id" element={<WeaponForm />} />
          <Route path="/edit/Armor/:id" element={<ArmorForm />} />
          <Route path="/edit/Aid/:id" element={<AidForm />} />
          <Route path="/edit/Misc/:id" element={<MiscForm />} />
          <Route path="/oops" element={<Oops />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentSelectionContextProvider>
    </div>
  );
}

export default App;
