import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:share_id" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
