import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UnitState } from "./context/UnitContext.tsx";
import { ModalState } from "./context/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UnitState>
      <ModalState>
        <App />
      </ModalState>
    </UnitState>
  </BrowserRouter>,
)
