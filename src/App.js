import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Cards } from "./components/Cards";
// import { EditModal } from "./components/ModalEdit/EditModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/home/:id" element={<Cards />} /> */}
        {/* <Route path="/modal-edit/:id" element={<EditModal />} /> */}
      </Routes>
    </>
  );
}
export default App;
