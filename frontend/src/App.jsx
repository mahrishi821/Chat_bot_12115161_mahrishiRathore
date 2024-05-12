
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Card from "./pages/home/Card";
import { useToggleContext } from "./context/ToggleContext";


function App() {
  const { authUser } = useAuthContext();
  const { toggle } = useToggleContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <div className={`absolute z-50 ${!toggle ? 'hidden' : ''}`}>
        <Card />
      </div>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"login"} ></Navigate>} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
