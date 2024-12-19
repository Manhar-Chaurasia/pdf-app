import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PDFList from "./components/PDFList";
import PDFReader from "./components/PDFReader";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<PDFList />} />
          <Route path="/reader/:id" element={<PDFReader />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
