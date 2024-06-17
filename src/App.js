import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Login from './Components/Login';
import Carousel from './Components/Carousel';
import Carousel2 from './Components/Carousel2.jsx';
import Carousel3 from './Components/Carousel3.jsx';
import Carousel4 from './Components/Carousel4.jsx';
import Carousel5 from './Components/Carousel5.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <div className={`h-full ${isLoginPage ? 'bg-white' : ''}`}>
      {!isLoginPage && <Navbar />}
      {!isLoginPage && <Banner />}
      {!isLoginPage && <div className="mb-6"><Carousel /></div>}
      {!isLoginPage && <div className='mb-6 mr-[20px] ml-[20px] rounded-md'><Carousel2 /></div>}
      {!isLoginPage && <div className='mb-6 mr-[20px] ml-[20px] rounded-md'><Carousel3 /></div>}
      {!isLoginPage && <div className='mb-6 mr-[20px] ml-[20px] rounded-md'><Carousel4 /></div>}
      {!isLoginPage && <div className="mb-6"><Carousel5 /></div>}
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
