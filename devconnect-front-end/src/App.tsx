import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
