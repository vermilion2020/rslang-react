import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UnitState } from "./context/UnitContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UnitState>
      <App />
    </UnitState>
  </BrowserRouter>,
)
