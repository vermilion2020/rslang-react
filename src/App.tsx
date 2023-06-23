import { Routes, Route } from "react-router-dom";
import './App.scss'
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Textbook } from './pages/textbook/Textbook';
import { Dictionary } from './pages/dictionary/Dictionary';
import { Sprint } from './pages/Sprint';
import { Audio } from './pages/Audio';
import { Team } from './pages/team/Team';
import { Stats } from './pages/Stats';
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./pages/notFound/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
