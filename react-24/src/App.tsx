import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Welcome from "./pages/Welcome";
import ZenMode from "./pages/ZenMode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/zenmode" element={<ZenMode />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
