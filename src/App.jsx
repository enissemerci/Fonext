import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom"; // Routes ve Route doğru şekilde import ediliyor
import { Selamla } from "./screens/Selamla";
import { NewContent } from "./components/NewContent";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/:userId" element={<Selamla />} />
        <Route exact path="/" element={ <SideBar />} />
        <Route path="/yeniiçerik" element={<NewContent />} />
        <Route path="/istatistik" element={<Statistics />} />
      </Routes>
    </>
  );
}

export default App;
