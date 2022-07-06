import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Cards />} />
      </Routes>
    </>
  );
}
export default App;
