import { Routes, Route } from "react-router-dom"; // <== IMPORT
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;