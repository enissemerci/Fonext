import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom"; // Routes ve Route doğru şekilde import ediliyor

import { Selamla } from "./screens/Selamla";
import { NewContent } from "./components/NewContent";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/yeniiçerik" element={<NewContent/>}/>
        <Route exact path="/:userId" element={<Selamla />} />
      </Routes>
    </>
  );
}

export default App;