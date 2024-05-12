import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { NewContent } from "./screens/NewContent";
import { Selamla } from "./screens/Selamla";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/NewContent" element={<NewContent />} />
        <Route path="/:userId" element={<Selamla/>}/>
      </Routes>
    </>
  );
}

export default App;
