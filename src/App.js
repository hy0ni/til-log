import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Reducer from "./experiments/Reducer";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reducer" element={<Reducer />} />
      </Routes>
    </Router>
  );
}

export default App;
