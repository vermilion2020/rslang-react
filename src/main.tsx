import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UnitState } from "./context/UnitContext.tsx";
import { ModalState } from "./context/ModalContext.tsx";
import { AuthState } from "./context/AuthContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store} >
    <BrowserRouter>
      <UnitState>
        <ModalState>
          <AuthState>
            <App />
          </AuthState>
        </ModalState>
      </UnitState>
    </BrowserRouter>
  </Provider>
)
