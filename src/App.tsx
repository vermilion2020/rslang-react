import { Routes, Route } from "react-router-dom";
import './App.scss'
import { Header } from './components/header/Header';
import { Main } from './pages/Main';
import { Textbook } from './pages/Textbook';
import { Dictionary } from './pages/Dictionary';
import { Sprint } from './pages/Sprint';
import { Audio } from './pages/Audio';
import { Team } from './pages/Team';
import { Stats } from './pages/Stats';
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/textbook" element={<Textbook />}></Route>
        <Route path="/dictionary" element={<Dictionary />}></Route>
        <Route path="/sprint" element={<Sprint />}></Route>
        <Route path="/audio" element={<Audio />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
