import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import { ToggleContextProvider } from './context/ToggleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <ToggleContextProvider>
            <App />
          </ToggleContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
);
