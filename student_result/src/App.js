import { Routes, Route } from "react-router-dom"
import './App.css';
import Resulte from "./component/resulte";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Resulte/>} />
      </Routes>
    </div>
  );
}

export default App;
