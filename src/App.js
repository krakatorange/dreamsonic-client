import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Home from "./pages/Home";

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:share_id" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
