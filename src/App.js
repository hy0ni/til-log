import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Reducer from "./experiments/Reducer";
import Context from "./experiments/Context";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </Router>
  );
}

export default App;
