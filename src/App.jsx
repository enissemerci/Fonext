import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

import { Selamla } from "./screens/Selamla";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/:userId" element={<Selamla />} />
      </Routes>
    </>
  );
}

export default App;
