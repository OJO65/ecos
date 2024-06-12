import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Login from './Components/Login';

function App() {
  const location = useLocation();
const isLoginPage = location.pathname === '/Login'
  return (
    <div style={{ backgroundColor: isLoginPage ? 'white' : 'orange', height: '100vh'}}>
         {!isLoginPage && <Navbar />}
         {!isLoginPage && <Banner />}
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
