import { Routes, Route } from "react-router-dom";
import './App.scss'
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Textbook } from './pages/textbook/Textbook';
import { Dictionary } from './pages/dictionary/Dictionary';
import { Sprint } from './pages/sprint/Sprint';
import { Audio } from './pages/audio/Audio';
import { Team } from './pages/team/Team';
import { Stats } from './pages/Stats';
import { Footer } from "./components/footer/Footer";
import { NotFound } from "./pages/notFound/NotFound";
import { ModalContext } from "./context/ModalContext";
import { useContext } from "react";
import { Modal } from "./components/modal/Modal";
import { Registration } from "./components/modal/Registration";
import { Auth } from "./components/modal/Auth";

function App() {
  const { modalReg, modalAuth, setModalReg, setModalAuth } = useContext(ModalContext);
  return (
    <>
      <Header />
      { modalReg && <Modal onClose={() => setModalReg(false)}>
        <Registration />
      </Modal> }
      { modalAuth && <Modal onClose={() => setModalAuth(false)}>
        <Auth />
      </Modal> }
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
